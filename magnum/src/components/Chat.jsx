import React from "react";
import { useState, useRef, useEffect } from "react";

const Chat = ({ initialQuery }) => {
    const [messages, setMessage] = useState([
        { type: 'user', content: initialQuery}
    ]);

    const chatEndRef = useRef(null)
    
    const scrollBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollBottom()
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`${message.type === 'user' ? 'user-message' : 'ai-message'}`}>
                        <div className="message-content">
                            {message.content}
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
        </div>        
    )
}

export default Chat;