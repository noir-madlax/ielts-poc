/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',   // 小屏手机 (比如 iPhone SE, Android 小尺寸设备)
        'sm': '640px',   // 中等手机 (比如 iPhone 12, 大部分 Android 手机)
        'md': '768px',   // 大屏手机/小型平板 (iPad Mini)
        'lg': '1024px',  // 平板设备 (iPad, Android 平板)
        'xl': '1280px',  // 大尺寸平板和小型笔记本
        '2xl': '1536px', // 大屏笔记本和桌面显示器
      }
    }
  },
  plugins: [],
}