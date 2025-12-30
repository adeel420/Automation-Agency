"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageCircle,
  Briefcase,
  Eye,
  X,
} from "lucide-react";

export default function Contact_subsection() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [contacts, setContacts] = useState([]);

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/contact/all`
      );
      setContacts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 bg-[#574668]/10 border border-[#574668]/20 rounded-full text-xs font-semibold text-[#574668] mb-6 uppercase tracking-wider">
            Contact Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Contact Inquiries
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage and respond to customer inquiries and service requests
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#574668] to-[#6b5b7d] mx-auto rounded-full mt-6" />
        </div>

        {/* Stats Card */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-2xl flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Total Inquiries
                </h3>
                <p className="text-gray-600">All contact submissions</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#574668]">
                {contacts.length}
              </div>
              <div className="text-sm text-gray-500">Messages</div>
            </div>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white border-2 border-gray-100 rounded-3xl shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#574668] to-[#6b5b7d] px-6 py-4">
            <h2 className="text-xl font-semibold text-white">
              Contact Details
            </h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Service Needed
                    </div>
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr
                    key={contact._id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">
                        {contact.name}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-700">{contact.email}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-700">{contact.phone}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#574668]/10 text-[#574668] border border-[#574668]/20">
                        {contact.service}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => setSelectedMessage(contact.message)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#574668] to-[#6b5b7d] text-white rounded-xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden p-6 space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#574668] to-[#6b5b7d] rounded-lg flex items-center justify-center text-white">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {contact.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-gray-700 break-words">
                      {contact.email}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-gray-700">{contact.phone}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#574668]/10 text-[#574668] border border-[#574668]/20">
                      {contact.service}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedMessage(contact.message)}
                    className="w-full mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#574668] to-[#6b5b7d] text-white rounded-xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    <Eye className="w-4 h-4" />
                    View Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#574668] to-[#6b5b7d] px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Customer Message
                </h4>
              </div>
              <button
                onClick={() => setSelectedMessage(null)}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedMessage}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <button
                onClick={() => setSelectedMessage(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#574668] to-[#6b5b7d] text-white rounded-xl hover:from-[#453a52] hover:to-[#574668] transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
