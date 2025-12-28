import React from "react";
import { Check, Sparkles } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    { text: "No ready-made bots", icon: Sparkles },
    { text: "Manual review", icon: Check },
    { text: "Scalable automation", icon: Check },
    { text: "Clear communication", icon: Check },
    { text: "Post-delivery support", icon: Check },
  ];

  return (
    <div
      id="why-us"
      className="relative overflow-hidden bg-white mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8 "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#574668]/5 via-transparent to-[#574668]/5 -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          {/* Badge */}
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-[10px] sm:text-xs font-semibold text-[#574668] mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider">
            Why Choose Us
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 text-gray-900 px-4">
            Why Choose Us
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-8 px-4 leading-relaxed">
            What sets us apart from the competition
          </p>

          {/* Decorative Line */}
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full" />
        </div>

        {/* Benefits Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative bg-white border-2 border-gray-100 p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-3xl hover:border-[#574668] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Accent corner - Hidden on mobile for cleaner look */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#574668]/10 to-transparent rounded-bl-2xl sm:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />

              <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                  <benefit.icon className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7" />
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1 sm:pt-1.5 md:pt-2">
                  <span className="text-gray-900 font-bold text-base sm:text-lg group-hover:text-[#574668] transition-colors block">
                    {benefit.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
