"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, Sparkles, CheckCircle } from "lucide-react";
import axios from "axios";
import Image from "next/image";

const ServiceDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/service/${id}`
        );
        setService(res.data);
      } catch (err) {
        console.error(err);
        setError("Service not found");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1625] via-[#2d2438] to-[#1a1625] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/80 text-sm sm:text-base">
            Loading service details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1625] via-[#2d2438] to-[#1a1625] flex items-center justify-center px-4">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 max-w-md w-full mx-4 border border-white/10">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4">⚠️</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Service Not Found
            </h2>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
              {error}
            </p>
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto bg-gradient-to-r from-[#574668] to-[#6b5b7d] hover:from-[#453a52] hover:to-[#574668] text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1625] via-[#2d2438] to-[#1a1625]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#574668]/30 to-[#6b5b7d]/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 sm:mb-8 transition-all duration-300 hover:translate-x-[-4px] text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Services
          </button>

          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-400" />
            <span className="text-purple-300 font-semibold text-xs sm:text-sm md:text-base">
              Service Details
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {service.title}
          </h1>

          {service.subtitle && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl">
              {service.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Image */}
          {/* Image */}
          {service.image && (
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-fill rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1625]/50 to-transparent"></div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            {service.description && (
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">📋</span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Description
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            )}

            {service.features && service.features.length > 0 && (
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">✨</span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Features
                  </h2>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-white/80 group hover:text-white transition-colors duration-300"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm sm:text-base md:text-lg leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
