import React, { useState } from "react";
import { Video, FileText, Type, Palette, Save, Upload } from "lucide-react";

const Tab3 = () => {
  const [formData, setFormData] = useState({
    video: null,
    title: "",
    subtitle: "",
    color: "#574668",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "video") {
      setFormData({ ...formData, video: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Demo video uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-xs font-semibold text-[#574668] mb-6 uppercase tracking-wider">
            Demo Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Upload Demo Video
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcase your automation solutions with engaging demo videos
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full mt-6" />
        </div>

        {/* Form Card */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Video Upload */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center text-white">
                  <Video className="w-5 h-5" />
                </div>
                Demo Video
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#574668] file:text-white file:font-medium hover:file:bg-[#453a52]"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">Supported formats: MP4, WebM, MOV (Max: 100MB)</p>
            </div>

            {/* Title Input */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white">
                  <Type className="w-5 h-5" />
                </div>
                Video Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., WhatsApp Bot Demo - Lead Generation"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
              />
            </div>

            {/* Subtitle Input */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                Subtitle
              </label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                placeholder="Brief description or tagline for the demo"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
              />
            </div>

            {/* Color Picker */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white">
                  <Palette className="w-5 h-5" />
                </div>
                Theme Color
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
                  <span className="text-lg font-mono text-gray-700">{formData.color}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="group w-full bg-gradient-to-br from-[#574668] to-[#6b5b7d] text-white font-semibold px-8 py-4 rounded-2xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Upload Demo Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
