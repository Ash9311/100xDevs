import { useEffect, useState } from 'react'
import './App.css'

function useSocket() {
  const [socket, setSocket] = useState<null | WebSocket>(null)

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connected');
      socket.send('Hello Server!');
      setSocket(socket);
    }
    return () => {
      socket.close();
    }
  }, []);
  return socket;
}


function App() {
  const socket = useSocket();

  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if(socket){
    socket.onmessage = (message) => {
      console.log('Received message:', message.data);
      setLatestMessage(message.data);
    }
  }
  }, [])

if (!socket) {
  return (
    <div>
      Loading...
    </div>
  )
}

return (
  <>
    <input onChange={(e) => { setMessage(e.target.value) }}></input>
    <button onClick={() => { socket.send(message); }}>
      Send
    </button>
    {latestMessage}
  </>
)
}

export default App
