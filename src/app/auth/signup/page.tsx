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

    if (users.find((u: User) => u.email === email)) {
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
      <div 
        className="bg-white rounded-lg shadow-xl w-full"
        style={{ width: "408px", height: "881px", maxHeight: "90vh", overflow: "auto" }}
      >
        {/* Header with background */}
        <div 
          className="relative h-56 rounded-t-lg overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a3c5c 0%, #2d5a87 100%)" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <Link href="/">
              <img 
                src="https://jetwingtravels.com/wp-content/uploads/2023/03/main-logo.png" 
                alt="Jetwing Travels" 
                className="h-16 w-auto"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white mt-4">Create Account</h1>
            <p className="text-gray-300 text-sm">Sign up for admin access</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a84b] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a84b] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a84b] focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#d4a84b] hover:bg-[#c49a3d] text-white font-bold rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Telegram Support Button */}
          <div className="mt-6">
            <a
              href="https://t.me/JetwingTravels"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Chat on Telegram
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#d4a84b] hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
