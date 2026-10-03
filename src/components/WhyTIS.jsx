import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  HeartHandshake, 
  GraduationCap, 
  Target,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export function WhyTIS({ onOpenEnquiry }) {
  const pillars = [
    {
      icon: Sparkles,
      title: "The Modern Gurukul Ethos",
      tag: "Vedic Wisdom & Modern Mind",
      description: "Rooted in India's timeless Guru-Shishya tradition where values of humility, self-mastery, and spiritual calm form the bedrock for cutting-edge 21st-century problem solving.",
      color: "from-amber-500/10 to-orange-500/5",
      accent: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: Users,
      title: "Unmatched 6:1 Mentorship",
      tag: "Deep Personalized Attention",
      description: "With only six students per faculty mentor, no child is ever overlooked. Daily academic diagnostic checks, customized remedial clinics, and residential pastoral care.",
      color: "from-blue-500/10 to-indigo-500/5",
      accent: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Trophy,
      title: "16+ Olympic Sports Academy",
      tag: "Discipline, Stamina & Joy",
      description: "From certified horse riding (equestrian) and a 10m electronic air rifle range to Olympic-dimension swimming, archery, squash, and lawn tennis under NIS-certified masters.",
      color: "from-rose-500/10 to-red-500/5",
      accent: "text-[#B90124] dark:text-[#FF8A9E]"
    },
    {
      icon: GraduationCap,
      title: "Integrated Competitive Coaching",
      tag: "IIT-JEE • NEET • CLAT • SAT",
      description: "Rigorous CBSE schooling synchronized with expert in-house preparatory tracks for premier engineering, medical, law, and Ivy League overseas admissions.",
      color: "from-emerald-500/10 to-teal-500/5",
      accent: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: ShieldCheck,
      title: "22-Acre Safe Green Sanctuary",
      tag: "Lush Shivalik Foothills",
      description: "Nestled in Dehradun’s clean, oxygen-rich mountain breezes. 24/7 CCTV vigilance, biometric dorm access, resident doctors, and an organic farm-to-table dining kitchen.",
      color: "from-teal-500/10 to-cyan-500/5",
      accent: "text-teal-600 dark:text-teal-400"
    },
    {
      icon: HeartHandshake,
      title: "Global Leadership & IAYP",
      tag: "Duke of Edinburgh's Award",
      description: "International student exchanges, Model United Nations, community rural service, and Duke of Edinburgh award programs that prepare students for leadership on world stages.",
      color: "from-purple-500/10 to-violet-500/5",
      accent: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section id="why-tis" className="py-20 md:py-28 relative bg-white dark:bg-[#071629] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Distinctive Advantage"
          badgeIcon={Target}
          title="Why Choose"
          highlight="Tula's International School"
          subtitle="Choosing the right boarding school is an investment in your child's character, resilience, and lifelong destiny. Here is what sets TIS apart as North India's premier co-educational institution."
        />

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-8 rounded-3xl bg-[#F8F5F0] dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-card-hover hover:border-[#C09D59]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#B90124] dark:text-[#E5C378] group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-wider block mb-1.5 ${pillar.accent}`}>
                    {pillar.tag}
                  </span>

                  <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-[#B90124] dark:group-hover:text-[#E5C378] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#60BAB1]" />
                  <span>Standard of Excellence</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#B90124] via-[#9E001E] to-[#820018] text-white shadow-glow-crimson flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#E5C378] bg-black/25 px-3 py-1 rounded-full">
              Admission Session 2025-26
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading">
              Secure Your Child's Place at Dehradun's #1 Boarding School
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Limited seats available across Classes IV through XII to preserve our rigorous 6:1 mentorship standard. Early registrations receive preferential hostel allotment.
            </p>
          </div>

          <Button
            variant="gold"
            size="lg"
            onClick={onOpenEnquiry}
            className="shrink-0 font-bold uppercase tracking-wider text-xs sm:text-sm"
            icon={ArrowRight}
            iconPosition="right"
          >
            Start Admission Process
          </Button>
        </div>

      </div>
    </section>
  );
}
