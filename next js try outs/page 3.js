// src/app/about/page.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function About() {
    const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    const handleGuess = () => {
        const numericGuess = parseInt(guess, 10);
        if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 100) {
            setMessage("请输入一个1到100之间的数字。");
            return;
        }

        setAttempts(attempts + 1);

        if (numericGuess === randomNumber) {
            setMessage(`恭喜你！正确答案是 ${randomNumber}。你尝试了 ${attempts + 1} 次。`);
        } else if (numericGuess < randomNumber) {
            setMessage("更高一点！");
        } else {
            setMessage("更低一点！");
        }
    };

    const handleReset = () => {
        setRandomNumber(generateRandomNumber());
        setGuess("");
        setMessage("");
        setAttempts(0);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center p-8 relative overflow-hidden">

            {/* 装饰性圆点 */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"></div>

            {/* 标题 */}
            <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">
                关于页面
            </h1>

            {/* 游戏区域 */}
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">猜数字小游戏</h2>
                <p className="text-gray-700 mb-4">猜测一个1到100之间的数字，系统会告诉你是否需要猜得更高或更低。</p>

                <div className="flex flex-col items-center">
                    <input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="输入你的猜测"
                    />
                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={handleGuess}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            猜测
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        >
                            重置
                        </button>
                    </div>
                    {message && <p className="text-gray-800">{message}</p>}
                </div>
            </div>

            {/* 返回主页按钮 */}
            <Link href="/" className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                返回主页
            </Link>

            {/* 页脚装饰 */}
            <div className="absolute bottom-4 text-white text-sm">
                © 2024 Edureka. All rights reserved.
            </div>
        </div>
    );
}
