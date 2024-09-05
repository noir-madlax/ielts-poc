import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-700 via-blue-800 to-purple-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="flex-1 flex items-center justify-center w-full">
                <motion.h1
                    className="text-6xl font-bold text-white"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    IELTS
                </motion.h1>
            </div>

            <motion.div
                className="w-full px-8 mb-24"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <button
                    className="w-full py-3 bg-blue-300 text-blue-900 rounded-lg text-xl font-semibold"
                    onClick={() => navigate('/onboarding/study-reason')}
                >
                    开始
                </button>
            </motion.div>
        </motion.div>
    );
};

export default WelcomePage;