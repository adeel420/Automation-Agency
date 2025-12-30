"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, MessageCircle, LogOut } from "lucide-react";
import { Popover } from "antd";
import { MdDashboard, MdLogout } from "react-icons/md";
import Image from "next/image";
import { assets } from "../assets/assets";
import { useAuth } from "../context/AuthContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuth();

  const whatsappLink = "https://wa.me/1234567890";

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/demos", label: "Demos" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    router.push("/login");
  };

  const content = (
    <div className="w-[150px]">
      {user?.role === 1 && (
        <button
          onClick={() => router.push("/admin_dashboard")}
          className="hover:bg-[#ccc] text-[black] w-full text-left p-2 flex gap-2 items-center text-[18px] font-semibold rounded cursor-pointer"
        >
          <MdDashboard /> Dashboard
        </button>
      )}
      <button
        onClick={handleLogout}
        className="hover:bg-[#ccc] w-full text-left p-2 flex gap-2 items-center text-[18px] font-semibold rounded cursor-pointer"
      >
        <MdLogout /> Logout
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-[#574668]/10"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={assets.logo.src}
                alt="AI Automation Logo"
                width={400}
                height={250}
                className="-ml-20 transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  pathname === item.href
                    ? "text-[#574668]"
                    : "text-gray-700 hover:text-[#574668]"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#574668] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <Popover content={content} trigger="click">
                <div className="w-10 h-10 bg-[#4d3e5b] rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
                  {user?.name
                    ? user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                    : ""}
                </div>
              </Popover>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    pathname === "/login"
                      ? "text-[#574668]"
                      : "text-gray-700 hover:text-[#574668]"
                  }`}
                >
                  Login
                  {pathname === "/login" && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#574668] rounded-full" />
                  )}
                </Link>
                <Link
                  href="/signup"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#4d3e5b] hover:bg-[#342a3e] cursor-pointer text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-[#4d3e5b]/20 hover:shadow-xl hover:shadow-[#4d3e5b]/30 hover:scale-105"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#11c044] hover:bg-[#11c044] text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-[#574668]/20 hover:shadow-xl hover:shadow-[#11c044]/30 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#574668] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-6 pt-2 bg-white border-t border-gray-100">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-[#574668]/10 text-[#574668]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#574668]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Auth */}
            {isAuthenticated ? (
              <div className="mx-4 mt-2">
                <Popover content={content} trigger="click">
                  <div className="w-10 h-10 bg-[#4d3e5b] rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
                    {user?.name
                      ? user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                      : ""}
                  </div>
                </Popover>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="mx-4 mt-2 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#4d3e5b] hover:bg-[#342a3e] text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="mx-4 mt-1 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Signup
                </Link>
              </>
            )}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#11c044] hover:bg-[#11c044] text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};