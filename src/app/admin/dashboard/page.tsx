"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  name: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("jetwingCurrentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    } else {
      router.push("/auth/login");
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("jetwingCurrentUser");
    router.push("/auth/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome, {user.name}</p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="/" className="text-blue-400 hover:text-blue-300">View Website</a>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Account Info</h2>
          <div className="space-y-2 text-gray-300">
            <p><span className="text-gray-500">Name:</span> {user.name}</p>
            <p><span className="text-gray-500">Email:</span> {user.email}</p>
          </div>
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
      </div>
    </div>
  );
}
