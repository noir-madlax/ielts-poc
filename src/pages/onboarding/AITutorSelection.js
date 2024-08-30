import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// 导入本地图片
import sophiaImage from './avatar/sophia.png';
import cherryImage from './avatar/img.png';
import michaelImage from './avatar/img.png';
import emilyImage from './avatar/img.png';
import julieImage from './avatar/img.png';

const AITutorSelection = () => {
    const navigate = useNavigate();
    const [selectedTutor, setSelectedTutor] = useState(null);

    const tutors = [
        {
            name: 'Sophia',
            type: '限时免费',
            icon: '🆓',
            description: '定制学习计划+3年教学经验+雅思听说读写',
            tags: ['高效提分+考试技巧+免费试听', '信心满满+成功加油'],
            image: sophiaImage,
            isFree: true,
        },
        {
            name: 'Cherry',
            type: '白金会员专享',
            icon: '⭐',
            description: '雅思考试+4年教学经验+试听+面向成少',
            tags: ['雅思通过率98%', '超5w人选择'],
            image: cherryImage,
        },
        {
            name: 'Michael',
            type: '白金会员专享',
            icon: '⭐',
            description: 'IELTS Preparation+Speaking+Listening',
            tags: ['Proven track record', 'Join thousands'],
            image: michaelImage,
        },
        {
            name: 'Emily',
            type: '白金会员专享',
            icon: '⭐',
            description: '雅思听力阅读+写作+口语',
            tags: ['备考经验丰富', '值得信赖'],
            image: emilyImage,
        },
        {
            name: 'Julie',
            type: '钻石会员专享',
            icon: '💎',
            description: '雅思口语7+雅思阅读、口语、写作同步学习+日常主题对话',
            tags: ['雅思通过率98%', '超10w人选择'],
            image: julieImage,
        },
    ];

    const handleTutorSelect = (tutor) => {
        setSelectedTutor(tutor);
        if (tutor.isFree) {
            navigate('/onboarding/loading-plan');
        } else {
            navigate('/onboarding/subscription-plan');
        }
    };

    return (
        <motion.div
            className="flex flex-col h-screen bg-white p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-3xl font-bold mb-6 text-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                AI 口语导师
            </motion.h1>
            {tutors.map((tutor, index) => (
                <motion.div
                    key={tutor.name}
                    className="bg-gray-100 rounded-lg p-4 mb-4 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => handleTutorSelect(tutor)}
                >
                    <div className="flex items-center">
                        <img src={tutor.image} alt={tutor.name} className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h2 className="text-lg font-semibold">
                                <span className="mr-2">{tutor.icon}</span>
                                {tutor.type} {tutor.name}
                            </h2>
                            <p className="text-sm text-green-600">{tutor.description}</p>
                            <div className="flex mt-2">
                                {tutor.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default AITutorSelection;