import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Compass, 
  PhoneCall 
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export function AdmissionsCTA({ onOpenEnquiry, onOpenTour }) {
  const steps = [
    { num: "01", title: "Online Enquiry / Registration", desc: "Submit the quick applicant details form" },
    { num: "02", title: "Campus Interaction & Tour", desc: "Visit our 22-acre Dehradun campus or video meet" },
    { num: "03", title: "Aptitude Assessment", desc: "Age-appropriate diagnostic evaluation" },
    { num: "04", title: "Offer & House Allotment", desc: "Confirmed admission & boarding enrollment" }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-white to-[#F8F5F0] dark:from-[#071629] dark:to-[#0A0F1D] transition-colors duration-300 overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#B90124]/15 via-[#C09D59]/15 to-[#60BAB1]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Regal CTA Box */}
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#0B2545] via-[#0D2E55] to-[#071629] text-white shadow-2xl border-2 border-[#C09D59]/50 overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />
          
          {/* Accent Gold Corner Borders */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C09D59]" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#C09D59]" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#C09D59]" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C09D59]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-[#B90124] text-white text-xs font-bold uppercase tracking-widest shadow-glow-crimson flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>Admissions Open for Session 2025 – 2026</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight"
            >
              Begin Your Child’s Journey at{' '}
              <span className="font-serif italic text-[#E5C378]">
                Tula's International School
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              Classes IV through XII (CBSE Co-Educational Boarding). Limited enrollment batches preserved to ensure our rigorous 6:1 student-to-mentor standard.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                variant="primary"
                size="xl"
                onClick={onOpenEnquiry}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto font-bold uppercase tracking-wider text-sm shadow-glow-crimson"
              >
                Apply Online Now
              </Button>

              <Button
                variant="gold"
                size="xl"
                onClick={onOpenEnquiry}
                icon={Calendar}
                className="w-full sm:w-auto font-bold uppercase tracking-wider text-sm"
              >
                Schedule Campus Visit
              </Button>

              <Button
                variant="outlineWhite"
                size="xl"
                onClick={onOpenTour}
                icon={Compass}
                className="w-full sm:w-auto font-bold uppercase tracking-wider text-sm"
              >
                360° Virtual Tour
              </Button>
            </motion.div>

            {/* Helpline Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-300">
              <PhoneCall className="w-4 h-4 text-[#60BAB1]" />
              <span>Direct Admissions Counselor:</span>
              <a href="tel:+919837983791" className="font-bold text-white hover:text-[#E5C378] underline">
                +91-9837983791
              </a>
              <span className="hidden sm:inline">• 7 Days a Week (9:00 AM – 7:00 PM)</span>
            </div>

          </div>

          {/* 4-Step Admission Pathway Row */}
          <div className="mt-14 pt-12 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {steps.map((st) => (
              <div key={st.num} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xl font-black font-serif text-[#C09D59]">
                  {st.num}
                </span>
                <h4 className="text-sm font-bold font-heading text-white mt-1">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
