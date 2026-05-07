/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const TermsSection = () => {
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
    <section id="terms" className="py-24 bg-black text-white min-h-screen pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-full h-px bg-sixnity/30 mb-12 origin-left"
          />
          <h2 className="text-4xl md:text-6xl mb-4">Terms & Conditions</h2>
          <p className="text-sixnity font-black uppercase tracking-widest text-sm">Agreement for Elite Performance</p>
          <p className="text-white/40 mt-6 text-sm italic">Last updated: May 7, 2026</p>
        </header>

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
              <span className="absolute top-4 right-4 text-xs font-black text-white/10 group-hover:text-sixnity transition-colors">[ {String(idx + 1).padStart(2, '0')} ]</span>
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
  return <TermsSection />;
}
