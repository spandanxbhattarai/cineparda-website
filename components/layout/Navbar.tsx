"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Bell, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Movies', href: '/movies' },
    { name: 'My List', href: '/my-list' },
    { name: 'Support', href: '/support' },
    { name: 'Our App', href: '/mobile-app' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 font-lato',
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & desktop navigation */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#f36f20] font-bebas">CINEPARDA</h1>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/notifications">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="sm" className="ml-2 bg-[#2c9ad4] text-white hover:text-black font-bebas tracking-wider">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between px-3 py-3">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Link href="/notifications" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}