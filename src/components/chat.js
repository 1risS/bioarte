import React, { useEffect, useState } from "react"
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

const ChatHeader = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  color: white;
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
      <ChatHeader>Chat</ChatHeader>
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
    color: white;
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
  background-color: green;
`

const Chat = () => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

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

  const onGoogleSignInClick = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <ChatContainer>
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <>
          {!authenticated && (
            <Login onGoogleSignInClick={onGoogleSignInClick} />
          )}
          <ChatMessages authenticated={authenticated} />
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </>
      )}
    </ChatContainer>
  )
}

export default Chat
