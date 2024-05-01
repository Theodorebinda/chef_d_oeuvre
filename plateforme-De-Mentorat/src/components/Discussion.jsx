import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    return () => socket.off("message");
  }, [messages]);

  const sendMessage = () => {
    if (input) {
      socket.emit("newMessage", { content: input, sender: "User" });
      setInput("");
    }
  };

  return (
    <div className="pt-40">
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            {msg.sender}: {msg.content}
          </p>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
