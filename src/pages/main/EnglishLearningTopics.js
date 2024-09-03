import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EnglishLearningTopics = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('全部');

    const topics = [
        { title: "Staying at home", subtitle: "宅在家里", icon: "🏠", progress: 0, total: 6 },
        { title: "E-books", subtitle: "电子书", icon: "📚", progress: 0, total: 4 },
        { title: "Science", subtitle: "科学", icon: "🔬", progress: 0, total: 6 },
        { title: "News", subtitle: "新闻", icon: "📰", progress: 0, total: 4 },
        { title: "Library", subtitle: "图书馆", icon: "📚", progress: 0, total: 4 },
        { title: "Keys", subtitle: "钥匙", icon: "🔑", progress: 0, total: 2 },
        { title: "Jewelry", subtitle: "珠宝", icon: "💎", progress: 0, total: 4 },
        { title: "Life Stages", subtitle: "人生阶段", icon: "🚶", progress: 0, total: 4 },
        { title: "Relax", subtitle: "放松", icon: "😌", progress: 0, total: 4 },
        { title: "Shopping", subtitle: "购物", icon: "🛍️", progress: 0, total: 4 },
    ];

    const options = ['全部', '5-8月真题', '1-4月真题', '9-12月真题'];

    const handleTopicClick = (index) => {
        navigate(`/topic/${index + 1}`);
    };

    return (
        <motion.div
            className="flex flex-col h-screen bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="p-4 bg-gray-100"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex justify-center space-x-4 mb-4">
                    <motion.button
                        className="px-4 py-2 rounded-full bg-gray-200 text-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        分段练习
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 rounded-full bg-blue-500 text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        全程模拟
                    </motion.button>
                </div>
                <div className="flex justify-between text-sm">
                    {options.map((option, index) => (
                        <motion.span
                            key={option}
                            className={`cursor-pointer ${selectedOption === option ? 'font-bold' : ''}`}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setSelectedOption(option)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            {option}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {topics.map((topic, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        onClick={() => handleTopicClick(index)}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-lg font-semibold">{topic.title}</h3>
                                <p className="text-sm text-gray-600">{topic.subtitle}</p>
                            </div>
                            <motion.span
                                className="text-2xl"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                            >
                                {topic.icon}
                            </motion.span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <motion.div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${(topic.progress / topic.total) * 100}%` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${(topic.progress / topic.total) * 100}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }}
                            ></motion.div>
                        </div>
                        <p className="text-right text-xs text-gray-500 mt-1">{topic.progress}/{topic.total}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.nav
                className="bg-white border-t flex justify-around items-center py-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <button
                    className="flex flex-col items-center text-gray-400"
                    onClick={() => navigate('/main')}
                >
                    <span className="text-2xl">🎯</span>
                    <span className="text-xs">目标</span>
                </button>
                <button
                    className="flex flex-col items-center text-blue-500"
                >
                    <span className="text-2xl">📝</span>
                    <span className="text-xs">真题模考</span>
                </button>
                <button
                    className="flex flex-col items-center text-gray-400"
                    onClick={() => navigate('/progress')}
                >
                    <span className="text-2xl">📈</span>
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

export default EnglishLearningTopics;