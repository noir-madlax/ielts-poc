import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import EnglishLearningTopics from './pages/main/EnglishLearningTopics';
import MessagingInterface from "./MessagingInterface";
import TopicDetailPage from "./pages/main/TopicDetailPage";
import FullTestPage from "./pages/main/FullTestPage";
import WelcomePage from "./pages/onboarding/WelcomePage";
import StudyReasonPage from "./pages/onboarding/StudyReasonPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/welcome" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/topics" element={<EnglishLearningTopics />} />
                <Route path="/chat" element={<MessagingInterface />} />
                <Route path="/topic/:topicId" element={<TopicDetailPage />} />
                <Route path="/full-test/:topicId" element={<FullTestPage />} />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/onboarding">
                    <Route path="welcome" element={<WelcomePage />} />
                    <Route path="study-reason" element={<StudyReasonPage />} />
                    {/* Add more onboarding routes here */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;