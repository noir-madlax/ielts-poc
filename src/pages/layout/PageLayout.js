import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PageLayout = ({ children, activeTab }) => {
    const navigate = useNavigate();

    const NavButton = ({ to, icon, label, isActive }) => (
        <motion.button
            className={`flex flex-col items-center ${isActive ? 'text-blue-500' : 'text-gray-400'}`}
            onClick={() => navigate(to)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.span
                className="text-2xl"
                animate={isActive ? { y: [0, -5, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                {icon}
            </motion.span>
            <span className="text-xs">{label}</span>
            {isActive && (
                <motion.div
                    className="w-1 h-1 bg-blue-500 rounded-full mt-1"
                    layoutId="activeIndicator"
                />
            )}
        </motion.button>
    );

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
            <motion.nav
                className="bg-white border-t flex justify-around items-center py-2 sticky bottom-0"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <NavButton to="/main" icon="🎯" label="目标" isActive={activeTab === 'main'} />
                <NavButton to="/topics" icon="📝" label="真题模考" isActive={activeTab === 'topics'} />
                <NavButton to="/progress" icon="📈" label="备考进度" isActive={activeTab === 'progress'} />
                <motion.button
                    className="flex flex-col items-center text-gray-300 cursor-not-allowed"
                    disabled
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <span className="text-2xl">👤</span>
                    <span className="text-xs">我的</span>
                </motion.button>
            </motion.nav>
        </div>
    );
};

export default PageLayout;