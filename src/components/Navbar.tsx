/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { name: 'About', href: '/#about' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For hash links on home page
  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          SIX<span className="text-sixnity">NITY</span>
        </Link>
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              onClick={(e) => handleHashLink(e, item.href)}
              className="text-xs md:text-base font-bold uppercase tracking-widest text-white/70 hover:text-sixnity transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link to="/terms" className="hidden md:block bg-sixnity text-black px-6 py-2 text-base font-black uppercase tracking-tighter hover:bg-white transition-all">
          Get Started
        </Link>
      </div>
    </nav>
  );
};
