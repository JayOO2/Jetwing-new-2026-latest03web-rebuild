"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
  name: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const users: User[] = JSON.parse(localStorage.getItem("jetwingUsers") || "[]");

    if (users.find(u => u.email === email)) {
      setError("Email already exists!");
      setLoading(false);
      return;
    }

    users.push({ email, password, name });
    localStorage.setItem("jetwingUsers", JSON.stringify(users));
    localStorage.setItem("jetwingCurrentUser", JSON.stringify({ email, name }));
    router.push("/admin/dashboard");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block">
            <img 
              src="https://jetwingtravels.com/wp-content/uploads/2023/03/main-logo.png" 
              alt="Jetwing Travels" 
              className="h-12 mx-auto"
            />
          </Link>
          <h1 className="text-2xl font-bold text-white mt-4">Create Account</h1>
          <p className="text-gray-400 text-sm">Sign up for admin access</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold hover:bg-yellow-600 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-gold hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-400 text-sm">
            ← Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
