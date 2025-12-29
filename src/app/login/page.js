"use client";
import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) return alert("Please agree to the terms");
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match");

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#574668] via-[#6b5b7d] to-[#453a52]">
      {/* 🔮 BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* 📦 FORM CARD */}
      <section className="relative z-10 w-full max-w-lg px-4">
        <div className="bg-white/95 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">
                Account Created Successfully!
              </h3>
              <p className="text-gray-600 mt-2">Redirecting to homepage...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Log In</h2>
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-[#574668] font-semibold">
                    Sign up
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <Input
                  icon={<Mail />}
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {/* Password */}
                <PasswordInput
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  show={showPassword}
                  toggle={() => setShowPassword(!showPassword)}
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#574668] to-[#6b5b7d] hover:from-[#453a52] hover:to-[#574668] text-white py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Create Account <ArrowRight />
                </button>

                <div className="flex items-center justify-center ">
                  <a
                    href="/forget-password"
                    className="text-[#574668] text-sm text-center w-[100%] font-semibold"
                  >
                    Forget Your Password?
                  </a>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

/* 🔹 Reusable Components */
const Input = ({ icon, label, ...props }) => (
  <div>
    <label className="text-sm font-semibold text-gray-900 mb-2 block">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#574668] focus:outline-none"
        required
      />
    </div>
  </div>
);

const PasswordInput = ({ label, show, toggle, ...props }) => (
  <div>
    <label className="text-sm font-semibold text-gray-900 mb-2 block">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Lock />
      </span>
      <input
        {...props}
        type={show ? "text" : "password"}
        className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#574668] focus:outline-none"
        required
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      >
        {show ? <EyeOff /> : <Eye />}
      </button>
    </div>
  </div>
);

export default Page;
