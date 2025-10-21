import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add login logic here
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md">
        <div className="mb-6">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-sm">
            Please sign up for a wholesale account to view site. Shops and resellers only. Email us at <a href="mailto:info@betweenimports.com" className="underline">info@betweenimports.com</a> for more information.
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
  <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <a href="mailto:info@betweenimports.com" className="text-sm text-gray-600 hover:text-black">Forgot your password?</a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Sign In
          </button>
        </form>
        <div className="flex flex-col items-start mt-6 space-y-2">
          <a href="/login" className="text-sm text-gray-700 hover:text-black underline">Create account</a>
          <a href="/" className="text-sm text-gray-700 hover:text-black underline">Return to Store</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
