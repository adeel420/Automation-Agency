import React from "react";
import { MessageSquare, FileText, Settings, CheckCircle } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Client contacts via WhatsApp",
      description: "Start the conversation about your automation needs.",
      number: "01",
      gradient: "from-[#25D366] to-[#128C7E]",
    },
    {
      icon: FileText,
      title: "Requirements discussion",
      description: "We discuss your specific business needs and goals.",
      number: "02",
      gradient: "from-[#574668] to-[#6b5b7d]",
    },
    {
      icon: Settings,
      title: "Automation build & testing",
      description: "We develop and test your custom automation system.",
      number: "03",
      gradient: "from-[#6b5b7d] to-[#574668]",
    },
    {
      icon: CheckCircle,
      title: "Delivery + optional maintenance",
      description: "Project delivery and ongoing support if needed.",
      number: "04",
      gradient: "from-green-500 to-green-700",
    },
  ];

  return (
    <div
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration - Responsive sizing */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#574668]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#574668]/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 relative z-10">
          {/* Badge */}
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-[10px] sm:text-xs font-semibold text-[#574668] mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider">
            Our Process
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 text-gray-900 px-4">
            How It Works
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-8 px-4 leading-relaxed">
            Simple 4-step process to get your automation running
          </p>

          {/* Decorative Line */}
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full" />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10 relative z-10">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-16 xl:top-20 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-[#574668]/20 via-[#574668]/30 via-[#574668]/30 to-[#574668]/20 rounded-full -z-10" />

          {/* Connector Line (Tablet - Vertical between pairs) */}
          <div className="hidden sm:block lg:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-[#574668]/20 via-[#574668]/30 to-[#574668]/20 rounded-full -z-10" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step number badge - Responsive sizing */}
              <div
                className={`absolute -top-4 sm:-top-5 md:-top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-xl z-20 border-3 sm:border-4 border-white`}
              >
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 pt-12 sm:pt-14 md:pt-16 hover:border-[#574668] hover:shadow-2xl transition-all duration-300 w-full h-full hover:-translate-y-2">
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 sm:w-15 sm:h-15 md:w-16 md:h-16 bg-gradient-to-br ${step.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5 md:mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mx-auto`}
                >
                  <step.icon className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#574668] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Connector (Arrow down between cards) */}
              {idx < steps.length - 1 && (
                <div className="sm:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#574668]/30 to-[#574668]/10 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
