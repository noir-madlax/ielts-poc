// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MessagingInterface from './MessagingInterface';
import HomePage from './HomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chat" element={<MessagingInterface />} />
            </Routes>
        </Router>
    );
};

export default App;