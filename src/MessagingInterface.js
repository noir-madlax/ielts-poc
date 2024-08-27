import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MessageBubble = ({ sender, content, emoji }) => (
    <div className={`flex flex-col ${sender === 'Brooke' ? 'items-start' : 'items-end'} mb-1`}>
        {sender === 'Brooke' && <div className="text-gray-500 text-sm mb-1 ml-3">Brooke</div>}
        <div className={`inline-block ${sender === 'Brooke' ? 'bg-gray-100 rounded-tr-3xl' : 'bg-blue-500 text-white rounded-tl-3xl'} rounded-3xl px-4 py-2 max-w-[70%] break-words`}>
            {content}
            {emoji && <span className="ml-1">{emoji}</span>}
        </div>
        {sender !== 'Brooke' && <div className="text-blue-500 text-sm mt-1 mr-3">You</div>}
    </div>
);

const MessagingInterface = () => {
    const [messages, setMessages] = useState([
        { sender: 'Brooke', content: 'Hey Lucas!' },
        { sender: 'Brooke', content: "How's your project going?" },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (inputMessage.trim() === '') return;

        setIsLoading(true);

        // Add user message to the chat
        const userMessage = { sender: 'Lucas', content: inputMessage };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputMessage('');

        try {
            const response = await fetch('https://api.coze.com/open_api/v2/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer pat_0sBTcMWl53dCreIPScxs3pWq3tJPz3O5hD7UglO4xuyboeVSts7Yx8UoHpQChEDM' // Replace with your actual API key
                },
                body: JSON.stringify({
                    query: inputMessage,
                    bot_id: "7407375601826840592",
                    user: "admin_123",
                    stream: false,
                    auto_save_history:true,
                    // Add any other required parameters for the Coze API
                }),
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();

            // Assuming the API returns a 'response' field in the data
            const apiMessage = { sender: 'Brooke', content: data.messages.find(msg => msg.type === "answer").content || "I'm not sure how to respond to that." };
            setMessages(prevMessages => [...prevMessages, apiMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { sender: 'Brooke', content: "Sorry, I couldn't process your request. Please try again." };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-white">
            <div className="flex items-center justify-between p-4 pt-14 pb-3 relative">
                <ChevronLeft
                    className="w-6 h-6 text-blue-500 cursor-pointer absolute left-4"
                    onClick={() => navigate('/')}
                />
                <h1 className="text-xl font-semibold w-full text-center">Brooke Davis</h1>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center absolute right-4">
                    <span className="text-blue-500 text-xl">👤</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} sender={msg.sender} content={msg.content} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-2">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <button className="text-blue-500 font-bold mr-2 text-2xl">+</button>
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
                        placeholder="Type a message..."
                        className="bg-transparent flex-1 outline-none text-base"
                        disabled={isLoading}
                    />
                    <button
                        onClick={sendMessage}
                        className={`text-blue-500 font-bold ml-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessagingInterface;