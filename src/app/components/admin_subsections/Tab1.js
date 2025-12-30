import React, { useState } from "react";
import { Upload, Palette, FileText, List, Save } from "lucide-react";
import axios from "axios";

const Tab1 = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    subTitle: "",
    color: "#574668",
    description: "",
    features: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.image ||
      !formData.title ||
      !formData.subTitle ||
      !formData.description ||
      !formData.features
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const data = new FormData();
      data.append("image", formData.image);
      data.append("title", formData.title);
      data.append("subtitle", formData.subTitle);
      data.append("description", formData.description);
      data.append(
        "features",
        JSON.stringify(formData.features.split(",").map((f) => f.trim()))
      );
      data.append("color", formData.color);

      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/service/create`,
        data
      );

      setFormData({
        image: null, // ✅ correct
        title: "",
        subTitle: "",
        color: "#574668", // ✅ default reset
        description: "",
        features: "",
      });

      alert("Service created successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-xs font-semibold text-[#574668] mb-6 uppercase tracking-wider">
            Service Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Create New Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Add a new automation service to showcase your offerings
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full mt-6" />
        </div>

        {/* Form Card */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Upload */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-xl flex items-center justify-center text-white">
                  <Upload className="w-5 h-5" />
                </div>
                Service Icon
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#574668] file:text-white file:font-medium hover:file:bg-[#453a52]"
                />
              </div>
            </div>

            {/* Title Input */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                Service Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., WhatsApp Automation Bots"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
              />
            </div>

            {/* Subtitle */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                Service Subtitle
              </label>
              <input
                type="text"
                name="subTitle"
                value={formData.subTitle}
                onChange={handleChange}
                placeholder="e.g., WhatsApp Automation Bots"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
              />
            </div>

            {/* Color Picker */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white">
                  <Palette className="w-5 h-5" />
                </div>
                Brand Color
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-20 h-12 border-2 border-gray-200 rounded-xl cursor-pointer hover:scale-105 transition-transform"
                />
                <div className="flex-1 p-4 bg-gray-50 rounded-2xl border-2 border-gray-200">
                  <span className="text-lg font-mono text-gray-700">
                    {formData.color}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description of the service..."
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg resize-none"
                rows="4"
              />
            </div>

            {/* Features */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center text-white">
                  <List className="w-5 h-5" />
                </div>
                Key Features
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                placeholder="Auto-replies, Lead capture, Business hour responses, Booking & FAQs"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg resize-none"
                rows="3"
              />
              <p className="text-sm text-gray-500 mt-2">
                Separate features with commas
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="group w-full bg-gradient-to-br from-[#574668] to-[#6b5b7d] text-white font-semibold px-8 py-4 rounded-2xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Create Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
