"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Define which routes should have a light footer (same as in Navbar)
  const lightThemeRoutes = ["/cookie-policy", "/help", "/privacy-policy", "/refund-policy", "/terms-of-services"];

  // Determine if footer should be light themed
  const isLightTheme = lightThemeRoutes.includes(pathname);

  const colors = {
    primary: "#f36f20",
    textLight: "#7A8DA7",
    border: "#E1E5EB",
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'Home', href: '/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Support', href: '/support' }
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/terms-of-services' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'Refund Policy', href: '/refund-policy' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];


const footer = {
  footerText: "© {year} Cineparda. All rights reserved.",
  footerEmail: "support@cineparda.com",
  footerAddress: "Cineparda Inc., 123 Entertainment Blvd, Los Angeles, CA 90001"
}
  return (
    <footer className={`border-t py-12 font-lato ${isLightTheme
      ? "bg-white text-black border-gray-200"
      : "bg-black text-white border-gray-800"
      }`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src={"/images/logo.png"}
                alt="Cineparda Logo"
                width={300}
                height={300}
                className="h-20 w-auto"
              />
            </Link>
            <p className={`mt-4 text-sm max-w-xs font-bold ${isLightTheme ? "text-gray-600" : "text-gray-400"
              }`}>
              Stream unlimited movies and TV shows on your phone.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className={`transition-colors ${isLightTheme
                      ? "text-gray-600 hover:text-[#309cd4]"
                      : "text-gray-400 hover:text-white"
                      }`}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className={`text-sm font-semibold tracking-wider uppercase mb-4 ${isLightTheme ? "text-black" : "text-white"
                }`}>
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors font-bold ${pathname === link.href
                        ? isLightTheme
                          ? "text-[#309cd4] font-bold"
                          : "text-[#f36f20] font-bold"
                        : isLightTheme
                          ? "text-gray-600 hover:text-[#309cd4]"
                          : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${colors.border}` }} className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <p style={{ color: colors.textLight }} className="mb-2">
                  {footer.footerText.replace('{year}', new Date().getFullYear().toString())}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2" style={{ color: colors.primary }}>Contact Support</h3>
                <p className="text-sm" style={{ color: colors.textLight }}>
                  {footer.footerEmail}
                </p>
                <p className="text-sm" style={{ color: colors.textLight }}>
                  {footer.footerAddress}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
}