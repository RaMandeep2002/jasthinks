"use client";
import { Heart, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export default function Footer(){
    const [email, setEmail] = useState<string>("");
    return(
        <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="rounded-full p-2 mr-3">
                <Heart className="w-7 h-7 text-indigo-400 animate-pulse drop-shadow-md transition" />
              </span>
              <span className="text-3xl font-extrabold tracking-wider text-white">JasThinks</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              REBT &amp; Life Coaching certified professional
              <br />
              <span className="opacity-80">
                Here to help you on your journey of self-discovery and healing.
              </span>
            </p>
            <div className="flex items-center space-x-5 mt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition"
                aria-label="Instagram"
              >
                <div>
                  <Instagram className="w-8 h-8 text-white group-hover:text-pink-400 transition" />
                </div>
                {/* <span className="sr-only">Instagram</span> */}
              </a>
              <a
                href="mailto:info@email.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition"
                aria-label="Email"
              >
                <div>
                  <Mail className="w-8 h-8 text-white group-hover:text-blue-400 transition" />
                </div>
                {/* <span className="sr-only">Email</span> */}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-indigo-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#webinars" className="text-gray-400 hover:text-indigo-400 transition">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-indigo-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-indigo-400 transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates and insights on psychology and self-reflection.
            </p>
            <form 
            // onSubmit={handleNewsletterSubmit} 
            className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
              />
              <button
                type="submit"
                // disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {/* {loading ? 'Subscribing...' : 'Subscribe'} */}
                Subscribe
              </button>
              {/* {message && (
                <p className="text-sm text-indigo-400">{message}</p>
              )} */}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            Work: <a href="mailto:noesis154@gmail.com" className="text-indigo-400 hover:text-indigo-300">
              noesis154@gmail.com
            </a>
          </p>
          <p className="text-gray-500 text-sm">
            2024 JasThinks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    )
}