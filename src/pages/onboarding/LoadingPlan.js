import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoadingPlan = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main-app');  // 假设主应用页面的路由是 '/main-app'
        }, 3000);  // 3秒后自动跳转

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <motion.div
                className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.h1
                className="text-2xl font-bold mt-8 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                稍等片刻......
            </motion.h1>
            <motion.p
                className="text-lg text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                我们正在为您生成雅思口语练习计划!
            </motion.p>
            <motion.div
                className="mt-8 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                <div className="flex items-center">
                    <motion.div
                        className="w-4 h-4 bg-blue-500 rounded-full mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 }}
                    />
                    <span>分析您的兴趣</span>
                </div>
                <div className="flex items-center">
                    <motion.div
                        className="w-4 h-4 bg-blue-500 rounded-full mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.3 }}
                    />
                    <span>分析您的目标</span>
                </div>
                <div className="flex items-center">
                    <motion.div
                        className="w-4 h-4 bg-gray-300 rounded-full mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5 }}
                    />
                    <span>分析您的水平</span>
                </div>
            </motion.div>
        </div>
    );
};

export default LoadingPlan;