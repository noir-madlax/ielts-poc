import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// 假设您已经导入了背景图片
import backgroundImage from './assets/ai_tutor.png';

const ExamProcessPage = () => {
  const [step, setStep] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const contents = [
    {
      title: '《雅思口语考试》',
      content: '欢迎体验SpeakAI的雅思模拟考试，旨在为您提供一个真实的考试氛围，助您评估并提高雅思口语能力。提供的分数根据标准答案及语法、流畅度、发音和词汇评分标准得出，仅供参考，并非真实考分。祝您取得优异成绩！'
    },
    {
      title: 'Part1 日常问题',
      content: '考试流程 3~4分钟\n考官会先进行自我介绍并核对您的身份，随后会提出与常见生活经历相关的问题，比如工作、家乡、兴趣、学习等。大概会有8-12个问题\n\n答题建议\nPart 1较为轻松，回答清晰、直接即可，切勿长篇大论，正常情况下直接回答1句+稍微解释1句就行，再多也不要超过3句，否则会占用后面考试时间，减少发挥机会。'
    },
    {
      title: 'Part2 独立陈述',
      content: '考试流程 4~5分钟\n考官会给你一张题目卡，写有一个话题及需要说的要点，你将在1分钟时间内进行准备，并进行1到2分钟的陈述\n\n答题建议\n-要求清晰、准确。不要求长难句、浮夸短语，备考可以按照话题来开展，主要在于熟悉各类话题的常用但地道的语汇。\n-对于题目中的4个问题（3个基本话题+1个解释问题），每个问题分配30秒左右'
    }
  ];

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  const handleClick = () => {
    if (step < contents.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/exam-question'); // 替换为实际的下一个页面路由
    }
  };

  return (
      <div className="h-screen w-full flex flex-col" onClick={handleClick}>
        <div className="h-1/2 relative overflow-hidden bg-gray-200">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
          >
            <img
                src={backgroundImage}
                alt="Background"
                className="w-full h-full object-cover"
            />
          </motion.div>
          {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
              </div>
          )}
        </div>
        <div className="h-1/2 bg-white flex items-center justify-center p-6">
          <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className={`w-full ${step === 0 ? '' : 'border border-gray-200 rounded-lg'} p-6`}
            >
              <h2 className="text-2xl font-bold mb-4">{contents[step].title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{contents[step].content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  );
};

export default ExamProcessPage;