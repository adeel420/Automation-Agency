"use client";

import React from "react";
import {
  ArrowRight,
  Shield,
  Sparkles,
  MessageCircle,
  Check,
} from "lucide-react";

// Mock WhatsApp link for demo
const getWhatsAppLink = () => "https://wa.me/1234567890";

export const Hero = () => {
  const whatsappLink = getWhatsAppLink();

  return (
    <section className="pt-20 sm:pt-24 md:pt-20">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Professional Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#574668] via-[#6b5b7d] to-[#453a52]">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        {/* Animated Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating orb 1 - Responsive sizing */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-white/5 rounded-full blur-3xl animate-float" />

          {/* Large floating orb 2 - Responsive sizing */}
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-white/5 rounded-full blur-3xl animate-float-delayed" />

          {/* Medium floating orb 3 - Responsive sizing */}
          <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-[#6b5b7d]/20 rounded-full blur-3xl animate-float-slow" />

          {/* Small floating orb 4 - Responsive sizing */}
          <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-white/3 rounded-full blur-3xl animate-float-fast" />
        </div>

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>

        {/* Floating Particles - Fewer on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle hidden sm:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 animate-grid"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px, 60px 60px",
            backgroundPosition: "0 0",
          }}
        />

        {/* Animated Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#574668]/20 to-transparent overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
              style={{ transform: "rotate(-5deg)" }}
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          {/* Premium Badge */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] sm:text-xs font-semibold text-white tracking-wider uppercase">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              AI-Powered Automation
            </div>
          </div>

          {/* Main Headline - Fully Responsive */}
          <h1
            className="text-center mb-6 sm:mb-8 md:mb-10 animate-fade-in px-4"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.02em] text-white mb-2 sm:mb-3 leading-[1.1] drop-shadow-lg">
              Automate
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[-0.02em] text-white mb-2 sm:mb-3 leading-[1.1] drop-shadow-lg">
              WhatsApp &amp;
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.02em] text-white leading-[1.1] drop-shadow-lg">
              Website Workflows
            </div>
          </h1>

          {/* Professional Description - Responsive */}
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 leading-relaxed font-light drop-shadow-md px-4">
            Simple automation systems that handle inquiries, capture leads, and
            save time.
            <span className="text-white font-normal">
              {" "}
              No complexity, just results.
            </span>
          </p>

          {/* Primary CTA - Responsive */}
          <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 px-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white hover:bg-gray-100 text-[#574668] rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:gap-3 sm:hover:gap-4 shadow-2xl hover:shadow-white/50 hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Start Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </a>

            {/* Trust Indicator - Responsive */}
            <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-white/90 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full border border-white/20">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="font-medium text-center">
                All projects manually reviewed before confirmation
              </span>
            </div>
          </div>

          {/* Key Benefits - Fully Responsive */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xs sm:text-sm text-white/80 max-w-3xl mx-auto px-4">
            <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">
                No ready-made bots
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">
                Scalable automation
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">
                Post-delivery support
              </span>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
          <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/60 via-white/30 to-transparent" />
          <div
            className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
            style={{ animationDuration: "2s" }}
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
