import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <h1 className="cursor-pointer font-pacifico text-2xl sm:text-3xl text-white">
            Healio
          </h1>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Healio is your trusted platform for seamless doctor appointment
            scheduling. Our goal is to simplify healthcare access by connecting
            patients with qualified medical professionals, ensuring timely care,
            secure communication, and a stress-free booking experience.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="text-lg font-semibold text-white mb-4">Company</p>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-white transition">Home</li>
            <li className="cursor-pointer hover:text-white transition">
              About us
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Contact us
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="text-lg font-semibold text-white mb-4">Get in Touch</p>
          <ul className="space-y-2">
            <li className="hover:text-white transition">📞 +91 123456789</li>
            <li className="hover:text-white transition">✉️ healio@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Healio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
