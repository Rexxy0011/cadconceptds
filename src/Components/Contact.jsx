import React, { useState } from "react";
import toast from "react-hot-toast";
import assets from "../assets/assets";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      // ✅ Corrected Basin endpoint path
      const res = await fetch("https://usebasin.com/f/10fd05d9f41d", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        e.target.reset();
      } else {
        const msg = await res.text().catch(() => "");
        console.error("Basin error:", res.status, msg);
        toast.error("Something went wrong ❌. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error ⚠️. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-800 bg-white"
    >
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003366] mb-2">
          Reach out to us
        </h2>
        <div className="h-1 w-20 bg-[#ffcc00] mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-2 gap-6 max-w-2xl w-full"
      >
        {/* Name Field */}
        <div>
          <p className="mb-2 text-sm font-semibold text-[#003366]">Your Name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 bg-gray-50 focus-within:border-[#ffcc00] transition-all">
            <img
              src={assets.person_icon}
              alt="person icon"
              className="w-5 h-5 opacity-70"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <p className="mb-2 text-sm font-semibold text-[#003366]">Email ID</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 bg-gray-50 focus-within:border-[#ffcc00] transition-all">
            <img
              src={assets.email_icon}
              alt="email icon"
              className="w-5 h-5 opacity-70"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-semibold text-[#003366]">Message</p>
          <textarea
            rows={6}
            name="message"
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 bg-gray-50 focus:border-[#ffcc00] transition-all resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all ${
              loading
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#ffcc00] text-[#003366] hover:bg-[#e6b800] hover:scale-105 cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
            <img
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-4 brightness-0"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
