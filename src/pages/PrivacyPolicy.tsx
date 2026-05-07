/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Activity, 
  Globe, 
  Lock, 
  ArrowRight 
} from 'lucide-react';

const PrivacySection = () => {
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
    <section id="privacy" className="py-24 bg-white text-black min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Nav */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-40">
              <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-8">Privacy Contents</h4>
              <nav className="space-y-4">
                {sections.map(s => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`}
                    className={`block text-sm font-bold transition-all ${activeSection === s.id ? 'text-sixnity translate-x-2' : 'text-black/40 hover:text-black hover:translate-x-1'}`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:w-3/4 space-y-24">
            <header className="mb-12">
              <h2 className="text-4xl md:text-5xl mb-6 text-black">Privacy Policy</h2>
              <p className="text-black/50 max-w-2xl italic">Last updated: May 7, 2026</p>
            </header>

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
  return <PrivacySection />;
}
