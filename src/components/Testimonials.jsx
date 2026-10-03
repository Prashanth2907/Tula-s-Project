import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquareHeart, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { testimonials, googleReviewsSummary } from '../data/testimonialsData';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-white dark:bg-[#071629] transition-colors duration-300 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C09D59]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#B90124]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Voices of Trust"
          badgeIcon={MessageSquareHeart}
          badgeVariant="crimson"
          title="What Parents & Scholars Say About"
          highlight="The TIS Journey"
          subtitle="Real testimonials from parents across India whose children have blossomed in confidence, academics, and character at Tula's International School."
        />

        {/* Google Reviews Summary Header Badge */}
        <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-[#F8F5F0] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center font-bold text-amber-500">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-800 dark:text-white ml-1">
                  {googleReviewsSummary.rating} / 5.0
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Based on {googleReviewsSummary.totalReviews} verified parental reviews
              </p>
            </div>
          </div>

          <span className="text-[10px] font-bold text-[#60BAB1] uppercase tracking-wider bg-[#60BAB1]/10 px-2.5 py-1 rounded-full">
            Top Rated
          </span>
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0B2545] to-[#071629] text-white shadow-2xl border border-[#C09D59]/30 overflow-hidden">
            
            {/* Ambient Watermark Quote Icon */}
            <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-white/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 space-y-6"
              >
                {/* Rating & Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#E5C378] text-[#E5C378]" />
                    ))}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#C09D59] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    {current.badge}
                  </span>
                </div>

                {/* Quote Paragraph */}
                <blockquote className="text-base sm:text-xl md:text-2xl font-serif italic text-white/95 leading-relaxed">
                  "{current.quote}"
                </blockquote>

                {/* Parent Profile */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#C09D59]"
                    />
                    <div>
                      <h4 className="text-lg font-bold font-heading text-white">
                        {current.name}
                      </h4>
                      <p className="text-xs text-[#E5C378] font-medium">
                        {current.role} • <span className="text-slate-300">{current.relation}</span>
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {current.city}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B90124] text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B90124] text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-8 bg-[#B90124]' 
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
