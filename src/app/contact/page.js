"use client";
import React, { useState } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

const ContactCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
  contact,
  gradient,
  isEmail,
}) => (
  <div className="group relative bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 hover:border-[#574668] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    {/* Accent corner */}
    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#574668]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <div
      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-5 sm:mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
    >
      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
    </div>

    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#574668] transition-colors">
      {title}
    </h3>

    <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
      {description}
    </p>

    <a
      href={buttonLink}
      target={isEmail ? "_self" : "_blank"}
      rel={isEmail ? "" : "noopener noreferrer"}
      className="block"
    >
      <button
        className={`w-full px-6 py-3 sm:py-3.5 ${
          gradient.includes("25D366")
            ? "bg-[#25D366] hover:bg-[#128C7E]"
            : "bg-gradient-to-r from-[#574668] to-[#6b5b7d] hover:from-[#453a52] hover:to-[#574668]"
        } text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base`}
      >
        {buttonText}
      </button>
    </a>

    <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 font-medium">
      {contact}
    </p>
  </div>
);

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink =
    "https://wa.me/1234567890?text=Hi, I visited your website and I'm interested in WhatsApp or Website automation for my business. Please guide me further.";

  const WHATSAPP_NUMBER = "123456754321";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] sm:text-xs font-semibold text-white tracking-wider uppercase mb-6 sm:mb-8">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Get In Touch
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 md:mb-6 text-white drop-shadow-lg leading-tight">
            Contact Us
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Ready to automate your business? Get in touch with us via WhatsApp,
            email, or fill out the form below.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              description="Chat with us directly on WhatsApp for the fastest response."
              buttonText="Open WhatsApp"
              buttonLink={whatsappLink}
              contact={`+${WHATSAPP_NUMBER}`}
              gradient="from-[#25D366] to-[#128C7E]"
              isEmail={false}
            />

            <ContactCard
              icon={Mail}
              title="Email"
              description="Send us an email and we'll get back to you within 24 hours."
              buttonText="Send Email"
              buttonLink="mailto:contact@aiautomation.com"
              contact="contact@aiautomation.com"
              gradient="from-[#574668] to-[#6b5b7d]"
              isEmail={true}
            />
          </div>

          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                Phone
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                +{WHATSAPP_NUMBER}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                Location
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Remote Worldwide
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                Response Time
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-[10px] sm:text-xs font-semibold text-[#574668] mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider">
              Send a Message
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-gray-900">
              Get a Free Consultation
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you with a
              customized automation plan
            </p>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 sm:py-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#574668] focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#574668] focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#574668] focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#574668] focus:outline-none transition-colors text-sm sm:text-base bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="whatsapp">WhatsApp Automation</option>
                      <option value="website">Website Automation</option>
                      <option value="custom">Custom Solution</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#574668] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#574668] to-[#6b5b7d] hover:from-[#453a52] hover:to-[#574668] text-white px-8 py-4 sm:py-4.5 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="relative bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-[#574668]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 text-center">
              Important Information
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {[
                "All automation projects are reviewed manually before confirmation.",
                "We only accept technically feasible requests.",
                "Every project is custom-built based on your specific requirements.",
                "Response time: Within 24 hours during business days.",
                "Free consultation to discuss your automation needs.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
