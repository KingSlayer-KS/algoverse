"use client";

import { EnvelopeIcon, MapIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Contact Details */}
        <div className="bg-gray-50 p-8 rounded-l-lg">
          <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
          <p className="mt-4 text-gray-600">
          Drop us a line to get your IT journey started
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-600">
              <MapIcon className="h-6 w-6 text-indigo-500 mr-3" />
              <p>Ontario, Canada</p>
            </div>

            <div className="flex items-center text-gray-600">
              <EnvelopeIcon className="h-6 w-6 text-indigo-500 mr-3" />
              <p>info@algo-verse.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 h-24"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-indigo-500 transition"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
