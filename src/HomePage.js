// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Chat App</h1>
            <button
                onClick={() => navigate('/chat')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Start Chatting
            </button>
        </div>
    );
};

export default HomePage;