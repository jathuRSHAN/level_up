import React, { useState } from 'react';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false); // For toggling chatbox visibility

    const sendMessage = async () => {
        if (!userInput) return;

        const userMessage = { sender: 'user', text: userInput };
        setMessages([...messages, userMessage]);

        try {
            const response = await fetch('http://127.0.0.1:5000/get_response', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_message: userInput }),
            });
            const data = await response.json();
            const botMessage = { sender: 'bot', text: data.response };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        }

        setUserInput('');
    };

    return (
        <div className="fixed bottom-5 right-5">
            {/* Chatbot toggle button */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Close Chat' : 'Open Chat'}
            </button>

            {/* Chatbox container */}
            {isOpen && (
                <div className="mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-300 p-4">
                    <div className="h-64 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-2 rounded-lg ${msg.sender === 'user'
                                        ? 'bg-blue-100 text-right'
                                        : 'bg-gray-100 text-left'
                                    }`}
                            >
                                <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input field and send button */}
                    <div className="mt-2 flex">
                        <input
                            type="text"
                            className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none"
                            placeholder="Type a message..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        />
                        <button
                            className="bg-blue-500 text-white px-4 rounded-r-lg"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
