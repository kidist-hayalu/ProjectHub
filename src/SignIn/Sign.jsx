import React, { useState } from "react";
import { motion } from "framer-motion";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-cyan-800 to-sky-900">
      <div className="relative w-[800px] h-[450px] bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl flex">

        {/* Sliding Panel */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-cyan-400 text-white flex flex-col justify-center items-center rounded-r-xl shadow-lg"
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="text-2xl font-semibold mb-3">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="text-center w-64 mb-5 text-sm">
            {isSignUp
              ? "Login to continue from where you've stopped."
              : "Create an account to explore more features!"}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="bg-white text-cyan-600 px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </motion.div>

        {/* Forms */}
        <div className="w-full flex">
          {/* Sign In Form */}
          <div className={`w-1/2 flex justify-center items-center ${isSignUp ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <form className="flex flex-col gap-3 bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-md w-4/5">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Login</h3>
              <input type="email" placeholder="Enter your Email" className="p-2 rounded border" />
              <input type="password" placeholder="Enter Password" className="p-2 rounded border" />
              <button className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition">
                Login
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div className={`w-1/2 flex justify-center items-center ${isSignUp ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <form className="flex flex-col gap-3 bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-md w-4/5">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Sign Up</h3>
              <input type="email" placeholder="Enter your Email" className="p-2 rounded border" />
              <input type="password" placeholder="Enter Password" className="p-2 rounded border" />
              <input type="password" placeholder="Confirm Password" className="p-2 rounded border" />
              <button className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
