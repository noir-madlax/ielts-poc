import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const FullTestPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white border-b">
                <ChevronLeft className="w-6 h-6 text-blue-500 cursor-pointer" onClick={() => navigate(-1)} />
                <h1 className="text-xl font-semibold">完整试题</h1>
                <div className="w-6"></div> {/* Placeholder for alignment */}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">A historical event</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Part 1: Introduction and Interview</h3>
                    <ol className="list-decimal list-outside pl-6 space-y-3 text-gray-700">
                        <li>When do you normally have free time?</li>
                        <li>What do you usually do in your leisure time?</li>
                        <li>Do you think it's important to spend your leisure time with your family? Why, or why not?</li>
                        <li>In your leisure time, what do you usually do with your family?</li>
                        <li>How could you find more leisure time?</li>
                        <li>Do you often use the internet?</li>
                        <li>When did you first use the Internet?</li>
                        <li>Have you ever bought something using the internet?</li>
                        <li>Do you think our lives have been improved by the Internet? Why, or why not?</li>
                        <li>Do you use the internet for fun or education?</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Part 2: Individual Long Turn</h3>
                    <div className="bg-gray-100 p-5 rounded-lg mb-4 text-gray-700">
                        <p className="mb-3 font-medium">Describe a historical event.</p>
                        <p className="mb-2">You should say:</p>
                        <ul className="list-disc list-inside mb-3 pl-4 space-y-1">
                            <li>what the event was</li>
                            <li>when and where it took place</li>
                            <li>why this event was important</li>
                        </ul>
                        <p>and explain why you still remember it.</p>
                    </div>
                    <ol className="list-decimal list-outside pl-6 space-y-3 text-gray-700">
                        <li>What is your opinion of this event?</li>
                        <li>Are you interested in history?</li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Part 3: Discussion</h3>
                    <ol className="list-decimal list-outside pl-6 space-y-3 text-gray-700">
                        <li>How much do you know about the history of your country?</li>
                        <li>How important is it for people to know the history of their own countries?</li>
                        <li>Do you think people generally have an objective view of history? Why, or why not?</li>
                        <li>What is the purpose of studying history?</li>
                        <li>How is history taught in school these days?</li>
                        <li>How can a teacher make history more interesting?</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default FullTestPage;