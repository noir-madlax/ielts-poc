import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TargetScorePage = () => {
    const navigate = useNavigate();
    const [selectedScore, setSelectedScore] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const scores = [
        { score: '6分', icon: '⭐' },
        { score: '6.5分', icon: '🌟' },
        { score: '7分', icon: '🏅' },
    ];

    const times = ['1个月', '2个月', '3个月及以上'];

    const isNextEnabled = selectedScore && selectedTime;

    const handleNext = () => {
        if (isNextEnabled) {
            navigate('/onboarding/english-level');
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
                animate={{ width: '60%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.h1
                className="text-3xl font-bold mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                目标雅思口语分数
            </motion.h1>
            <motion.p
                className="text-gray-500 mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                请选择
            </motion.p>
            <div className="flex justify-between mb-8">
                {scores.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`w-24 h-24 rounded-lg flex flex-col items-center justify-center cursor-pointer ${
                            selectedScore === item.score ? 'bg-blue-100' : 'bg-gray-100'
                        }`}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        onClick={() => setSelectedScore(item.score)}
                    >
                        <span className="text-2xl mb-2">{item.icon}</span>
                        <span className="text-lg font-semibold">{item.score}</span>
                    </motion.div>
                ))}
            </div>
            <motion.p
                className="text-gray-500 mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                请选择距离考试的时间
            </motion.p>
            {times.map((time, index) => (
                <motion.div
                    key={index}
                    className={`p-4 rounded-lg mb-3 cursor-pointer ${
                        selectedTime === time ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    onClick={() => setSelectedTime(time)}
                >
                    <span className="text-lg">{time}</span>
                    {selectedTime === time && (
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
                    isNextEnabled ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
                }`}
                whileHover={isNextEnabled ? { scale: 1.05 } : {}}
                whileTap={isNextEnabled ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                onClick={handleNext}
                disabled={!isNextEnabled}
            >
                下一步
            </motion.button>
        </motion.div>
    );
};

export default TargetScorePage;