"use client";

import { useState } from "react";
import Link from "next/link";

const ADMIN_PASSWORD = "admin123";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Admin Panel</h1>
          <p className="text-gray-400 text-center mb-6">Jetwing Travels</p>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Login
          </button>
          <p className="text-gray-400 text-sm mt-4 text-center">Default password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <a href="/" className="text-blue-400 hover:text-blue-300">View Website</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/admin/tours"
            className="block p-6 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-bold text-white">Manage Tours</h3>
            <p className="text-green-200 text-sm">Add, edit or remove tour packages</p>
          </Link>
          
          <Link
            href="/admin/destinations"
            className="block p-6 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-bold text-white">Manage Destinations</h3>
            <p className="text-purple-200 text-sm">Add, edit or remove destinations</p>
          </Link>
          
          <Link
            href="/admin/hotels"
            className="block p-6 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-bold text-white">Manage Hotels</h3>
            <p className="text-yellow-200 text-sm">Add, edit or remove hotels</p>
          </Link>
          
          <Link
            href="/admin/offers"
            className="block p-6 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-bold text-white">Manage Offers</h3>
            <p className="text-red-200 text-sm">Add, edit or remove special offers</p>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-400 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
