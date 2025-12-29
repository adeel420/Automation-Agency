import { Sparkles } from "lucide-react";
import React from "react";
import WhyChooseUs from "../components/home_subsections/WhyChooseUs";
import Process from "../components/home_subsections/Process";
import Image from "next/image";
import { assets } from "../assets/assets";

const page = () => {
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
            About Us
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-lg leading-tight">
            About ZenithFlow
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
            We build simple, reliable automation systems that handle inquiries,
            capture leads, and save your team time — without complexity.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 sm:px-10 lg:px-16 mt-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed drop-shadow-md">
            At <b>ZenithFlow</b>, we help businesses run smarter through
            purposeful automation. We design and implement reliable systems that
            handle inquiries, capture and qualify leads, and streamline
            day-to-day operations—so your team can focus on growth, not
            repetitive tasks.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed drop-shadow-md">
            Our approach is simple: no unnecessary complexity, no bloated tools.
            We build clean, efficient automations that integrate seamlessly with
            your existing workflows and scale as your business grows.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed drop-shadow-md">
            Whether you’re looking to improve response times, reduce manual
            work, or create a smoother customer journey, <b>ZenithFlow</b>{" "}
            delivers automation solutions that are practical, dependable, and
            built to perform.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={assets.about}
            alt="About ZenithFlow"
            className="w-full max-w-md lg:max-w-lg h-auto"
            priority
          />
        </div>
      </section>

      {/* Other sections */}
      <div className="mb-12 ">
        <Process />
        <WhyChooseUs />
      </div>
    </main>
  );
};

export default page;
