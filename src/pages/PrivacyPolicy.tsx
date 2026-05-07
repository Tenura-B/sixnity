/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  CheckCircle2, 
  Activity, 
  Globe, 
  Lock, 
  ArrowRight 
} from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-sixnity)_0%,_transparent_70%)] opacity-20" />
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
          Legal Foundation
        </span>
        <h1 className="text-4xl md:text-6xl font-black leading-none tracking-normal mb-8">
          Privacy <span className="text-sixnity">Policy</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto mb-10 leading-relaxed italic">
          Everything you need to know about how Sixnity protects your data and manages your privacy.
        </p>
        <p className="text-xs md:text-base font-black uppercase tracking-widest text-white/30">Last updated: May 7, 2026</p>
      </motion.div>
    </section>
  );
};

const PrivacyContent = () => {
  const sections = [
    { title: 'Information We Collect', id: 'collect' },
    { title: 'How We Use Information', id: 'use' },
    { title: 'Data Sharing', id: 'sharing' },
    { title: 'Data Security', id: 'security' },
    { title: 'Data Retention', id: 'retention' },
    { title: 'Your Rights', id: 'rights' },
    { title: 'Third-Party Services', id: 'third-party' },
    { title: 'Children’s Privacy', id: 'children' },
    { title: 'Policy Updates', id: 'updates' },
    { title: 'Contact Information', id: 'privacy-contact' },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observers = sections.map(section => {
      const el = document.getElementById(section.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
      );

      observer.observe(el);
      return { el, observer };
    }).filter(Boolean);

    return () => observers.forEach(o => o?.observer.disconnect());
  }, []);

  return (
    <section id="privacy" className="py-24 bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Nav */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40">
              <h4 className="text-xs md:text-base font-black uppercase tracking-widest text-black/30 mb-8">Privacy Contents</h4>
              <nav className="space-y-4">
                {sections.map(s => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`}
                    className={`block text-sm md:text-base font-bold transition-all ${activeSection === s.id ? 'text-sixnity translate-x-2' : 'text-black/40 hover:text-black hover:translate-x-1'}`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:w-3/4 space-y-24">
            <div id="collect" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <CheckCircle2 size={24} /> 01. Information We Collect
              </h3>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>We collect information that you provide directly to us when you create an account, purchase a membership, or communicate with trainers. This includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal Identifiers: Name, email address, phone number, and physical mailing address.</li>
                  <li>Fitness Data: Weight, height, age, fitness goals, workout history, and biometric data shared voluntarily.</li>
                  <li>Payment Information: Credit card details and billing address (processed securely via our payment partners).</li>
                </ul>
              </div>
            </div>

            <div id="use" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <Activity size={24} /> 02. How We Use Information
              </h3>
              <p className="text-black/70 leading-relaxed">
                Sixnity uses your data to provide a personalized experience. This includes generating workout plans, tracking performance metrics, facilitating trainer communication, and ensuring the security of your account. We also use aggregated, non-identifying data for platform improvements and performance benchmarking.
              </p>
            </div>

            <div id="sharing" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <Globe size={24} /> 03. Data Sharing
              </h3>
              <p className="text-black/70 leading-relaxed">
                We do not sell your personal data. We only share information with third-party service providers (like cloud hosting and payment processors) who assist in our operations, and only to the extent necessary for them to perform their jobs. We may disclose information if required by law.
              </p>
            </div>

            <div id="security" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <Lock size={24} /> 04. Data Security
              </h3>
              <p className="text-black/70 leading-relaxed">
                We implement industry-standard administrative, technical, and physical security measures to protect your data from unauthorized access, disclosure, or destruction. This includes encryption of data at rest and in transit.
              </p>
            </div>

            <div id="retention" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <ArrowRight size={24} /> 05. Data Retention
              </h3>
              <p className="text-black/70 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and fulfill the transactions you have requested, or for other essential purposes such as complying with our legal obligations, resolving disputes, and enforcing our agreements.
              </p>
            </div>

            <div id="rights" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <ArrowRight size={24} /> 06. Your Rights
              </h3>
              <p className="text-black/70 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact our privacy team.
              </p>
            </div>

            <div id="third-party" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <ArrowRight size={24} /> 07. Third-Party Services
              </h3>
              <p className="text-black/70 leading-relaxed">
                Our platform may contain links to third-party websites or services. This Privacy Policy does not apply to those third parties, and we encourage you to review their privacy policies before providing them with any information.
              </p>
            </div>

            <div id="children" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <ArrowRight size={24} /> 08. Children&apos;s Privacy
              </h3>
              <p className="text-black/70 leading-relaxed">
                Sixnity is not intended for use by children under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div id="updates" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <ArrowRight size={24} /> 09. Policy Updates
              </h3>
              <p className="text-black/70 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.
              </p>
            </div>

            <div id="privacy-contact" className="scroll-mt-40">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-sixnity">
                <ArrowRight size={24} /> 10. Contact Information
              </h3>
              <p className="text-black/70 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@sixnity.com.
              </p>
            </div>

            <div className="p-12 bg-black text-white">
              <h3 className="text-2xl mb-6 text-sixnity">Questions about your privacy?</h3>
              <p className="text-white/70 mb-8">Our dedicated data protection team is ready to assist you with any inquiries regarding your personal information.</p>
              <a href="mailto:privacy@sixnity.com" className="inline-flex items-center gap-2 text-sixnity font-black uppercase tracking-tighter hover:text-white transition-colors">
                Contact Privacy Team <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function PrivacyPolicy() {
  return (
    <>
      <Hero />
      <PrivacyContent />
    </>
  );
}

