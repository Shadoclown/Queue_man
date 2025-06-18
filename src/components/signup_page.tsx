import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("First Name:", firstname);
        console.log("Last Name:", lastname);
        console.log("Email:", email);
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                
                {/* Title and Subtitle */}
                <h2 className="mb-1 text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                            required
                            placeholder="First Name"
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            required
                            placeholder="Last Name"
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm Password"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-md transition-colors duration-200"
                    >
                        Sign Up
                    </button>
                    
                    <div className="flex justify-end items-center mt-4">
                        <Link to="/login" className="text-sm text-blue-600 hover:text-blue-800">
                            Already have an account? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;