"use client";

import { useState, useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const tick = () => {
            setTime(new Date());
        };
        const timerID = setInterval(tick, 1000);
        return () => clearInterval(timerID);
    }, []);
    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">当前时间</h2>
            <p className="text-3xl font-mono text-gray-700">{formattedTime}</p>
        </div>
    );
}
