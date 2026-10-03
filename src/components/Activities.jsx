import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Trophy, 
  Music, 
  Palette, 
  Flame, 
  Calendar, 
  Layers, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { activitiesData, activityCategories } from '../data/activitiesData';

export function Activities({ onOpenEnquiry, onOpenTour }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredActivities = activeCategory === "All"
    ? activitiesData
    : activitiesData.filter(item => item.category === activeCategory);

  return (
    <section id="activities" className="py-20 md:py-28 relative bg-[#F8F5F0] dark:bg-[#0A0F1D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Life at TIS & Co-Curriculars"
          badgeIcon={Flame}
          badgeVariant="teal"
          title="Beyond Textbooks: A Vibrant"
          highlight="Tapestry of Student Life"
          subtitle="Education at Tula's is an exhilarating journey of discovery. With 16+ sports disciplines, world-class performing arts, robotics, and annual Himalayan treks, every day brings new joy."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {activityCategories.map((cat) => {
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

        {/* Dynamic Masonry-like Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredActivities.map((act) => (
              <motion.div
                layout
                key={act.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group"
              >
                <div className="h-full rounded-3xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-card-soft hover:shadow-card-hover hover:border-[#C09D59]/50 transition-all duration-500 flex flex-col justify-between">
                  
                  {/* Image container */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#0B2545]/85 backdrop-blur-md text-[11px] font-bold text-[#E5C378] border border-[#C09D59]/30">
                        {act.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold font-heading text-white">
                        {act.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body description & tags */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {act.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {act.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 16+ Sports Highlight Ticker / Bar */}
        <div className="mt-16 p-6 rounded-3xl bg-[#0B2545] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C09D59]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B90124] flex items-center justify-center text-white shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-heading text-white">
                16+ Olympic & Modern Sports Facilities
              </h4>
              <p className="text-xs text-slate-300">
                Shooting Range • Horse Riding • Swimming • Squash • Archery • Tennis • Football • Cricket & more
              </p>
            </div>
          </div>

          <Button
            variant="gold"
            size="sm"
            onClick={onOpenTour}
            className="shrink-0 text-xs font-bold uppercase tracking-wider"
            icon={Compass}
          >
            Explore Sports Complex
          </Button>
        </div>

      </div>
    </section>
  );
}
