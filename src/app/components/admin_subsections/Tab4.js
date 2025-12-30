import React, { useState, useEffect } from "react";
import { Edit3, Trash2, Video, Search, Play } from "lucide-react";

const Tab4 = () => {
  const [demos, setDemos] = useState([
    {
      id: 1,
      title: "WhatsApp Bot Demo - Lead Generation",
      subtitle: "Automated customer inquiry handling",
      color: "#25D366",
      videoUrl: "demo1.mp4"
    },
    {
      id: 2,
      title: "Website Chatbot Integration",
      subtitle: "Seamless website automation",
      color: "#3B82F6",
      videoUrl: "demo2.mp4"
    },
    {
      id: 3,
      title: "Custom Workflow Automation",
      subtitle: "Multi-step business process automation",
      color: "#574668",
      videoUrl: "demo3.mp4"
    }
  ]);
  const [editingDemo, setEditingDemo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDemos = demos.filter(demo =>
    demo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (demo) => {
    setEditingDemo({ ...demo });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedDemos = demos.map(demo =>
      demo.id === editingDemo.id ? editingDemo : demo
    );
    setDemos(updatedDemos);
    setEditingDemo(null);
    alert("Demo updated successfully!");
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this demo?")) {
      setDemos(demos.filter(demo => demo.id !== id));
      alert("Demo deleted successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "video") {
      setEditingDemo({ ...editingDemo, videoFile: files[0] });
    } else {
      setEditingDemo({ ...editingDemo, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-xs font-semibold text-[#574668] mb-6 uppercase tracking-wider">
            Demo Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Update Live Demos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage and update your demo videos
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full mt-6" />
        </div>

        {/* Search Bar */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search demos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
            />
          </div>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredDemos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Video Thumbnail */}
              <div className="relative bg-gray-100 rounded-2xl mb-4 h-40 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: demo.color }}
                />
                <Play className="w-12 h-12 text-gray-600" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(demo)}
                    className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(demo.id)}
                    className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: demo.color }}
                />
                <Video className="w-5 h-5 text-gray-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
              <p className="text-gray-600 mb-4">{demo.subtitle}</p>
              
              <div className="text-sm text-gray-500">
                Video: {demo.videoUrl}
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingDemo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-[#574668] to-[#6b5b7d] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-white">Edit Demo</h3>
                </div>
                <button
                  onClick={() => setEditingDemo(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleUpdate} className="p-6 space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">Video Title</label>
                  <input
                    type="text"
                    name="title"
                    value={editingDemo.title}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">Subtitle</label>
                  <input
                    type="text"
                    name="subtitle"
                    value={editingDemo.subtitle}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">Theme Color</label>
                  <input
                    type="color"
                    name="color"
                    value={editingDemo.color}
                    onChange={handleChange}
                    className="w-20 h-12 border-2 border-gray-200 rounded-xl cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">Update Video (optional)</label>
                  <input
                    type="file"
                    name="video"
                    accept="video/*"
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#574668] file:text-white file:font-medium hover:file:bg-[#453a52]"
                  />
                  <p className="text-sm text-gray-500 mt-2">Leave empty to keep current video</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] text-white font-semibold px-6 py-3 rounded-2xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300"
                  >
                    Update Demo
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingDemo(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab4;
