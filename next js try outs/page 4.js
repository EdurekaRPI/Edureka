// src/app/decision/page.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Decision() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 space-y-8">
            <h1 className="text-3xl font-bold text-center">点击计数器小游戏</h1>
            <div className="flex flex-col items-center">
                <p className="text-xl mb-4">点击按钮来增加计数器！</p>
                <div className="flex gap-4">
                    <button
                        onClick={handleClick}
                        className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                    >
                        点击我
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                    >
                        清零
                    </button>
                </div>
                <p className="mt-4 text-2xl">计数器：{count}</p>
            </div>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-center"
            >
                返回主页
            </Link>
        </div>
    );
}
