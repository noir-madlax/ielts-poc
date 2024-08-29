import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TopicCard = ({ title, subtitle, icon, progress, total, index }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/topic/${index + 1}`)}
        >
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600">{subtitle}</p>
                </div>
                <motion.span
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                    {icon}
                </motion.span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(progress / total) * 100}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                ></motion.div>
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">{progress}/{total}</p>
        </motion.div>
    );
};

const EnglishLearningTopics = () => {
    const navigate = useNavigate();

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

    return (
        <motion.div
            className="flex flex-col h-screen bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-4 bg-gray-100">
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
                    <motion.span
                        className="font-bold cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                    >
                        全部
                    </motion.span>
                    <motion.span
                        className="cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                    >
                        5-8月真题
                    </motion.span>
                    <motion.span
                        className="cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                    >
                        1-4月真题
                    </motion.span>
                    <motion.span
                        className="cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                    >
                        9-12月真题
                    </motion.span>
                </div>
            </div>

            <motion.div
                className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {topics.map((topic, index) => (
                    <TopicCard key={index} {...topic} index={index} />
                ))}
            </motion.div>

            <motion.div
                className="flex justify-around items-center p-4 bg-white border-t"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {[
                    { icon: "🎯", label: "目标" },
                    { icon: "✏️", label: "真题模考" },
                    { icon: "📅", label: "历史测试" },
                    { icon: "👤", label: "我的" }
                ].map((item, index) => (
                    <motion.button
                        key={index}
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-xs">{item.label}</span>
                    </motion.button>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default EnglishLearningTopics;