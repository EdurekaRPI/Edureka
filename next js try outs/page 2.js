// src/app/test/page.js
import Link from "next/link";

export default function Test() {
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
        </div>
    );
}
