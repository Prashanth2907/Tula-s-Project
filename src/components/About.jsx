import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Trees, 
  Trophy, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  Globe, 
  ArrowRight, 
  Award,
  Compass
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { keyStats, rankingAwards, dignitaries } from '../data/statsData';

export function About({ onOpenEnquiry, onOpenTour }) {
  const iconMap = {
    Trees,
    Trophy,
    Users,
    ShieldCheck,
    GraduationCap,
    Globe
  };

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-[#F8F5F0] dark:bg-[#0A0F1D] transition-colors duration-300">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C09D59]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#B90124]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Heritage & Philosophy"
          badgeIcon={Sparkles}
          title="The Modern Gurukul Where"
          highlight="Character Precedes Career"
          subtitle="Established in 2012 under the aegis of the Rishabh Educational Trust, Tula's International School harmonizes sacred Vedic wisdom and mindful self-discipline with world-class 21st-century academics."
        />

        {/* Philosophy Story & Campus Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Collage */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] border border-slate-200/80 dark:border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                    alt="Tulas International School Campus Aerial View"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 rounded-3xl bg-[#0B2545] text-white shadow-lg border border-[#C09D59]/30">
                  <Badge variant="gold" size="sm" className="mb-2">Pollution-Free Sanctuary</Badge>
                  <p className="text-xl font-bold font-heading">22 Lush Acres</p>
                  <p className="text-xs text-slate-300 mt-1">Nestled at the feet of the Shivalik Mountain range, Dehradun.</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] shadow-lg border border-slate-200 dark:border-slate-800">
                  <span className="text-3xl font-extrabold text-[#B90124] font-heading">#1</span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">Boarding School in Dehradun</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ranked by Education Today & Outlook Survey</p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] border border-slate-200/80 dark:border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
                    alt="Holistic Student Mentorship at TIS"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#B90124] text-white px-6 py-2.5 rounded-full shadow-glow-crimson font-bold text-xs uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
              <Award className="w-4 h-4 text-[#C09D59]" />
              <span>14+ Years of Educational Glory</span>
            </div>
          </motion.div>

          {/* Right Column: The Philosophy Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white">
                “When you choose a school that chooses you, it becomes more than a place to learn — it becomes where you belong.”
              </h3>
              
              <p>
                At Tula's International School, we believe every child is born with unique genius waiting to be ignited. 
                Under the historic canopy of Dehradun’s legendary educational tradition, TIS represents the evolution of 
                the ancient <em>Guru-Shishya parampara</em> into a progressive, internationally-minded boarding academy.
              </p>

              <p>
                Here, students don’t merely memorize textbooks. They rise at dawn for pranayama and equestrian training, 
                conduct AI and robotics research in state-of-the-art laboratories, compete on national archery and shooting ranges, 
                and receive empathetic, round-the-clock guidance from our dedicated residential faculty.
              </p>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h5 className="font-bold text-[#0B2545] dark:text-white text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B90124]" />
                  Holistic Mind & Body
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Daily meditation, yoga, healthy vegetarian nutrition, and 16+ sports disciplines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h5 className="font-bold text-[#0B2545] dark:text-white text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C09D59]" />
                  Global University Prep
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  100% college placements with integrated JEE, NEET, CLAT, CUET, and SAT mentoring.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenEnquiry}
                icon={ArrowRight}
                iconPosition="right"
              >
                Plan a Campus Visit
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={onOpenTour}
                icon={Compass}
              >
                Virtual Campus Tour
              </Button>
            </div>
          </motion.div>

        </div>

        {/* Scroll-Triggered Key Statistics Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Badge variant="teal" size="sm" className="mb-2">Verified Campus Metrics</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white">
              TIS by the Numbers
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyStats.map((stat, idx) => {
              const IconComp = iconMap[stat.icon] || Trophy;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800/80 shadow-card-soft hover:shadow-card-hover hover:border-[#C09D59]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B2545]/5 dark:bg-white/5 flex items-center justify-center text-[#B90124] dark:text-[#E5C378] group-hover:bg-[#B90124] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#60BAB1] uppercase tracking-wider bg-[#60BAB1]/10 px-2.5 py-1 rounded-full">
                      {stat.highlight}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0B2545] dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-2xl font-bold text-[#B90124] dark:text-[#E5C378]">
                      {stat.suffix}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-slate-800 dark:text-slate-100 mt-2">
                    {stat.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* National Rankings & Honors Showcase */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0B2545] to-[#071629] text-white shadow-2xl border border-[#C09D59]/30 relative overflow-hidden mb-20">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
              <div>
                <Badge variant="gold" size="sm" className="mb-2">Accolades & Recognition</Badge>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
                  Consistently Ranked Among India's Finest
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Independent educational juries and parental surveys continuously recognize Tula's for exemplary infrastructure, athletic facilities, and holistic character building.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {rankingAwards.map((item, index) => (
                <motion.div
                  key={item.source + item.scope}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="font-serif font-black text-3xl sm:text-4xl text-[#E5C378] tracking-tight">
                    {item.rank}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white mt-1">
                    {item.scope}
                  </span>
                  <span className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-[#60BAB1] uppercase font-bold tracking-wider mt-2 bg-[#60BAB1]/10 px-2 py-0.5 rounded-full">
                    {item.source}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Esteemed Personalities on Campus */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="crimson" size="sm" className="mb-2">Inspiring Role Models</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B2545] dark:text-white">
              Influential Dignitaries on Campus
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              From Olympic medalists to Union Education Ministers, world champions and national leaders frequently visit TIS to mentor and inspire our young scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dignitaries.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border-2 border-[#C09D59]/30"
                />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B90124] dark:text-[#E5C378]">
                    {person.category}
                  </span>
                  <h4 className="text-sm font-bold font-heading text-[#0B2545] dark:text-white truncate">
                    {person.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium truncate">
                    {person.title}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1">
                    {person.accolades}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
