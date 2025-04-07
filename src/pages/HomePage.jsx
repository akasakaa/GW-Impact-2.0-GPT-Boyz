import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-teal-100 text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-600 mb-6">
            Welcome to MindEase
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Your personal AI-powered mental wellness support companion. Track emotions, chat with AI, and improve your well-being.
          </p>
          <Link
            to="/login"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-14">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Track Your Mood",
                desc: "Monitor your emotional well-being and visualize trends over time.",
                icon: "📅",
              },
              {
                title: "Talk with AI",
                desc: "Chat with our empathetic AI to share thoughts and reduce stress.",
                icon: "🤖",
              },
              {
                title: "Get Insights",
                desc: "Powerful analytics to help understand your mind better.",
                icon: "📈",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-tr from-white to-teal-50 p-6 rounded-2xl shadow-md text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-teal-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Us Section */}
      <section className="py-20 bg-teal-600 text-white px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why MindEase?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            In a fast-paced world, MindEase is your safe space to reflect, talk, and grow with the help of AI. Designed for mental wellness, privacy, and peace.
          </p>
          <div className="flex justify-center items-center gap-6 flex-wrap mt-6">
            <span className="bg-white text-teal-600 font-semibold py-2 px-4 rounded-full shadow-md">🌿 Friendly UI</span>
            <span className="bg-white text-teal-600 font-semibold py-2 px-4 rounded-full shadow-md">🔒 100% Private</span>
            <span className="bg-white text-teal-600 font-semibold py-2 px-4 rounded-full shadow-md">📱 Mobile Ready</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            Ready to take care of your mind?
          </h2>
          <p className="mb-6 text-gray-600">Join MindEase today and begin your journey to self-awareness.</p>
          <Link
            to="/register"
            className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition"
          >
            Sign Up Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
