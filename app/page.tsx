import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">InspireGem</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Leverage the power of AI with Google Gemini to create amazing content
          effortlessly. Start now by choosing a plan that fits your needs.
        </p>
        <Link
          href="/plans"
          className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          View Plans
        </Link>
      </div>
    </div>
  );
}
