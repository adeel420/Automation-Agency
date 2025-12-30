"use client";
import { ExternalLink, Play, Sparkles, X } from "lucide-react";
import { useState } from "react";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

const DemoCard = ({ title, description, onPlay, gradient }) => (
  <div
    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
    onClick={onPlay}
  >
    {/* Gradient Background */}
    <div
      className={`absolute inset-0 ${gradient} group-hover:scale-110 transition-transform duration-700`}
    />

    {/* Overlay pattern */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "15px 15px, 20px 20px",
      }}
    />

    <div className="z-10 text-center p-4 sm:p-6 md:p-8 relative">
      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-125 group-hover:bg-white/30 transition-all duration-300 shadow-2xl border-2 border-white/30">
        <Play
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1"
          fill="currentColor"
        />
      </div>
      <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 group-hover:scale-105 transition-transform">
        {title}
      </h3>
      <p className="text-gray-200 text-sm sm:text-base font-medium">
        {description}
      </p>
      <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>View Demo</span>
        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
    </div>
  </div>
);

export default function page() {
  const [activeDemo, setActiveDemo] = useState(null);

  const demos = [
    {
      id: 1,
      title: "WhatsApp Lead Capture",
      description: "See how we capture leads automatically.",
      gradient: "bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54]",
    },
    {
      id: 2,
      title: "Customer Support Bot",
      description: "Instant answers 24/7.",
      gradient: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900",
    },
    {
      id: 3,
      title: "Appointment Booking",
      description: "Schedule meetings without back-and-forth.",
      gradient:
        "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#574668] via-[#6b5b7d] to-[#453a52] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] sm:text-xs font-semibold text-white tracking-wider uppercase mb-6 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Live Demos
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-lg leading-tight">
            Live Automation Demos
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
            See how our automation systems work in real scenarios.
          </p>
        </div>
      </section>
      <div className="pt-20 pb-16 mx-6 md:pt-20 md:pb-24">
        {/* Demos Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {demos.map((demo) => (
            <DemoCard
              key={demo.id}
              {...demo}
              onPlay={() => setActiveDemo(demo.id)}
            />
          ))}
        </div>

        {/* Button */}
        <div className="w-full flex items-center mb-16 mt-16 justify-center ">
          <button className="group inline-flex items-center gap-2 px-12 py-4 bg-[#4d3e5b] hover:bg-[#342a3e] cursor-pointer text-white rounded-full text-md font-medium transition-all duration-300 shadow-lg shadow-[#4d3e5b]/20 hover:shadow-xl hover:shadow-[#4d3e5b]/30 hover:scale-105">
            More Services
          </button>
        </div>

        {/* Video Modal - Fully Responsive */}
        {activeDemo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 md:p-6"
            onClick={() => setActiveDemo(null)}
          >
            <div
              className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-5xl overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDemo(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#574668] hover:bg-[#453a52] rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
              </button>

              {/* Video Container */}
              <div className="aspect-video bg-gradient-to-br from-[#574668] to-[#453a52] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/30" />
                <p className="text-white text-base sm:text-lg md:text-xl text-center px-4 sm:px-6 md:px-8 relative z-10">
                  [Video Player Placeholder for Demo #{activeDemo}]
                  <br />
                  <span className="text-xs sm:text-sm text-gray-300 mt-2 block">
                    Embed YouTube/Vimeo/MP4 here
                  </span>
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 md:p-8 bg-gray-50">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                  {demos.find((d) => d.id === activeDemo)?.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {demos.find((d) => d.id === activeDemo)?.description}
                </p>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#574668] text-[#574668] hover:bg-[#574668] hover:text-white rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <FloatingWhatsapp />
    </main>
  );
}
