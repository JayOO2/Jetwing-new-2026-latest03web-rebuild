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
