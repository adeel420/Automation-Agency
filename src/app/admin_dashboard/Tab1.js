import React, { useState } from "react";

const Tab1 = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    color: "#ffffff",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Services Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Input */}
        <div>
          <label className="block mb-1 font-medium">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Title Input */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Color Picker */}
        <div>
          <label className="block mb-1 font-medium">Select Color</label>
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="w-16 h-10 p-1 border border-gray-300 rounded-md"
          />
          <span className="ml-2">{formData.color}</span>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block mb-1 font-medium">Features</label>
          <textarea
            name="features"
            value={formData.features}
            onChange={handleChange}
            placeholder="List features separated by commas"
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tab1;
