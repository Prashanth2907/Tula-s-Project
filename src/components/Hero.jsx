import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Compass, 
  Trophy, 
  Trees, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Play, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export function Hero({ onOpenEnquiry, onOpenTour }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const floatingBadges = [
    {
      icon: Trophy,
      title: "#1 Boarding School",
      subtitle: "Dehradun • Education Today",
      color: "border-[#C09D59]/40 bg-[#0B2545]/85 text-[#E5C378]",
      position: "top-24 -left-6 md:-left-10",
      delay: 0.8
    },
    {
      icon: Trees,
      title: "22-Acre Campus",
      subtitle: "Lush Shivalik Foothills",
      color: "border-[#60BAB1]/40 bg-[#0A0F1D]/85 text-[#90CCD0]",
      position: "bottom-24 -right-4 md:-right-8",
      delay: 1.0
    },
    {
      icon: Users,
      title: "6:1 Mentor Ratio",
      subtitle: "Personal Pastoral Care",
      color: "border-[#B90124]/40 bg-[#0B2545]/85 text-white",
      position: "-bottom-6 left-12 md:left-20",
      delay: 1.2
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-[#071629]"
    >
      {/* Background Campus Panorama with Parallax Layering & Overlay Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Cinematic Multi-stop Darkening Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071629] via-[#0B2545]/80 to-[#071629]/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#071629]/50 to-[#071629]" />
        
        {/* Ambient Brand Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B90124]/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#C09D59]/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      </div>

      {/* Decorative Grid Texture */}
      <div className="absolute inset-0 pattern-grid opacity-15 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left pt-4"
          >
            {/* Overline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B90124]/20 border border-[#B90124]/40 text-[#FF8A9E] text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-glow-crimson">
                <Sparkles className="w-3.5 h-3.5 text-[#C09D59]" />
                <span>The Modern Gurukul • Dehradun</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.08]"
            >
              Where Ancient Values Meet{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#C09D59] to-[#D4AF37] font-serif italic">
                Global Futures.
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-4 text-[#B90124] pointer-events-none opacity-90"
                  viewBox="0 0 300 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14C80 3 220 2 297 12"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Tula's International School is India’s premier CBSE co-educational residential school. 
              Nestled across <strong>22 pollution-free acres</strong> in the serene foothills of Dehradun, 
              we cultivate disciplined scholars, champions in <strong>16+ Olympic sports</strong>, and future global pioneers through our personalized <strong>6:1 mentorship</strong>.
            </motion.p>

            {/* Key Assurance Tags */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#60BAB1]" />
                <span>Classes IV to XII (CBSE Co-Ed)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C09D59]" />
                <span>100% University Placement</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B90124]" />
                <span>24/7 On-Campus Medical Care</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenEnquiry}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto font-bold uppercase tracking-wider text-sm shadow-glow-crimson"
              >
                Apply for Admissions 2025-26
              </Button>

              <Button
                variant="gold"
                size="lg"
                onClick={onOpenTour}
                icon={Compass}
                className="w-full sm:w-auto font-bold uppercase tracking-wider text-sm"
              >
                Experience 360° Virtual Tour
              </Button>
            </motion.div>

            {/* Fast Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-white"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#E5C378]">22</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Acre Green Campus</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#60BAB1]">16+</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Olympic Sports</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FF8A9E]">6:1</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Student : Mentor</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Feature with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-[#C09D59]/40 via-white/10 to-[#B90124]/30 shadow-2xl backdrop-blur-sm">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
                  alt="Tulas International School Students Collaborating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-transparent to-black/20" />

                {/* Bottom Card Inside Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#E5C378] uppercase tracking-wider">
                        Class 4 to 12 Boarding
                      </p>
                      <h3 className="text-base font-bold font-heading mt-0.5">
                        Admissions Open 2025-26
                      </h3>
                    </div>
                    <button
                      onClick={onOpenTour}
                      className="w-10 h-10 rounded-full bg-[#B90124] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                      title="Play campus overview video"
                    >
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Accents */}
            {floatingBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: badge.delay }}
                  className={`absolute ${badge.position} hidden sm:flex items-center gap-3 p-3.5 rounded-2xl border backdrop-blur-xl shadow-xl z-20 ${badge.color} animate-float-slow`}
                  style={{ animationDelay: `${idx * 1.5}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-heading text-white">{badge.title}</h4>
                    <p className="text-[10px] text-slate-300 font-medium">{badge.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#F8F5F0] dark:bg-[#0A0F1D] transition-colors duration-300" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
      }} />
    </section>
  );
}
