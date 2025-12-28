import React from "react";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export const CallToAction = () => {
  const whatsappLink =
    "https://wa.me/1234567890?text=Hi, I visited your website and I'm interested in WhatsApp or Website automation for my business. Please guide me further.";

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#574668] via-[#453a52] to-[#574668] text-white text-center py-16 sm:py-20 md:py-24 lg:py-28 mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements - Responsive sizing */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-white/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#6b5b7d]/20 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Grid pattern overlay - Responsive sizing */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Get Started Today</span>
        </div>

        {/* Main Headline - Fully Responsive */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg px-4">
          Ready to Automate Your
          <br className="hidden sm:block" />
          <span className="sm:inline"> </span>
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Business Conversations?
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
          Let's discuss your requirements and see what automation fits your
          business.
        </p>

        {/* CTA Button Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 pt-2 sm:pt-3 md:pt-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group w-full sm:w-auto max-w-md sm:max-w-none"
          >
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg bg-white hover:bg-gray-100 text-[#574668] rounded-full font-semibold shadow-2xl shadow-white/30 hover:shadow-white/40 transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-white/20">
              <MessageCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </a>

          {/* Trust Message */}
          <p className="text-xs sm:text-sm text-white/70 font-medium px-4">
            All projects are manually reviewed before confirmation
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
