import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StudyProgressPage = () => {
    const navigate = useNavigate();

    const progressData = {
        daysLeft: 33,
        progressPercentage: 66,
        currentDay: 66,
        tip: '要注意惯语的使用',
        mockExams: [
            { category: '词汇', score: 7.0, icon: '📚' },
            { category: '流利和连贯', score: 6.5, icon: '🔗' },
            { category: '语法多样性', score: 6.5, icon: '📝' },
            { category: '发音', score: 7.0, icon: '🔊' },
        ],
        examRecords: [
            { name: '雅思口语真题模考', score: 6.5, time: '14:44' },
            { name: '雅思口语真题模考', score: 6.5, time: '11:40' },
        ],
    };

    return (
        <motion.div
            className="flex flex-col h-screen bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="text-center py-4">
                <motion.h1
                    className="text-2xl font-bold"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    备考进展
                </motion.h1>
            </header>

            <main className="flex-1 overflow-y-auto px-4 pb-16">
                <motion.div
                    className="bg-blue-500 text-white rounded-lg p-4 mb-6 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-lg font-semibold">距离考试还有{progressData.daysLeft}天</h2>
                        <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">第{progressData.currentDay}天</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                        <div className="flex-1 h-1 bg-blue-400 rounded-full">
                            <div
                                className="h-full bg-white rounded-full"
                                style={{ width: `${progressData.progressPercentage}%` }}
                            ></div>
                        </div>
                        <span className="ml-2">Band 7</span>
                    </div>
                    <p className="text-sm mb-4">{progressData.tip}</p>
                    <button className="w-full bg-white text-blue-500 py-2 rounded-lg font-semibold">
                        今天也再来一次真题模拟吧~
                    </button>
                </motion.div>

                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">当前表现</h3>
                        <a href="#" className="text-blue-500">提升建议 &gt;</a>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-4">
                        <h4 className="text-md font-semibold mb-3">模考成绩（共计6次模考均分）</h4>
                        <div className="bg-white rounded-lg p-4">
                            <div className="grid grid-cols-2 gap-4">
                                {progressData.mockExams.map((exam, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <span className="text-2xl mr-2">{exam.icon}</span>
                                        <div>
                                            <p className="text-xl font-bold text-blue-500">{exam.score}</p>
                                            <p className="text-sm text-gray-500">{exam.category}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-lg font-semibold mb-4">考试记录</h3>
                    <div className="bg-gray-200 rounded-lg p-4">
                        <h4 className="text-md font-semibold mb-3">今日（最近5次模考均分）</h4>
                        <div className="bg-white rounded-lg p-4">
                            {progressData.examRecords.map((record, index) => (
                                <motion.div
                                    key={index}
                                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <p className="font-semibold">{record.name}</p>
                                    <div className="flex items-center">
                                        <p className="text-blue-500 font-semibold mr-4">{record.score}分</p>
                                        <p className="text-gray-500">{record.time}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </main>

            <motion.nav
                className="bg-white border-t flex justify-around items-center py-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <button
                    className="flex flex-col items-center text-gray-400"
                    onClick={() => navigate('/main')}
                >
                    <span className="text-2xl">🎯</span>
                    <span className="text-xs">目标</span>
                </button>
                <button
                    className="flex flex-col items-center text-gray-400"
                    onClick={() => navigate('/topics')}
                >
                    <span className="text-2xl">📝</span>
                    <span className="text-xs">真题模考</span>
                </button>
                <button
                    className="flex flex-col items-center text-blue-500"
                >
                    <motion.span
                        className="text-2xl"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        📈
                    </motion.span>
                    <span className="text-xs">备考进度</span>
                </button>
                <button
                    className="flex flex-col items-center text-gray-300 cursor-not-allowed"
                    disabled
                >
                    <span className="text-2xl">👤</span>
                    <span className="text-xs">我的</span>
                </button>
            </motion.nav>
        </motion.div>
    );
};

export default StudyProgressPage;