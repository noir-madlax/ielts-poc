import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

import avatarImage from './assets/head.png';

const DetailedResultsPage = () => {
    const navigate = useNavigate();

    const results = [
        { category: '发音', score: 6.5, sentence: 'They were looking for a goodbook', highlight: ['were', 'for a'] },
        { category: '语法', score: 6.5, sentence: 'I made three sugar cookies anca great fig cake.', highlight: ['three'] },
        { category: '流利', score: 6.5, sentence: 'They were looking for a goodbook', highlight: ['for','a'] },
        { category: '用词', score: 7.5, sentence: 'They were looking for a goodbook', highlight: ['goodbook'] },
    ];

    const ScoreCircle = ({ score, category }) => (
        <motion.div
            className="relative w-16 h-16"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 283" }}
                    animate={{ strokeDasharray: `${score / 9 * 283} 283` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    transform="rotate(-90 50 50)"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                    className="text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {score}
                </motion.span>
                <motion.span
                    className="text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    {category}
                </motion.span>
            </div>
        </motion.div>
    );

    return (
        <motion.div
            className="flex flex-col min-h-screen bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="bg-white p-4 flex items-center">
                <motion.button
                    onClick={() => navigate(-1)}
                    className="text-blue-500 mr-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
                <h1 className="text-xl font-semibold flex-1 text-center">优化建议</h1>
            </header>

            <main className="flex-1 p-4">
                <motion.div
                    className="bg-gray-100 rounded-lg p-4 mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-start mb-2">
                        <motion.img
                            src={avatarImage}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full mr-3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        />
                        <motion.div
                            className="bg-white p-3 rounded-lg shadow max-w-[80%]"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <p className="text-gray-700 text-sm">
                                Lastly, check out your detailed scores. You'll have the chance to practice your hardest words in our next activity.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h2
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Your Detailed Results
                </motion.h2>

                {results.map((result, index) => (
                    <motion.div
                        key={result.category}
                        className="bg-white rounded-lg p-4 mb-4 shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                    >
                        <div className="flex items-center mb-2">
                            <ScoreCircle score={result.score} category={result.category} />
                            <div className="ml-4 flex-1">
                                <p className="text-lg">
                                    {result.sentence.split(' ').map((word, i) => (
                                        <motion.span
                                            key={i}
                                            className={result.highlight.includes(word) ? 'text-red-500 underline' : ''}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.05 * i + 0.5 }}
                                        >
                                            {word}{' '}
                                        </motion.span>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <motion.button
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-1">You</span>
                                <PlayCircle size={16} />
                            </motion.button>
                            <motion.button
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-1">AI</span>
                                <PlayCircle size={16} />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </main>
        </motion.div>
    );
};

export default DetailedResultsPage;