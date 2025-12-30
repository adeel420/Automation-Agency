import React, { useState, useEffect } from "react";
import {
  Edit3,
  Trash2,
  Video,
  Search,
  Play,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

const Tab4 = () => {
  const [demos, setDemos] = useState([]);
  const [editingDemo, setEditingDemo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch all demos on component mount
  useEffect(() => {
    fetchDemos();
  }, []);

  const fetchDemos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/demo`
      );
      setDemos(response.data);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Failed to load demos");
    } finally {
      setLoading(false);
    }
  };

  const filteredDemos = demos.filter((demo) =>
    demo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (demo) => {
    setEditingDemo({ ...demo });
    setError("");
    setSuccess("");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!editingDemo.title.trim() || !editingDemo.subtitle.trim()) {
      setError("Title and subtitle are required");
      return;
    }

    try {
      setUpdating(true);
      setError("");

      const formData = new FormData();
      formData.append("title", editingDemo.title);
      formData.append("subtitle", editingDemo.subtitle);

      // Only append video if a new file was selected
      if (editingDemo.videoFile) {
        formData.append("video", editingDemo.videoFile);
      }

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER}/demo/${editingDemo._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update local state with updated demo
      const updatedDemos = demos.map((demo) =>
        demo._id === editingDemo._id ? response.data.data : demo
      );
      setDemos(updatedDemos);

      setSuccess("Demo updated successfully!");
      setEditingDemo(null);

      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      console.error("Update Error:", err);
      setError(
        err.response?.data?.error || "Failed to update demo. Please try again."
      );
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this demo?")) {
      return;
    }

    try {
      setDeleting(id);
      setError("");

      await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/demo/${id}`);

      // Remove from local state
      setDemos(demos.filter((demo) => demo._id !== id));

      setSuccess("Demo deleted successfully!");
      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      console.error("Delete Error:", err);
      setError(
        err.response?.data?.error || "Failed to delete demo. Please try again."
      );
    } finally {
      setDeleting(null);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#574668] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading demos...</p>
        </div>
      </div>
    );
  }

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

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-green-800 font-medium">{success}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

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

        {/* No Demos Message */}
        {demos.length === 0 && (
          <div className="text-center py-16">
            <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No demos found
            </h3>
            <p className="text-gray-500">
              Upload your first demo video to get started
            </p>
          </div>
        )}

        {/* Demos Grid */}
        {filteredDemos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {filteredDemos.map((demo) => (
              <div
                key={demo._id}
                className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Video Thumbnail */}
                <div className="relative bg-gray-100 rounded-2xl mb-4 h-40 flex items-center justify-center overflow-hidden">
                  {demo.video ? (
                    <video
                      src={demo.video}
                      className="w-full h-full object-cover"
                      controls={false}
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-20 bg-[#574668]" />
                      <Play className="w-12 h-12 text-gray-600" />
                    </>
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={() => handleEdit(demo)}
                      disabled={deleting === demo._id}
                      className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl transition-colors disabled:opacity-50"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(demo._id)}
                      disabled={deleting === demo._id}
                      className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl transition-colors disabled:opacity-50"
                    >
                      {deleting === demo._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
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

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {demo.title}
                </h3>
                <p className="text-gray-600 mb-4">{demo.subtitle}</p>

                <div className="text-sm text-gray-500">
                  {demo.video ? (
                    <span className="text-green-600 font-medium">
                      ✓ Video uploaded
                    </span>
                  ) : (
                    <span className="text-gray-400">No video</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Search Results */}
        {filteredDemos.length === 0 && demos.length > 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No results found
            </h3>
            <p className="text-gray-500">
              Try searching with different keywords
            </p>
          </div>
        )}

        {/* Edit Modal */}
        {editingDemo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-[#574668] to-[#6b5b7d] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-white">
                    Edit Demo
                  </h3>
                </div>
                <button
                  onClick={() => setEditingDemo(null)}
                  disabled={updating}
                  className="text-white hover:text-gray-200 text-2xl disabled:opacity-50"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleUpdate} className="p-6 space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Video Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={editingDemo.title}
                    onChange={handleChange}
                    disabled={updating}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Subtitle <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    value={editingDemo.subtitle}
                    onChange={handleChange}
                    disabled={updating}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Update Video (optional)
                  </label>
                  <input
                    type="file"
                    name="video"
                    accept="video/*"
                    onChange={handleChange}
                    disabled={updating}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#574668] file:text-white file:font-medium hover:file:bg-[#453a52] disabled:opacity-50"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Leave empty to keep current video
                    {editingDemo.videoFile && (
                      <span className="text-[#574668] font-medium ml-2">
                        • New: {editingDemo.videoFile.name}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={updating}
                    className="flex-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] text-white font-semibold px-6 py-3 rounded-2xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {updating ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      "Update Demo"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingDemo(null)}
                    disabled={updating}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 disabled:opacity-50"
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
