"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const lightNavbarRoutes = ["/cookie-policy", "/help", "/privacy-policy", "/refund-policy", "/terms-of-services"];
  
  // Routes to include in the navigation menu
  const navRoutes = [
    { name: "Home", path: "/" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Help", path: "/help" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Terms of Service", path: "/terms-of-services" },
    { name: "Support", path: "/support" }
  ];

  const specialRoutes = ["/confirmation", "/reset-password"];
  const isSpecialRoute = specialRoutes.includes(pathname);

  // Determine if navbar should be light
  const isLightNavbar = lightNavbarRoutes.includes(pathname);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-opacity-95" : "py-4"
      } ${
        isLightNavbar
          ? "bg-white text-black shadow-md"
          : "bg-black text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={"/images/text-logo.png"}
            alt="Cineparda Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navRoutes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`${
                pathname === route.path
                  ? isLightNavbar
                    ? "text-[#309cd4] font-bold"
                    : "text-[#f36f20] font-bold"
                  : isLightNavbar
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none ${
            isLightNavbar ? "text-black" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 p-4 ${
            isLightNavbar ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navRoutes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`${
                  pathname === route.path
                    ? isLightNavbar
                      ? "text-blue-600 font-bold"
                      : "text-red-500 font-bold"
                    : isLightNavbar
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-gray-300 hover:text-white"
                } transition-colors block py-2`}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;