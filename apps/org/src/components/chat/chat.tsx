'use client';

// pages/chat.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Ensure to replace this URL with the actual URL where your Socket.IO server is running
const SOCKET_IO_URL = 'http://localhost:3000';
const socket = io(SOCKET_IO_URL, {
  autoConnect: false,
  cors: {
    origin: 'https://example.com',
    methods: ['GET', 'POST'],
  },
});

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    // Connect to Socket.IO server
    socket.connect();

    // Listen for messages from the server
    socket.on('message', (msg) => {
      setMessages((prevMessages: any) => [...prevMessages, msg]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('message');
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Send a message to the server
    if (message) {
      socket.emit('message', message);
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages.map((msg: any, index: number) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}
