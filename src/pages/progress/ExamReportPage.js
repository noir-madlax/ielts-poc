import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ExamReportPage = () => {
    const navigate = useNavigate();

    const scores = {
        total: 7.0,
        vocabulary: 6.5,
        fluency: 7.0,
        grammar: 7.0,
        pronunciation: 6.5
    };

    const renderRadarChart = () => {
        const size = 300;
        const center = size / 2;
        const maxRadius = size * 0.4;
        const scoreToRadius = (score) => (score / 9) * maxRadius; // Assuming max score is 9

        const points = [
            { label: '词汇', angle: -Math.PI / 2, score: scores.vocabulary },
            { label: '流利性和连贯性', angle: 0, score: scores.fluency },
            { label: '语法多样性', angle: Math.PI / 2, score: scores.grammar },
            { label: '发音', angle: Math.PI, score: scores.pronunciation },
        ];

        const pathData = points.map((point, index) => {
            const radius = scoreToRadius(point.score);
            const x = center + radius * Math.cos(point.angle);
            const y = center + radius * Math.sin(point.angle);
            return (index === 0 ? 'M' : 'L') + `${x},${y}`;
        }).join(' ') + 'Z';

        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
                {/* Background lines */}
                {points.map((point, index) => (
                    <line
                        key={index}
                        x1={center}
                        y1={center}
                        x2={center + maxRadius * Math.cos(point.angle)}
                        y2={center + maxRadius * Math.sin(point.angle)}
                        stroke="#E5E7EB"
                        strokeDasharray="4 4"
                    />
                ))}
                {/* Background circles */}
                {[0.25, 0.5, 0.75, 1].map((fraction, index) => (
                    <circle
                        key={index}
                        cx={center}
                        cy={center}
                        r={maxRadius * fraction}
                        fill="none"
                        stroke="#E5E7EB"
                        strokeDasharray="4 4"
                    />
                ))}
                {/* Data polygon */}
                <path d={pathData} fill="#3B82F6" fillOpacity="0.5" stroke="#3B82F6" strokeWidth="2" />
                {/* Labels and Scores */}
                {points.map((point, index) => {
                    const labelRadius = maxRadius + 30;
                    const scoreRadius = scoreToRadius(point.score);
                    const labelX = center + labelRadius * Math.cos(point.angle);
                    const labelY = center + labelRadius * Math.sin(point.angle);
                    const scoreX = center + (scoreRadius + 15) * Math.cos(point.angle);
                    const scoreY = center + (scoreRadius + 15) * Math.sin(point.angle);
                    return (
                        <g key={index}>
                            <text
                                x={labelX}
                                y={labelY}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="14"
                                fill="#4B5563"
                            >
                                {point.label}
                            </text>
                            <text
                                x={scoreX}
                                y={scoreY}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="16"
                                fill="#3B82F6"
                                fontWeight="bold"
                            >
                                {point.score}
                            </text>
                        </g>
                    );
                })}
            </svg>
        );
    };

    return (
        <motion.div
            className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="bg-white p-4 flex items-center">
                <button onClick={() => navigate(-1)} className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold text-center flex-1">考试报告</h1>
            </header>

            <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-2">LOGO-IELTS</h2>
                <p className="text-lg mb-1">给你最专业的雅思口语报告</p>
                <p className="mb-4">考生 <span className="text-blue-500">PiPi</span></p>

                <div className="bg-white rounded-lg p-6 mb-6 shadow">
                    <p className="text-center mb-4">总分</p>
                    <p className="text-5xl text-center text-blue-500 font-bold mb-8">{scores.total}</p>
                    {renderRadarChart()}
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                    <h3 className="font-semibold mb-4">批改与建议 (24)</h3>
                    <div className="flex mb-4 overflow-x-auto">
                        <button className="text-blue-500 font-semibold mr-4 whitespace-nowrap">Part1</button>
                        <button className="text-gray-400 mr-4 whitespace-nowrap">Part2</button>
                        <button className="text-gray-400 mr-4 whitespace-nowrap">Part3</button>
                        <button className="text-gray-400 mr-4 whitespace-nowrap">语法</button>
                        <button className="text-gray-400 whitespace-nowrap">词汇</button>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <p className="font-semibold mb-2">1. Do you like eating chocolate? Why or why not?</p>
                        <p className="text-green-500 mb-2">80分</p>
                        <p className="font-semibold mb-2">你的回答</p>
                        <p className="mb-4">I like eating chocolate because I can feel happy after eating it. Chocolates c...</p>
                        <p className="font-semibold mb-2">提分技巧</p>
                        <p className="text-gray-600">Your answer is quite redundant. Try to make your answer more concise and focused. Also, try to provide specific details to support your answer.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ExamReportPage;