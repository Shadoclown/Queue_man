import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Email:', email);
		console.log('Password:', password);
		
		// Add API call for authentication here
		
		// Then redirect to dashboard
		navigate('/dashboard');
	};
	
	return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        
        {/* Title and Subtitle */}
        <h2 className="mb-1 text-2xl font-bold text-center text-gray-800">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-md transition-colors duration-200"
          >
            Login
          </button>
          
          <div className="flex justify-between items-center mt-4">
            <Link to="/signup" className="text-sm text-blue-600 hover:text-blue-800">
              Need an account? Sign up
            </Link>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
