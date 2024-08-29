import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-indigo-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-6xl font-bold text-white mb-auto mt-32"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                IELTS
            </motion.h1>
            <motion.button
                className="px-20 py-3 bg-blue-200 text-blue-900 rounded-full text-xl font-semibold mb-32"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                onClick={() => navigate('/onboarding/study-reason')}
            >
                开始
            </motion.button>
        </motion.div>
    );
};

export default WelcomePage;