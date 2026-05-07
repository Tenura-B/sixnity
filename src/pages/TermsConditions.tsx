/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#90b63d20_0%,_transparent_70%)] opacity-20" />
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ y: y1 }}
      >
        <span className="inline-block text-sixnity text-sm md:text-base font-black uppercase tracking-[0.3em] mb-6">
          Terms of Service
        </span>
        <h1 className="text-4xl md:text-6xl font-black leading-none tracking-normal mb-8">
          Terms & <span className="text-sixnity">Conditions</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto mb-10 leading-relaxed italic">
          Agreement for Elite Performance and Member Responsibility.
        </p>
        <p className="text-xs md:text-base font-black uppercase tracking-widest text-white/30">Last updated: May 7, 2026</p>
      </motion.div>
    </section>
  );
};

const TermsContent = () => {
  const terms = [
    { title: 'Use of Service', content: 'You must be at least 18 years of age to use the Sixnity platform. You agree to provide accurate information and maintain the security of your access credentials.' },
    { title: 'Health Disclaimer', content: 'Sixnity is not a medical organization. You should consult with a physician before beginning any exercise program. You voluntarily assume all risks associated with physical activity.' },
    { title: 'User Accounts', content: 'You are responsible for all activity on your account. We reserve the right to suspend accounts that violate our community standards or security policies.' },
    { title: 'Subscriptions & Payments', content: 'Memberships are billed in advance. Cancellations must be processed before the next billing cycle. No-shows for scheduled trainer sessions may incur fees.' },
    { title: 'Intellectual Property', content: 'All platform content, including workouts, algorithms, and designs, are the property of Sixnity. You may not reproduce or distribute our content without written consent.' },
    { title: 'User Content', content: 'By posting content on our platform, you grant Sixnity a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content in connection with our services.' },
    { title: 'Prohibited Activities', content: 'You may not use our platform for any illegal purpose, or in any way that harms other users or the integrity of the ecosystem.' },
    { title: 'Limitation of Liability', content: 'To the maximum extent permitted by law, Sixnity is not liable for indirect, incidental, or consequential damages resulting from your use of our services.' },
    { title: 'Termination', content: 'We reserve the right to terminate or suspend your access to our platform at any time, with or without cause, and without prior notice.' },
    { title: 'Changes to Terms', content: 'We may modify these Terms at any time. Your continued use of the platform after any changes signifies your acceptance of the new Terms.' },
    { title: 'Governing Law', content: 'These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Sixnity operates, without regard to its conflict of law principles.' },
    { title: 'Contact Information', content: 'If you have any questions about these Terms, please contact us at legal@sixnity.com.' },
  ];

  return (
    <section id="terms" className="py-24 bg-black text-white min-h-screen overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {terms.map((term, idx) => (
            <motion.div 
              key={term.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-12 bg-black hover:bg-white/5 transition-colors group relative border-r border-b border-white/10 last:border-r-0"
            >
              <span className="absolute top-4 right-4 text-xs md:text-base font-black text-white/10 group-hover:text-sixnity transition-colors">[ {String(idx + 1).padStart(2, '0')} ]</span>
              <h3 className="text-xl mb-6 text-white group-hover:text-sixnity transition-colors">{term.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">{term.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 border border-sixnity/20 bg-sixnity/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-2xl mb-2">Ready to Commit?</h4>
            <p className="text-white/50">By using our services, you signify your acceptance of these terms.</p>
          </div>
          <button className="bg-sixnity text-black px-12 py-5 font-black uppercase tracking-tighter hover:bg-white transition-all whitespace-nowrap">
            Accept & Join Sixnity
          </button>
        </div>
      </div>
    </section>
  );
};

export default function TermsConditions() {
  return (
    <>
      <Hero />
      <TermsContent />
    </>
  );
}

