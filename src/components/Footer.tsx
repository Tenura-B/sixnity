/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-black text-white border-t border-sixnity/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="text-4xl font-black tracking-tighter mb-8 block">
              SIX<span className="text-sixnity">NITY</span>
            </Link>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Built for discipline, consistency, and measurable progress. We are an ecosystem for those who treat fitness as a high-performance craft.
            </p>
          </div>
          
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest text-sixnity mb-8">Navigation</h5>
            <ul className="space-y-4 text-sm font-bold text-white/70">
              <li><Link to="/#about" className="hover:text-sixnity">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-sixnity">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-sixnity">Terms of Service</Link></li>
              <li><a href="#" className="hover:text-sixnity">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-widest text-sixnity mb-8">Connect</h5>
            <ul className="space-y-4 text-sm font-bold text-white/70">
              <li><a href="#" className="hover:text-sixnity">Instagram</a></li>
              <li><a href="#" className="hover:text-sixnity">Twitter</a></li>
              <li><a href="#" className="hover:text-sixnity">LinkedIn</a></li>
              <li><a href="mailto:support@sixnity.com" className="hover:text-sixnity">support@sixnity.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 SIXNITY ECOSYSTEM. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sixnity">System Status</a>
            <a href="#" className="hover:text-sixnity">Legal Infrastructure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
