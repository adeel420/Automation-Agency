import React, { useState } from "react";
import {
  Video,
  FileText,
  Type,
  Palette,
  Save,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

const Tab3 = () => {
  const [formData, setFormData] = useState({
    video: null,
    title: "",
    subtitle: "",
    color: "#574668",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "video") {
      setFormData({ ...formData, video: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (error) setError(""); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title.trim()) return setError("Title is required");
    if (!formData.subtitle.trim()) return setError("Subtitle is required");

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const data = new FormData();
      data.append("title", formData.title);
      data.append("subtitle", formData.subtitle);
      data.append("color", formData.color); // send color too
      if (formData.video) data.append("video", formData.video);

      // API call to backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/demo/`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response:", response.data);

      setSuccess(true);

      // Reset form
      setFormData({
        video: null,
        title: "",
        subtitle: "",
        color: "#574668",
      });

      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Upload Error:", err);
      setError(
        err.response?.data?.error ||
          "Failed to upload demo video. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
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

        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-green-800 font-medium">
              Demo video uploaded successfully!
            </p>
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        {/* Form */}
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
              <input
                type="file"
                name="video"
                accept="video/*"
                onChange={handleChange}
                disabled={loading}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#574668] file:text-white file:font-medium hover:file:bg-[#453a52]"
              />
              {formData.video && (
                <p className="text-sm text-[#574668] mt-2">
                  Selected: {formData.video.name}
                </p>
              )}
            </div>

            {/* Title */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white">
                  <Type className="w-5 h-5" />
                </div>
                Video Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                disabled={loading}
                placeholder="e.g., WhatsApp Bot Demo - Lead Generation"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
                required
              />
            </div>

            {/* Subtitle */}
            <div className="group">
              <label className="flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center text-white">
                  <FileText className="w-5 h-5" />
                </div>
                Subtitle <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                disabled={loading}
                placeholder="Brief description or tagline for the demo"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
                required
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
              <input
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                disabled={loading}
                className="w-20 h-12 border-2 border-gray-200 rounded-xl cursor-pointer"
              />
              <span className="ml-4 text-lg font-mono text-gray-700">
                {formData.color}
              </span>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-gradient-to-br from-[#574668] to-[#6b5b7d] text-white font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Upload Demo Video
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
