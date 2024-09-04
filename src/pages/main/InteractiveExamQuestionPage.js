import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InteractiveExamQuestionPage = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    const handleShowAnswer = () => {
        setShowAnswer(true);
        setProgress(100); // 直接设置进度为100%
    };

    const handleConfirm = () => {
        navigate('/next-page'); // 替换为实际的下一个页面路由
    };

    const handleScoreClick = () => {
        navigate('/score-details'); // 替换为实际的评分详情页面路由
    };

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b">
                <button onClick={() => navigate(-1)} className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold">A historical event</h1>
                <button onClick={() => navigate('/full-test/1')} className="text-blue-500">
                    考题列表
                </button>
            </header>

            {/* Progress Bar */}
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    {['Part1', 'Part2', 'Part3'].map((part, index) => (
                        <div key={part} className="flex flex-col items-center">
              <span className={`text-sm ${progress === 100 ? 'text-blue-500 font-bold' : 'text-gray-400'}`}>
                {part}
              </span>
                            <motion.div
                                className={`w-3 h-3 rounded-full mt-1 ${progress === 100 ? 'bg-blue-500' : 'bg-gray-300'}`}
                                initial={false}
                                animate={{ backgroundColor: progress === 100 ? '#3B82F6' : '#D1D5DB' }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full h-1 bg-gray-200 mt-2">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Question */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-lg font-semibold">When do you normally have free time?</p>
                    <div className="flex items-center mt-2 text-gray-500 text-sm">
                        <span className="mr-2">转文字</span>
                        <span className="mr-2">|</span>
                        <span className="mr-2">AI</span>
                        <span>))</span>
                    </div>
                </div>

                <AnimatePresence>
                    {showAnswer && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-blue-500 text-white p-4 rounded-lg mb-4"
                        >
                            <p>
                                I usually have free time on weekends and evenings after work. On weekends, I can
                                relax, read books, watch movies, or go out for a walk. In the evenings after work, I
                                might have a few hours to do hobbies like painting or listening to music. Sometimes, if
                                I manage my schedule well, I can also find some free time during weekdays for short
                                breaks or to do something I enjoy.
                            </p>
                            <div className="flex items-center mt-2 text-sm">
                                <span className="mr-2">转文字</span>
                                <span className="mr-2">|</span>
                                <span className="mr-2">AI</span>
                                <span>))</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {showAnswer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center mb-4"
                    >
                        <button
                            onClick={handleScoreClick}
                            className="text-green-500 flex items-center space-x-4"
                        >
                            <span>发音6.5</span>
                            <span>|</span>
                            <span>语法7.0</span>
                            <span>|</span>
                            <span>流利6.5</span>
                            <span>|</span>
                            <span>用词6.5</span>
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Bottom Button */}
            <div className="p-4">
                <button
                    onClick={showAnswer ? handleConfirm : handleShowAnswer}
                    className={`w-full py-3 rounded-full text-lg font-semibold flex items-center justify-center
            ${showAnswer ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-500'}`}
                >
                    {showAnswer ? '确定' : (
                        <>
                            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
                                <path d="M19 12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M5 12C5 10.1435 5.73754 8.36301 7.05025 7.05025C8.36297 5.73754 10.1435 5 12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            点击说话
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default InteractiveExamQuestionPage;