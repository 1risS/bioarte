import React, { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import firebase from "gatsby-plugin-firebase"

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0.5em 0;
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
  box-shadow: 0;

  &:hover {
    color: #000;
  }
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
  cursor: ${props => (props.collapsed ? "pointer" : "normal")};
  box-shadow: 0px 5px 5px #00000040;

  .right {
    float: right;
  }

  span {
    font-weight: bold;
    color: #fff;
  }
`

const ChatMessages = styled(({ className, authenticated }) => {
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

    if (!authenticated) return

    setWriteError(null)
    setContent("")

    try {
      await firebase.database().ref("chats").push({
        content,
        timestamp: Date.now(),
        uid: currentUser.uid,
        name: currentUser.displayName,
      })
    } catch (error) {
      setWriteError(error.message)
    }
  }

  return (
    <div className={className}>
      <Messages>{messages}</Messages>
      {readError && <ErrorMessage>{readError}</ErrorMessage>}
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={content} disabled={!authenticated} />
        {writeError && <ErrorMessage>{writeError}</ErrorMessage>}
      </form>
    </div>
  )
})`
  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.5em;
    font-size: 1rem;
    border-radius: 0.5em;
    border: 0;
  }
  input:focus {
    outline: none;
  }
`

const Name = styled.p`
  color: ${props => props.color};
  font-weight: bold;
`

const Content = styled.div`
  background-color: #bed6a4;
  border-radius: 0.5rem;
  padding: 0.5em;
`

const Messages = styled(({ className, children }) => {
  const divEl = useRef(null)

  // Make sure to scroll to bottom whenever children changes
  // i.e. there are new messages...
  useEffect(() => {
    divEl.current.scrollTop = divEl.current.scrollHeight
  }, [children])

  return (
    <div ref={divEl} className={className}>
      <ul>
        {children.map(message => (
          <li key={message.timestamp}>
            <Name color="#000">{message.name}</Name>
            <Content>{message.content}</Content>
          </li>
        ))}
      </ul>
    </div>
  )
})`
  height: 300px;
  overflow-y: auto;

  li {
    display: block;
    color: #000;
    margin-bottom: 0.5em;
  }
`

const Login = styled(({ className, onGoogleSignInClick }) => (
  <div className={className}>
    <p>
      Para utilizar el chat debes iniciar sesión con alguno de estos servicios:
    </p>
    <button onClick={onGoogleSignInClick}>Iniciar con Google</button>
  </div>
))`
  p {
    font-size: 0.8rem;
  }
`

const ChatContainer = styled.div`
  position: fixed;
  right: 2em;
  width: ${props => (props.collapsed ? "auto" : "350px")};
  bottom: 0;
  background-color: #fff2cd;
  border-radius: 1rem 1rem 0 0;
  & {
    box-shadow: 5px 5px 5px #00000040;
  }
`

const ChatContent = styled.div`
  padding: 1em;
`

const Chat = () => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    setErrorMessage(null)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true)
        setLoading(false)
      } else {
        setAuthenticated(false)
        setLoading(false)
      }
    })
  }, [])

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
    <ChatContainer collapsed={collapsed}>
      <ChatBar
        collapsed={collapsed}
        onCollapseClick={onCollapseClick}
        onExpandClick={onExpandClick}
      />
      {!collapsed && (
        <ChatContent>
          {loading ? (
            <span>Cargando...</span>
          ) : (
            <>
              {!authenticated && (
                <>
                  <Login onGoogleSignInClick={onGoogleSignInClick} />
                  <ErrorMessage>{errorMessage}</ErrorMessage>
                </>
              )}
              <ChatMessages authenticated={authenticated} />
            </>
          )}
        </ChatContent>
      )}
    </ChatContainer>
  )
}

export default Chat
