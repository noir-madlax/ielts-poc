import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import scoreImage from './assets/score.png';

const ExamReportPage = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="bg-white p-4 flex items-center">
                <button onClick={() => navigate(-1)} className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold text-center flex-1">考试报告</h1>
            </header>

            <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-2">LOGO-IELTS</h2>
                <p className="text-lg mb-1">给你最专业的雅思口语报告</p>
                <p className="mb-4">考生 <span className="text-blue-500">PiPi</span></p>

                <div className="rounded-lg p-6 mb-6">
                    {/* 替换为透明片图片 */}
                    <img
                        src={scoreImage}
                        alt="Exam Report"
                        className="w-full h-auto"
                    />
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                    <h3 className="font-semibold mb-4">批改与建议 (24)</h3>
                    <div className="flex mb-4 overflow-x-auto">
                        <button className="text-blue-500 font-semibold mr-4 whitespace-nowrap">Part1</button>
                        <button className="text-gray-400 mr-4 whitespace-nowrap">Part2</button>
                        <button className="text-gray-400 mr-4 whitespace-nowrap">Part3</button>
                        <button className="text-gray-400 mr-4 whitespace-nowrap">语法</button>
                        <button className="text-gray-400 whitespace-nowrap">词汇</button>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <p className="font-semibold mb-2">1. Do you like eating chocolate? Why or why not?</p>
                        <p className="text-green-500 mb-2">80分</p>
                        <p className="font-semibold mb-2">你的回答</p>
                        <p className="mb-4">I like eating chocolate because I can feel happy after eating it. Chocolates c...</p>
                        <p className="font-semibold mb-2">提分技巧</p>
                        <p className="text-gray-600">Your answer is quite redundant. Try to make your answer more concise and focused. Also, try to provide specific details to support your answer.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ExamReportPage;