import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Play } from 'lucide-react';

const TopicDetailPage = () => {
    const navigate = useNavigate();
    const { topicId } = useParams();
    const [currentPart, setCurrentPart] = useState(1);

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white">
                <ChevronLeft className="w-6 h-6 text-blue-500 cursor-pointer" onClick={() => navigate(-1)}/>
                <h1 className="text-xl font-semibold">A historical event</h1>
                <span className="text-blue-500"
                      onClick={() => navigate(`/full-test/${topicId}`)}>
                    完整试题</span>
            </div>

            {/* Progress Indicator */}
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    {['Part1', 'Part2', 'Part3'].map((part, index) => (
                        <div key={part} className="flex flex-col items-center">
              <span className={`text-sm ${index + 1 === currentPart ? 'text-blue-500 font-bold' : 'text-gray-400'}`}>
                {part}
              </span>
                            <div className={`w-3 h-3 rounded-full mt-1 ${index + 1 === currentPart ? 'bg-blue-500' : 'bg-gray-300'}`} />
                        </div>
                    ))}
                </div>
                <div className="w-full h-1 bg-gray-200 mt-2">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: '0%' }}
                        animate={{ width: `${(currentPart / 3) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Question */}
            <div className="bg-gray-100 p-4 m-4 rounded-lg">
                <p className="text-lg">When do you normally have free time?</p>
                <div className="flex items-center mt-2 text-blue-500">
                    <span className="mr-2">转文字</span>
                    <span className="mr-2">|</span>
                    <span className="mr-2">AI</span>
                    <Play className="w-4 h-4" />
                </div>
            </div>

            {/* Answer */}
            <div className="bg-blue-500 text-white p-4 m-4 rounded-lg">
                <p>
                    I usually have free time on weekends and evenings after work. On weekends, I can relax, read books,
                    watch movies, or go out for a walk. In the evenings after work, I might have a few hours to do hobbies like
                    painting or listening to music. Sometimes, if I manage my schedule well, I can also find some free time
                    during weekdays for short breaks or to do something I enjoy.
                </p>
                <div className="flex items-center mt-2">
                    <span className="mr-2">转文字</span>
                    <span className="mr-2">|</span>
                    <span className="mr-2">AI</span>
                    <Play className="w-4 h-4" />
                </div>
            </div>

            {/* Audio Control */}
            <div className="mt-auto p-4">
                <button className="w-full bg-blue-100 text-blue-500 p-3 rounded-full flex items-center justify-center">
                    <span className="mr-2">点击说话</span>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
                        <path d="M19 12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 12C5 10.1435 5.73754 8.36301 7.05025 7.05025C8.36297 5.73754 10.1435 5 12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TopicDetailPage;