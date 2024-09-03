import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// 假设您有一个占位图片
import placeholderImage from './avatar/ai_tutor.png';

const LanguageSelectionPage = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languages = [
        { name: 'Chinese', flag: '🇨🇳', count: '132k' },
        { name: 'Japanese', flag: '🇯🇵', count: '276k' },
        { name: 'Spanish', flag: '🇪🇸', count: '145k' },
    ];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const handleContinue = () => {
        if (selectedLanguage) {
            // 导航到下一个页面，这里假设是 '/next-page'
            navigate('/onboarding/subscription-plan');
        }
    };

    return (
        <motion.div
            className="flex flex-col h-screen bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <header className="text-center py-4">
                <h1 className="text-2xl font-bold">Michael老师</h1>
            </header>

            <motion.div
                className="bg-white rounded-lg mx-4 mb-6 overflow-hidden shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <img src={placeholderImage} alt="Michael" className="w-full h-64 object-cover" />
            </motion.div>

            <motion.div
                className="flex-1 px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <h2 className="text-xl font-semibold mb-4">What's your native language?</h2>
                {languages.map((lang, index) => (
                    <motion.button
                        key={lang.name}
                        className={`w-full bg-white rounded-lg p-4 mb-3 flex items-center justify-between ${
                            selectedLanguage === lang.name ? 'border-2 border-blue-500' : ''
                        }`}
                        onClick={() => handleLanguageSelect(lang.name)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                    >
                        <div className="flex items-center">
                            <span className="text-2xl mr-3">{lang.flag}</span>
                            <span>{lang.name}</span>
                        </div>
                        <span className="text-gray-500">{lang.count}</span>
                    </motion.button>
                ))}
            </motion.div>

            <motion.div
                className="p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <button
                    className={`w-full py-3 rounded-lg text-white font-semibold ${
                        selectedLanguage ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                    onClick={handleContinue}
                    disabled={!selectedLanguage}
                >
                    Continue
                </button>
            </motion.div>
        </motion.div>
    );
};

export default LanguageSelectionPage;