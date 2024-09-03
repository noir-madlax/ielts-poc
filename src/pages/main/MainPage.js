import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

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
                    目标
                </motion.h1>
            </header>

            <main className="flex-1 overflow-y-auto px-4 pb-16">
                {/* Goal Card */}
                <motion.div
                    className="bg-blue-500 text-white rounded-lg p-4 mb-6 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-lg font-semibold">3个月目标雅思口7分</h2>
                        <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">第1天</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                        <div className="flex-1 h-1 bg-blue-400 rounded-full"></div>
                        <span className="ml-2">Band 7</span>
                    </div>
                    <p className="text-sm mb-4">专业提升雅思口语交流能力</p>
                    <button className="w-full bg-white text-blue-500 py-2 rounded-lg font-semibold">
                        先来一次模底测试吧！
                    </button>
                </motion.div>

                {/* Hot Topics */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold mb-3">
                        <motion.span
                            className="mr-2"
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            🔥
                        </motion.span>
                        8月热门预测题
                    </h3>
                    <div className="flex space-x-4">
                        <motion.div
                            className="bg-white rounded-lg p-3 flex-1 flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="text-xl mr-2"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                🏅
                            </motion.span>
                            <div>
                                <p className="font-semibold">Olympics</p>
                                <p className="text-sm text-gray-500">奥运会</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-white rounded-lg p-3 flex-1 flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="text-xl mr-2"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🏆
                            </motion.span>
                            <div>
                                <p className="font-semibold">Challenging</p>
                                <p className="text-sm text-gray-500">有挑战性的事</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Goal Sprint */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-lg font-semibold mb-3">
                        <motion.span
                            className="mr-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            🎯
                        </motion.span>
                        目标冲刺7+
                    </h3>
                    <div className="space-y-4">
                        {['雅思口语真题练习', '雅思口语真题模拟考试', '雅思口语真题场景练习'].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg p-4 flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <img src={`https://via.placeholder.com/50`} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold">{item}</p>
                                    <p className="text-sm text-gray-500">
                                        {index === 0 ? '最新考场话题&考试范围预测' :
                                            index === 1 ? '真实模拟考试流程，雅思官方标准评分' :
                                                '真实场景对话练习，提升应对能力'}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>

            {/* Bottom Navigation */}
            <motion.nav
                className="bg-white border-t flex justify-around items-center py-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <button
                    className="flex flex-col items-center text-blue-500"
                    onClick={() => navigate('/main')}
                >
                    <motion.span
                        className="text-2xl"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        🎯
                    </motion.span>
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

export default MainPage;