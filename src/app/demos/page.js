"use client";
import { ExternalLink, Play, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import CallToAction from "../components/home_subsections/CallToAction";

const DemoCard = ({ title, subtitle, onPlay, color }) => (
  <div
    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
    onClick={onPlay}
  >
    <div
      className={`absolute inset-0 group-hover:scale-110 transition-transform duration-700`}
      style={{ backgroundColor: color }}
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
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
        {subtitle}
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
  const [demos, setDemos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchDemos();
  }, []);

  const fetchDemos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/demo`
      );
      setDemos(response.data);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Failed to load demos");
    } finally {
      setLoading(false);
    }
  };

  const handleShowAll = () => {
    setLoading(true); // show loader
    setTimeout(() => {
      setShowAll(true);
      setLoading(false); // hide loader after delay
    }, 1000); // 1 second delay for demo
  };

  const visibleServices = showAll ? demos : demos.slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#574668] via-[#6b5b7d] to-[#453a52] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center relative z-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {visibleServices.map((demo) => (
            <DemoCard
              key={demo._id}
              title={demo.title}
              subtitle={demo.subtitle}
              color={demo.color}
              onPlay={() => setActiveDemo(demo)}
            />
          ))}
        </div>

        {/* Button */}
        {/* More Services Button / Loader */}
        {demos.length > 6 && !showAll && (
          <div className="w-full flex justify-center mb-16">
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <ScaleLoader
                  color="#4d3e5b"
                  height={30}
                  width={4}
                  radius={2}
                  margin={2}
                />
              </div>
            ) : (
              <button
                onClick={handleShowAll}
                className="group inline-flex items-center gap-2 px-12 py-4 bg-[#4d3e5b] hover:bg-[#342a3e] cursor-pointer text-white rounded-full text-md font-medium transition-all duration-300 shadow-lg shadow-[#4d3e5b]/20 hover:shadow-xl hover:shadow-[#4d3e5b]/30 hover:scale-105"
              >
                More Live Demos
              </button>
            )}
          </div>
        )}

        {/* Video Modal */}
        {activeDemo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 md:p-6"
            onClick={() => setActiveDemo(null)}
          >
            <div
              className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-5xl overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveDemo(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#574668] hover:bg-[#453a52] rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-110"
              >
                <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
              </button>

              {/* Video Player */}
              <div className="aspect-video bg-black flex items-center justify-center">
                {activeDemo.video ? (
                  <video
                    src={activeDemo.video}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-white">No video available</p>
                )}
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-gray-50">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                  {activeDemo.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {activeDemo.subtitle}
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

      <CallToAction />
      <FloatingWhatsapp />
    </main>
  );
}
