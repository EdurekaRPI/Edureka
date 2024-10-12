"use client"; // Ensure the component is rendered on the client side
import { useState } from "react";
import Link from "next/link";
export default function Test() {
    // Game state variables
    const choices = ["Rock", "Paper", "Scissors"];
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState("");
    const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });
    // Function to handle user's choice
    const handleUserChoice = (choice) => {
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
        setUserChoice(choice);
        setComputerChoice(compChoice);
        determineResult(choice, compChoice);
    };
    // Function to determine the game result
    const determineResult = (user, computer) => {
        if (user === computer) {
            setResult("It's a Draw!");
            setScore((prev) => ({ ...prev, draws: prev.draws + 1 }));
        } else if (
            (user === "Rock" && computer === "Scissors") ||
            (user === "Paper" && computer === "Rock") ||
            (user === "Scissors" && computer === "Paper")
        ) {
            setResult("You Win!");
            setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
        } else {
            setResult("You Lose!");
            setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
        }
    };

    // Function to reset the game state
    const resetGame = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 space-y-8">
            <h1 className="text-3xl font-bold text-center">
                我用中文来做测试字体这样大家就不知道我到底写了些什么
            </h1>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-center"
            >
                返回主页
            </Link>

            {/* Rock-Paper-Scissors Game */}
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">石头剪刀布游戏</h2>
                <div className="flex justify-around mb-4">
                    {choices.map((choice) => (
                        <button
                            key={choice}
                            onClick={() => handleUserChoice(choice)}
                            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
                        >
                            {choice}
                        </button>
                    ))}
                </div>

                {result && (
                    <div className="text-center">
                        <p className="text-lg mb-2">你选择了: <span className="font-semibold">{userChoice}</span></p>
                        <p className="text-lg mb-2">电脑选择了: <span className="font-semibold">{computerChoice}</span></p>
                        <p className="text-xl font-bold">{result}</p>
                        <button
                            onClick={resetGame}
                            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                        >
                            再来一次
                        </button>
                    </div>
                )}

                {/* Scoreboard */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-center mb-2">比分</h3>
                    <div className="flex justify-around">
                        <div className="text-center">
                            <p className="text-lg">胜利</p>
                            <p className="text-2xl">{score.wins}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg">失败</p>
                            <p className="text-2xl">{score.losses}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg">平局</p>
                            <p className="text-2xl">{score.draws}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

