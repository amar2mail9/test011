"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6 overflow-hidden">
      {/* 🔹 Background Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/70 blur-3xl rounded-full translate-x-40 -translate-y-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/70 blur-3xl rounded-full -translate-x-40 translate-y-40 -z-10"></div>

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* 🔹 Left: Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white text-gray-900 p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Feel free to reach out for collaborations, projects, or just a
            friendly chat.
          </p>
          <ul className="space-y-3 text-lg text-gray-700">
            {/* <li className="flex items-center gap-3">
              <MapPin className="text-emerald-500" size={22} />
              Patna, Bihar, India
            </li> */}

            <li className="flex items-center gap-3">
              <Phone className="text-emerald-500" size={22} />
              +91 9608553167
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-emerald-500" size={22} />
              amar47kumar47@gmail.com
            </li>
          </ul>

          <div className="flex gap-6 mt-8 text-3xl">
            {/* 🔹 Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61581932435948"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>

            {/* 🔹 Instagram */}
            <a
              href="https://www.instagram.com/kraviona/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>

            {/* 🔹 YouTube */}
            <a
              href="https://www.youtube.com/@Kraviona1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:scale-110 transition-transform"
            >
              <FaYoutube />
            </a>

            {/* 🔹 LinkedIn */}
            <a
              href="https://in.linkedin.com/in/amarkumar96085"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* 🔹 Right: Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-[#00cba9] mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none placeholder-gray-400"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 p-3 rounded-md focus:ring-2 focus:ring-[#00cba9] focus:outline-none placeholder-gray-400"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#00cba9] text-white py-3 rounded-md font-semibold hover:bg-[#00b99b] transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;