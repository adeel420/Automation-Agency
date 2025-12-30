"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  MessageCircle,
  Globe,
  Settings2,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export const Services = () => {
  const [services, setServices] = useState([]);

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

  return (
    <div
      id="services"
      className="relative bg-gray-50 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          {/* Badge */}
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-[10px] sm:text-xs font-semibold text-[#574668] mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider">
            Our Services
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 text-gray-900 px-4">
            Our Automation Services
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-8 px-4 leading-relaxed">
            Comprehensive automation solutions tailored to your business needs
          </p>

          {/* Decorative Line */}
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full" />
        </div>

        {/* Services Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {services.slice(0, 3).map((service, idx) => (
            <ServiceCard
              key={service._id || idx}
              image={service.image} // default icon
              title={service.title}
              subtitle={service.subtitle}
              id={service._id}
              features={
                Array.isArray(service.features)
                  ? service.features
                  : JSON.parse(service.features)
              }
              color={service.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
