import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const StudyReasonPage = () => {
    const navigate = useNavigate();
    const [selectedReason, setSelectedReason] = useState('');

    const reasons = [
        { id: 'travel', text: '出国旅行或者旅居', icon: '✈️' },
        { id: 'study', text: '出国留学', icon: '🎓' },
        { id: 'career', text: '促进自我职业发展', icon: '💼' },
        { id: 'improvement', text: '自我提升', icon: '🌟' },
        { id: 'other', text: '其他', icon: '🎯' },
    ];

    return (
        <div className="flex flex-col h-screen bg-white">
            <motion.div
                className="p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="w-1/5 bg-blue-500 h-2 rounded-full"></div>
                </div>
            </motion.div>
            <div className="flex-1 p-6 overflow-y-auto">
                <motion.h1
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    为什么要学习雅思口语
                </motion.h1>
                <motion.p
                    className="text-gray-500 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    请选择
                </motion.p>
                {reasons.map((reason, index) => (
                    <motion.div
                        key={reason.id}
                        className={`flex items-center p-4 rounded-lg mb-3 border ${
                            selectedReason === reason.id ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => setSelectedReason(reason.id)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="text-2xl mr-3">{reason.icon}</span>
                        <span className="text-lg">{reason.text}</span>
                        {selectedReason === reason.id && (
                            <motion.span
                                className="ml-auto text-blue-500"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            >
                                ✓
                            </motion.span>
                        )}
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <button
                    onClick={() => navigate('/onboarding/next-page')} // Update this to the next onboarding page
                    className={`w-full py-4 rounded-full text-xl font-semibold ${
                        selectedReason ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
                    } transition duration-300`}
                    disabled={!selectedReason}
                >
                    下一步
                </button>
            </motion.div>
        </div>
    );
};

export default StudyReasonPage;