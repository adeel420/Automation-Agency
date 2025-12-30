import React, { useState, useEffect } from "react";
import { Edit3, Trash2, Settings, Search, Plus } from "lucide-react";
import axios from "axios";

const Tab2 = () => {
  const [services, setServices] = useState([]);

  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (service) => {
    setEditingService({
      ...service,
      features: service.features.join(", "),
    });
  };

  useEffect(() => {
    fetchServices();
  }, []);

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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", editingService.title);
      data.append("description", editingService.description);
      data.append("color", editingService.color);
      data.append(
        "features",
        JSON.stringify(editingService.features.split(",").map((f) => f.trim()))
      );

      await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER}/service/${editingService._id}`,
        data
      );

      await fetchServices();
      setEditingService(null);
      alert("Service updated successfully!");
    } catch (err) {
      console.error("Update Error:", err);
      alert("Update failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/service/${id}`);
      setServices(services.filter((service) => service._id !== id));
      alert("Service deleted successfully!");
    } catch (err) {
      console.error("Delete Error:", err);
      alert("Delete failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingService({ ...editingService, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-xs font-semibold text-[#574668] mb-6 uppercase tracking-wider">
            Service Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Update Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage and update your automation services
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full mt-6" />
        </div>

        {/* Search Bar */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 text-lg"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: service.color }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingService && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-[#574668] to-[#6b5b7d] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-white">
                    Edit Service
                  </h3>
                </div>
                <button
                  onClick={() => setEditingService(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleUpdate} className="p-6 space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={editingService.title}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={editingService.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Color
                  </label>
                  <input
                    type="color"
                    name="color"
                    value={editingService.color}
                    onChange={handleChange}
                    className="w-20 h-12 border-2 border-gray-200 rounded-xl cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Features (comma separated)
                  </label>
                  <textarea
                    name="features"
                    value={editingService.features}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#574668] focus:ring-4 focus:ring-[#574668]/10 transition-all duration-300 resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] text-white font-semibold px-6 py-3 rounded-2xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300"
                  >
                    Update Service
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingService(null)}
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

export default Tab2;
