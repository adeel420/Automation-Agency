"use client";
import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Globe,
  Settings2,
  ArrowRight,
  Sparkles,
  Check,
  Zap,
} from "lucide-react";
import axios from "axios";
import Image from "next/image";
import { ScaleLoader } from "react-spinners";
import Link from "next/link";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

const ServiceCard = ({
  image: image,
  title,
  features,
  subtitle,
  color,
  id,
}) => (
  <div className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#574668]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col gap-6 h-full overflow-hidden">
    {/* Accent line on hover */}
    <div
      className={`absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      style={{ background: color }}
    />

    {/* Icon with gradient background */}
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
      style={{ background: color }}
    >
      <Image src={image} className="w-8 h-8 " height={8} width={8} alt="" />
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#574668] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 text-base leading-relaxed">{subtitle}</p>
    </div>

    <ul className="space-y-3 mt-auto">
      {features.map((feature, idx) => (
        <li
          key={idx}
          className="flex items-center gap-3 text-base text-gray-700 group/item"
        >
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform`}
            style={{ backgroundColor: color }}
          >
            <Check className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium">{feature}</span>
        </li>
      ))}
    </ul>

    {/* Learn more link */}
    <div className="mt-4 pt-4 border-t border-gray-100">
      <Link href={`/services/${id}`}>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#574668] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  const whatsappLink =
    "https://wa.me/+923218365564?text=Hi, I visited your website and I'm interested in WhatsApp or Website automation for my business. Please guide me further.";

  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/service/all`
      );
      setServices(res.data);
    } catch (err) {
      console.error("Fetch Services Error:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleShowAll = () => {
    setLoading(true); // show loader
    setTimeout(() => {
      setShowAll(true);
      setLoading(false); // hide loader after delay
    }, 1000); // 1 second delay for demo
  };

  const visibleServices = showAll ? services : services.slice(0, 6);

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
            Our Services
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-lg leading-tight">
            Our Automation Services
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
            We build simple, reliable automation systems that handle inquiries,
            capture leads, and save your team time — without complexity.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#574668]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {visibleServices.map((service, idx) => (
              <ServiceCard
                key={service._id || idx}
                image={service.image}
                title={service.title}
                subtitle={service.subtitle}
                id={service._id}
                features={
                  Array.isArray(service.features)
                    ? service.features
                    : service.features
                    ? JSON.parse(service.features)
                    : []
                }
                color={service.color || "#574668"}
              />
            ))}
          </div>

          {/* Button */}
          {/* More Services Button / Loader */}
          {services.length > 6 && !showAll && (
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
                  More Services
                </button>
              )}
            </div>
          )}

          {/* Key Benefits */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900">
              Why Choose Our Services
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base text-gray-700 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200 shadow-sm">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#574668] flex-shrink-0" />
                <span className="font-medium">No ready-made bots</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200 shadow-sm">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#574668] flex-shrink-0" />
                <span className="font-medium">Manual review process</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200 shadow-sm">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#574668] flex-shrink-0" />
                <span className="font-medium">Scalable solutions</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200 shadow-sm">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#574668] flex-shrink-0" />
                <span className="font-medium">Post-delivery support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#574668] via-[#453a52] to-[#574668] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#6b5b7d]/20 rounded-full blur-3xl -z-10 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Get Started Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-lg">
            Ready to Get Started?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            All automation projects are reviewed manually before confirmation.
            Let's discuss your requirements.
          </p>

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

          <p className="text-xs sm:text-sm text-white/70 font-medium mt-5 sm:mt-6">
            No complexity, just results
          </p>
        </div>
      </section>
      <FloatingWhatsapp />
    </main>
  );
}
