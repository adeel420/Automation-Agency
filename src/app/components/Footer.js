import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Shield,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { assets } from "../assets/assets";

export const Footer = () => {
  const whatsappLink =
    "https://wa.me/03218365564?text=Hi, I visited your website and I'm interested in WhatsApp or Website automation for my business. Please guide me further.";

  const WHATSAPP_NUMBER = "92 321 8365564";

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-[#574668] to-gray-900 text-white border-t border-[#574668]/30">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <Image
                src={assets.logo.src}
                alt="AI Automation Logo"
                width={400}
                height={250}
                className="-ml-20 transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-white/80 text-sm max-w-md leading-relaxed mb-8">
              Smart automation solutions for growing businesses. We build
              simple, reliable systems that handle inquiries, capture leads, and
              save your team time.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white hover:bg-gray-100 text-[#574668] rounded-full text-sm font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Started</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/demos", label: "Demos" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-[#25D366]/20 rounded-xl flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors border border-[#25D366]/30">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <div className="text-xs text-white/60">
                      +{WHATSAPP_NUMBER}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@aiautomation.com"
                  className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-xs text-white/60">
                      contact@aiautomation.com
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span>
                &copy; {new Date().getFullYear()} AI Automation Agency.
              </span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span className="font-medium">
                  All projects manually reviewed
                </span>
              </div>
              <div className="text-white/60 text-center">
                Only technically feasible requests accepted
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
