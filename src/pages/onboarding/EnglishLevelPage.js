import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EnglishLevelPage = () => {
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState(null);

    const levels = [
        { level: '第 0 级', description: '我认识一些生词', icon: '🏳️' },
        { level: '第 1 级', description: '我知道基本常用语，能够作自我介绍，也能提出简单的个人问题。', icon: '🌟' },
        { level: '第 2 级', description: '我能理解常见的表达方式，可以就日常任务进行交流，可以简单描述自己的背景、周围环境和需求。', icon: '🏅' },
        { level: '第 3 级', description: '我可以阐明自己的观点、梦想及抱负，可以在旅行时处理较复杂的任务。', icon: '🌠' },
        { level: '第 4 级', description: '我可以毫无困难地与母语者交谈，可以就自己的工作进行复杂专业的讨论。', icon: '🏆' },
    ];

    const handleConfirm = () => {
        if (selectedLevel) {
            navigate('/onboarding/ai-tutor-selection');
        }
    };

    return (
        <motion.div
            className="flex flex-col h-screen bg-white p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="h-2 bg-blue-500 rounded-full mb-8"
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.h1
                className="text-3xl font-bold mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                如何评价自己的英语水平
            </motion.h1>
            <motion.p
                className="text-gray-500 mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                请选择
            </motion.p>
            {levels.map((item, index) => (
                <motion.div
                    key={index}
                    className={`p-4 rounded-lg mb-3 cursor-pointer ${
                        selectedLevel === item.level ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onClick={() => setSelectedLevel(item.level)}
                >
                    <div className="flex items-center">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                            <span className="font-semibold">{item.level}</span>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    </div>
                    {selectedLevel === item.level && (
                        <motion.span
                            className="float-right text-blue-500"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                            ✓
                        </motion.span>
                    )}
                </motion.div>
            ))}
            <motion.button
                className={`mt-auto py-3 rounded-lg text-xl font-semibold ${
                    selectedLevel ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
                }`}
                whileHover={selectedLevel ? { scale: 1.05 } : {}}
                whileTap={selectedLevel ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                onClick={handleConfirm}
                disabled={!selectedLevel}
            >
                确定
            </motion.button>
        </motion.div>
    );
};

export default EnglishLevelPage;