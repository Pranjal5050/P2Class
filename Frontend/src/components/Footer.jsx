import React from "react";

import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#041d63] text-white">

      {/* Top Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="logo"
                className="w-14 h-14 bg-white rounded-full p-1"
              />

              <h2 className="text-3xl font-bold text-yellow-400">
                P² CLASSES
              </h2>

            </div>

            <p className="mt-6 text-blue-100 leading-7">

              India's trusted online learning platform for
              CBSE & ICSE students from Class 9th to 12th.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">

              Quick Links

            </h3>

            <ul className="space-y-3 text-blue-100">

              <li><a href="/">Home</a></li>

              <li><a href="/courses">Courses</a></li>

              <li><a href="/test-series">Test Series</a></li>

              <li><a href="/about">About Us</a></li>

              <li><a href="/contact">Contact</a></li>

            </ul>

          </div>

          {/* Courses */}

          <div>

            <h3 className="text-xl font-semibold mb-5">

              Popular Courses

            </h3>

            <ul className="space-y-3 text-blue-100">

              <li>Class 9</li>

              <li>Class 10</li>

              <li>Class 11 PCM</li>

              <li>Class 12 PCM</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">

              Contact

            </h3>

            <div className="space-y-4 text-blue-100">

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+91 9876543210</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>support@p2classes.com</span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin size={18} />

                <span>
                  Gorakhpur, Uttar Pradesh, India
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-blue-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-blue-200 text-sm">

            © 2026 P² Classes. All Rights Reserved.

          </p>

          <div className="flex gap-5">

            <Facebook className="cursor-pointer hover:text-yellow-400 transition" />

            <Instagram className="cursor-pointer hover:text-yellow-400 transition" />

            <Youtube className="cursor-pointer hover:text-yellow-400 transition" />

            <Linkedin className="cursor-pointer hover:text-yellow-400 transition" />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;