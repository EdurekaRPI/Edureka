"use client";

import { useState } from "react";

const quotes = [
    "Test Test Test",
    "你好,世界"
];

export default function Quote() {
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    const handleNewQuote = () => {
        setCurrentQuote(getRandomQuote());
    };

    return (
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">随机名言</h2>
            <p className="text-gray-700 mb-4 italic">"{currentQuote}"</p>
            <button
                onClick={handleNewQuote}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
                获取新名言
            </button>
        </div>
    );
}
