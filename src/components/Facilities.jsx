import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Trophy, 
  Monitor, 
  FlaskConical, 
  BookOpen, 
  Home, 
  Utensils, 
  Music, 
  HeartPulse, 
  Sparkles,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Modal } from './ui/Modal';
import { facilities, facilityCategories } from '../data/facilitiesData';

export function Facilities({ onOpenTour, onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFacility, setSelectedFacility] = useState(null);

  const filteredFacilities = activeCategory === "All" 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  const iconMap = {
    Trophy,
    Monitor,
    FlaskConical,
    BookOpen,
    Home,
    Utensils,
    Music,
    HeartPulse
  };

  return (
    <section id="facilities" className="py-20 md:py-28 relative bg-[#F8F5F0] dark:bg-[#0A0F1D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Campus & Infrastructure"
          badgeIcon={Building2}
          title="World-Class Sanctuaries for"
          highlight="Living & Learning"
          subtitle="Spread across 22 unpolluted acres in the Shivalik foothills, Tula's provides Olympic sports arenas, smart classrooms, research laboratories, and safe residential boarding houses."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {facilityCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#B90124] text-white shadow-glow-crimson scale-105'
                    : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredFacilities.map((fac, idx) => {
              const IconComp = iconMap[fac.icon] || Building2;
              const isLarge = fac.featured && (idx === 0 || idx === 4);

              return (
                <motion.div
                  layout
                  key={fac.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`${isLarge ? 'md:col-span-2' : 'col-span-1'} group`}
                >
                  <div className="h-full rounded-3xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-card-soft hover:shadow-card-hover hover:border-[#C09D59]/50 transition-all duration-500 flex flex-col justify-between relative">
                    
                    {/* Visual Aspect Container */}
                    <div className={`relative w-full ${isLarge ? 'h-64 sm:h-80' : 'h-52'} overflow-hidden`}>
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#0B2545]/80 backdrop-blur-md text-[11px] font-bold text-[#E5C378] border border-[#C09D59]/30">
                          {fac.category}
                        </span>
                        {fac.featured && (
                          <span className="px-3 py-1 rounded-full bg-[#B90124]/90 backdrop-blur-md text-[11px] font-bold text-white shadow-sm">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Expand Button */}
                      <button
                        onClick={() => setSelectedFacility(fac)}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0B2545] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                        title="View facility details"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      {/* Overlay Title on Image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-[#60BAB1] text-xs font-semibold uppercase tracking-wider mb-1">
                          <IconComp className="w-3.5 h-3.5" />
                          <span>{fac.tagline}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                          {fac.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content & Specifications */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        {fac.description}
                      </p>

                      {/* Specs Tags */}
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex flex-wrap gap-1.5">
                          {fac.specs.map(spec => (
                            <span 
                              key={spec} 
                              className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                            >
                              • {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <div className="mt-5 pt-3 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedFacility(fac)}
                          className="text-xs font-bold text-[#B90124] dark:text-[#E5C378] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Explore Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={onOpenTour}
                          className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        >
                          View in 360° Tour
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 360 Virtual Tour Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0B2545] via-[#133E87] to-[#0B2545] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C09D59]/30">
          <div>
            <Badge variant="gold" size="sm" className="mb-2">Virtual Immersion</Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Can't Visit Dehradun in Person?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Take an interactive 360-degree tour of our Olympic sports facilities, boarding hostels, classrooms, and lush Dehradun grounds right from your device.
            </p>
          </div>
          <Button
            variant="gold"
            size="lg"
            onClick={onOpenTour}
            className="shrink-0 font-bold uppercase tracking-wider text-xs sm:text-sm"
          >
            Launch 360° Virtual Tour
          </Button>
        </div>

      </div>

      {/* Facility Inspection Modal */}
      <Modal
        isOpen={!!selectedFacility}
        onClose={() => setSelectedFacility(null)}
        title={selectedFacility?.title}
        subtitle={`${selectedFacility?.category} Infrastructure • Tulas International School`}
        maxWidth="max-w-2xl"
      >
        {selectedFacility && (
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-bold text-[#C09D59] uppercase tracking-wider block mb-1">
                {selectedFacility.tagline}
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedFacility.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] dark:text-white mb-3">
                Key Technical & Architectural Specifications
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedFacility.specs.map(spec => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B90124]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedFacility(null);
                  onOpenEnquiry();
                }}
                className="w-full text-xs font-bold uppercase tracking-wider"
              >
                Schedule In-Person Inspection
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setSelectedFacility(null);
                  onOpenTour();
                }}
                className="w-full text-xs font-bold"
              >
                View 360° Walkthrough
              </Button>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
}
