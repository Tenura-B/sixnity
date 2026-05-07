/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  Activity, 
  BarChart3, 
  Users, 
  Calendar, 
  MessageSquare, 
  Smartphone 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURES = [
  { name: 'Personalized Workouts', icon: Smartphone, desc: 'Tailored training programs built for your unique physiology and goals.' },
  { name: 'Progress Tracking', icon: BarChart3, desc: 'Detailed metrics that visualize your transformation over time.' },
  { name: 'Attendance Monitoring', icon: Calendar, desc: 'Stay accountable with automated check-ins and session logging.' },
  { name: 'Trainer Communication', icon: MessageSquare, desc: 'Direct access to world-class coaching whenever you need guidance.' },
  { name: 'Membership Management', icon: Users, desc: 'Seamless control over your status, billing, and ecosystem access.' },
  { name: 'Performance Analytics', icon: Activity, desc: 'Deep-dive insights into your strength, endurance, and recovery.' },
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
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
        <span className="inline-block text-sixnity text-sm font-black uppercase tracking-[0.3em] mb-6">
          Premium Fitness Ecosystem
        </span>
        <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
          Privacy, Terms <br /> & Member <span className="text-sixnity">Trust</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Everything you need to know about how Sixnity protects your data, manages memberships, and supports your fitness journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/privacy" className="bg-white text-black px-10 py-4 font-black uppercase tracking-tighter hover:bg-sixnity transition-all flex items-center justify-center gap-2">
            Read Privacy Policy <ChevronRight size={18} />
          </Link>
          <Link to="/terms" className="border border-white/20 text-white px-10 py-4 font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all">
            Read Terms
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <div className="accent-line mb-8" />
            <h2 className="text-4xl md:text-6xl mb-6">Built for <br /> the Disciplined</h2>
            <p className="text-sixnity font-black uppercase tracking-widest text-sm italic">Forged in Consistency</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-black/70 leading-relaxed"
          >
            <p>
              Sixnity is a premium fitness ecosystem designed for those who demand more from their training. We combine elite-level coaching, state-of-the-art tracking, and a disciplined community to forge results that last.
            </p>
            <p>
              Our platform isn&apos;t just about workouts; it&apos;s about a lifestyle of performance, consistency, and measurable progress. We provide the tools, the data, and the environment. You provide the will.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 bg-black text-white group hover:translate-y-[-8px] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-sixnity transition-opacity">
                <feature.icon size={64} />
              </div>
              <feature.icon className="text-sixnity mb-6" size={32} />
              <h3 className="text-xl mb-4 group-hover:text-sixnity transition-colors">{feature.name}</h3>
              <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-sixnity group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
    </>
  );
}
