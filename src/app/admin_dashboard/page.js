"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
// import { isAuthenticated, getUserData, logout } from "../utils/auth";
import Link from "next/link";
import Contact_subsection from "../components/admin_subsections/Contact_subsection";
import Image from "next/image";
import { assets } from "../assets/assets";
import Tab1 from "../components/admin_subsections/Tab1";
import Tab3 from "../components/admin_subsections/Tab3";
import Tab2 from "../components/admin_subsections/Tab2";
import Tab4 from "../components/admin_subsections/Tab4";

export default function Page() {
  const [activeTab, setActiveTab] = useState("services");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  const menuItems = [
    { id: "services", label: "Services", icon: "🧰" },
    { id: "update services", label: "Update Services", icon: "⟳" },
    { id: "demo", label: "Live Demo", icon: "▶️" },
    { id: "update live demo", label: "Update Demo", icon: "⟳" },
    { id: "contact", label: "Contact", icon: "📩" },
    { id: "logout", label: "Logout", icon: null },
  ];

  const handleLogout = () => {
    router.push("/");
  };

  const checkAuthAndRole = async () => {
    if (!isAuthenticated()) {
      toast.error("Please login to access dashboard");
      router.push("/login");
      return;
    }

    const userData = await getUserData();
    if (!userData) {
      toast.error("Session expired. Please login again");
      router.push("/login");
      return;
    }

    if (userData.role !== 1) {
      toast.error("Access denied. Admin privileges required");
      router.push("/user-dashboard");
      return;
    }

    setUser(userData);
  };

  useEffect(() => {
    checkAuthAndRole();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 overflow-hidden bg-gradient-to-br from-[#574668] via-[#6b5b7d] to-[#453a52] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center bg-black/50 justify-center h-16 px-4 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <Image src={assets.logo} alt="" />
          </div>
        </div>

        <nav className="mt-8 px-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "logout") {
                  handleLogout();
                } else {
                  setActiveTab(item.id);
                }
                if (window.innerWidth < 1024) setSidebarOpen(false); // auto-close on mobile
              }}
              className={`w-full flex items-center px-4 cursor-pointer py-3 mb-2 rounded-xl transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-[#4d3e5b] text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.id === "logout" ? (
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              ) : (
                <span className="mr-3 text-lg">{item.icon}</span>
              )}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h1 className="ml-4 lg:ml-0 text-lg md:text-2xl font-bold text-slate-900 capitalize">
                {activeTab}
              </h1>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6">
          {activeTab === "services" && <Tab1 />}

          {activeTab === "update services" && <Tab2 />}
          {activeTab === "demo" && <Tab3 />}
          {activeTab === "update live demo" && <Tab4 />}

          {activeTab === "contact" && (
            <div className="overflow-x-auto">
              <Contact_subsection />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
