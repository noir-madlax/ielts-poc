import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SubscriptionPlan = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState('Premium');

    const handleSubscribe = () => {
        // 这里可以添加订阅逻辑
        navigate('/loading-plan');
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
                className="text-2xl font-bold mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                选择7天免费试用后的套餐
            </motion.h1>
            <motion.div
                className={`border rounded-lg p-4 mb-4 ${selectedPlan === 'Premium' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlan('Premium')}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Premium</h2>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">最受欢迎</span>
                </div>
                <ul className="mt-2 space-y-1">
                    <li>• 尽享 Speak Premium所有功能</li>
                    <li>• 智能 AI: 适合所有常规会话练习、并提供必要的语言支持</li>
                </ul>
                <p className="mt-2"><span className="line-through">每年 US$249.98</span> <span className="font-bold">US$99.99</span></p>
                <p className="text-sm text-gray-500">每月 US$8.33</p>
            </motion.div>
            <motion.div
                className={`border rounded-lg p-4 mb-4 ${selectedPlan === 'PremiumPlus' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlan('PremiumPlus')}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Premium Plus</h2>
                    <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm">惊喜大促!Speak Tutor上线优惠</span>
                </div>
                <ul className="mt-2 space-y-1">
                    <li>• 尽享 Speak Premium所有功能</li>
                    <li>• 超智能AI: 无限制使用最高级 AI功能、包括即时反馈、生成任意主题的个性化课程、智能复习等等</li>
                </ul>
                <p className="mt-2"><span className="line-through">每年 US$587.48</span> <span className="font-bold">US$234.99</span></p>
                <p className="text-sm text-gray-500">每月 US$19.58</p>
                <p className="text-sm text-pink-500">特别促销，限时优惠</p>
            </motion.div>
            <div className="mt-auto">
                <p className="text-sm text-gray-500 mb-2 text-center">服务条款 | 隐私政策</p>
                <p className="text-sm text-gray-500 mb-4 text-center">
                    免费试用7天，之后每年 US${selectedPlan === 'Premium' ? '99.99' : '234.99'}/年，您可以随时取消。
                </p>
                <motion.button
                    className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubscribe}
                >
                    🔥 免费试用 7，接着每年 US${selectedPlan === 'Premium' ? '99.99' : '234.99'}
                </motion.button>
                <p className="text-sm text-blue-500 mt-2 text-center">查看所有套餐</p>
            </div>
        </motion.div>
    );
};

export default SubscriptionPlan;