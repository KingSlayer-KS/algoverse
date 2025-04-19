"use client";
import { useState } from "react";
import { EnvelopeIcon, MapIcon } from "@heroicons/react/24/outline";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required"; 
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors as Partial<FormData>;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Simulate API call
        await new Promise((res) => setTimeout(res, 1000));
        setShowModal(true);
        setSubmittedName(form.firstName);
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } catch (err) {
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')`,
      }}
    >
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
        {/* Contact Details */}
        <div className="bg-gray-50 p-8 rounded-l-lg">
          <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
          <p className="mt-4 text-gray-600">Drop us a line to get your IT journey started</p>

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

        {/* Contact Form */}
        <div className="p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 p-2 h-24 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm text-center">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h2>
            <p className="text-gray-700">Thank you {submittedName}, for reaching out. We'll get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
