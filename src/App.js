import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import EnglishLearningTopics from './pages/topics/EnglishLearningTopics';
import MessagingInterface from "./MessagingInterface";
import TopicDetailPage from "./pages/topics/TopicDetailPage";
import FullTestPage from "./pages/topics/FullTestPage";
import WelcomePage from "./pages/onboarding/WelcomePage";
import StudyReasonPage from "./pages/onboarding/StudyReasonPage";
import TargetScorePage from "./pages/onboarding/TargetScorePage";
import EnglishLevelPage from "./pages/onboarding/EnglishLevelPage";
import AITutorSelection from "./pages/onboarding/AITutorSelection";
import LoadingPlan from "./pages/onboarding/LoadingPlan";
import SubscriptionPlan from "./pages/onboarding/SubscriptionPlan";
import MainPage from "./pages/main/MainPage";
import StudyProgressPage from "./pages/progress/StudyProgressPage";
import ExamReportPage from "./pages/progress/ExamReportPage";
import LanguageSelectionPage from "./pages/onboarding/LanguageSelectionPage";

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
                    <Route path="target-score" element={<TargetScorePage />} />
                    <Route path="english-level" element={<EnglishLevelPage />} />
                    <Route path="ai-tutor-selection" element={<AITutorSelection />} />
                    <Route path="loading-plan" element={<LoadingPlan />} />
                    <Route path="subscription-plan" element={<SubscriptionPlan />} />
                    <Route path="language-selection" element={<LanguageSelectionPage />} />
                    {/* Add more onboarding routes here */}
                </Route>

                <Route path="/main" element={<MainPage />} />
                <Route path="/progress" element={<StudyProgressPage />} />
                <Route path="/exam-report" element={<ExamReportPage />} />
            </Routes>
        </Router>
    );
};

export default App;