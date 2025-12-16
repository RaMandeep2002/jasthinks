import { Search, Phone, ChevronDown, Instagram, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 shadow-lg w-full top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center h-35">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <a href="#home" className="flex items-center space-x-2 group">
              <span
                className="text-4xl font-extrabold text-white tracking-widest"
                // style={{ fontFamily: "'Montserrat', cursive, sans-serif" }}
              >
                JasThinks
              </span>
              <span className="ml-1 w-3 h-3 bg-indigo-400 rounded-full animate-pulse shadow-lg hidden sm:inline-block"></span>
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: "Home", icon: false },
              { label: "About", icon: false },
              { label: "Sessions", icon: true },
              { label: "Blog", icon: true },
              { label: "Contact", icon: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`text-white hover:bg-indigo-700 px-4 py-2 rounded-md transition flex items-center space-x-1 text-lg font-medium ${
                  item.icon ? "group" : ""
                }`}
              >
                <span>{item.label}</span>
                {item.icon && (
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side - Search and Call */}
          <div className="hidden md:flex items-center space-x-5">
            {/* <button className="text-white hover:text-indigo-200 p-2 rounded-full transition">
              <Search className="w-5 h-5" />
            </button> */}
            <div className="flex items-center border-l border-indigo-700 pl-5 space-x-5">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group text-white hover:text-pink-400 transition"
                aria-label="Instagram"
              >
                <div>
                  <Instagram className="w-7 h-7" />
                </div>
                {/* <span className="hidden xl:inline font-semibold tracking-wide text-white group-hover:text-pink-400 transition">Instagram</span> */}
              </a>
              <a
                href="mailto:info@email.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group text-white hover:text-blue-400 transition"
                aria-label="Email"
              >
                <div>
                  <Mail className="w-7 h-7" />
                </div>
                {/* <span className="hidden xl:inline font-semibold tracking-wide text-white group-hover:text-blue-400 transition">Email</span> */}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button className="text-white hover:text-indigo-200 p-2 rounded-md transition focus:outline-none">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
