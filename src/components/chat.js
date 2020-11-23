import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWindowMinimize,
  faWindowMaximize,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import firebase from "gatsby-plugin-firebase"

const ErrorMessage = styled.p`
  color: red;
`

const maxMessages = 100

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

const ChatBarButton = styled(props => <FontAwesomeIcon {...props} />)`
  color: #fff;
  cursor: pointer;
  margin: 0.25em;
`

const ChatBar = styled(
  ({ className, collapsed = false, onCollapseClick, onExpandClick }) => (
    <div className={className} onClick={() => collapsed && onExpandClick()}>
      <span>Chat</span>
      {!collapsed && (
        <div className="right">
          <ChatBarButton icon={faTimes} onClick={onCollapseClick} />
        </div>
      )}
    </div>
  )
)`
  background-color: #518f44;
  padding: 0.5em 0.75em 0.5em 0.75em;
  border-radius: 1rem 1rem 0 0;
  cursor: pointer;

  .right {
    float: right;
  }

  span {
    font-weight: bold;
    color: #fff;
  }
`

const ChatMessages = ({ authenticated }) => {
  const [messages, setMessages] = useState([])
  const [readError, setReadError] = useState(null)
  const [writeError, setWriteError] = useState(null)
  const [content, setContent] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setReadError(null)
    try {
      firebase
        .database()
        .ref("chats")
        .orderByChild("timestamp")
        .limitToLast(maxMessages)
        .on("value", snapshot => {
          let chats = []
          snapshot.forEach(snap => {
            chats.push(snap.val())
          })
          setMessages(chats)
        })
    } catch (error) {
      setReadError(error.message)
    }
  }, [])

  useEffect(() => {
    setCurrentUser(firebase.auth().currentUser)
  }, [authenticated])

  const onChange = e => {
    setContent(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    setWriteError(null)

    try {
      await firebase.database().ref("chats").push({
        content,
        timestamp: Date.now(),
        uid: currentUser.uid,
        name: currentUser.displayName,
      })
      setContent("")
    } catch (error) {
      setWriteError(error.message)
    }
  }

  return (
    <>
      <Messages>{messages}</Messages>
      {readError && <ErrorMessage>{readError}</ErrorMessage>}
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={content} disabled={!authenticated} />
        {writeError && <ErrorMessage>{writeError}</ErrorMessage>}
        <button type="submit" disabled={!authenticated}>
          Send
        </button>
      </form>
    </>
  )
}

const Name = styled.span`
  color: ${props => props.color};
  font-weight: bold;
`

const Content = styled.span``

const Messages = styled(({ className, children }) => (
  <div className={className}>
    <ul>
      {children.map(message => (
        <li key={message.timestamp}>
          <Name color="blue">{message.name}</Name>:{" "}
          <Content>{message.content}</Content>
        </li>
      ))}
    </ul>
  </div>
))`
  height: 200px;
  overflow-y: auto;

  li {
    color: #000;
  }
`

const Login = ({ onGoogleSignInClick }) => (
  <div>
    <p>
      Para utilizar el chat debes iniciar sesión con alguno de estos servicios:
    </p>
    <button onClick={onGoogleSignInClick}>Iniciar con Google</button>
  </div>
)

const ChatContainer = styled.div`
  position: fixed;
  right: 2em;
  width: 300px;
  bottom: 0;
  background-color: #fff2cd;
`

const Chat = () => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true)
        setLoading(false)
      } else {
        setAuthenticated(false)
        setLoading(false)
      }
    })
  })

  const onCollapseClick = () => {
    setCollapsed(true)
  }

  const onExpandClick = () => {
    setCollapsed(false)
  }

  const onGoogleSignInClick = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <ChatContainer>
      <ChatBar
        collapsed={collapsed}
        onCollapseClick={onCollapseClick}
        onExpandClick={onExpandClick}
      />
      {!collapsed &&
        (loading ? (
          <span>Cargando...</span>
        ) : (
          <>
            {!authenticated && (
              <Login onGoogleSignInClick={onGoogleSignInClick} />
            )}
            <ChatMessages authenticated={authenticated} />
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </>
        ))}
    </ChatContainer>
  )
}

export default Chat
