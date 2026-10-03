import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Eye, 
  MapPin, 
  Maximize2, 
  Sparkles, 
  RotateCw,
  Trophy,
  BookOpen,
  Home,
  X
} from 'lucide-react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

export function VirtualTourModal({ isOpen, onClose, onOpenEnquiry }) {
  const hotspots = [
    {
      id: "academic",
      title: "Main Heritage Academic Block",
      tagline: "Smart Classrooms & Central Plaza",
      description: "Air-conditioned smart lecture rooms, digital collaboration pods, and peaceful manicured courtyards in the Shivalik foothills.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
      type: "Academic"
    },
    {
      id: "shooting",
      title: "10m Air Rifle Shooting Range",
      tagline: "Olympic Electronic Targets",
      description: "Equipped with Swiss electronic scoring targets where TIS scholars train under international medalists to compete nationwide.",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1200&q=85",
      type: "Sports"
    },
    {
      id: "equestrian",
      title: "Equestrian & Horse Riding Paddock",
      tagline: "Licensed Equitation Academy",
      description: "Dedicated horses, sand paddock, and show-jumping obstacles teaching balance, empathy, and courage.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
      type: "Sports"
    },
    {
      id: "swimming",
      title: "All-Weather Heated Swimming Pool",
      tagline: "Olympic Half-Size Complex",
      description: "Deep-filtered pristine waters with dedicated lap lanes and certified lifeguards for year-round endurance training.",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85",
      type: "Sports"
    },
    {
      id: "hostel",
      title: "Residential Boarding & Common Lounge",
      tagline: "Home Away From Home",
      description: "Comfortable air-conditioned rooms, individual study nooks, recreational games room, and 24/7 resident houseparent care.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=85",
      type: "Hostel"
    },
    {
      id: "library",
      title: "Central Knowledge Center & Library",
      tagline: "20,000+ Volumes & Quiet Carrels",
      description: "Rich literature, scientific journals, research databases, and serene reading spaces overlooking the hills.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85",
      type: "Academic"
    }
  ];

  const [activeSpot, setActiveSpot] = useState(hotspots[0]);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="360° Virtual Campus Experience"
      subtitle="Explore Tula's International School's 22-Acre Dehradun Campus"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        
        {/* Hotspot Viewport */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-xl bg-black border border-slate-700">
          <motion.img
            key={activeSpot.id}
            src={activeSpot.image}
            alt={activeSpot.title}
            initial={{ opacity: 0.4, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`w-full h-full object-cover transition-transform duration-1000 ${isRotating ? 'scale-110' : ''}`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Interactive 360 Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-[#B90124] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <Compass className="w-3.5 h-3.5 animate-spin" />
              <span>Interactive View</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20">
              {activeSpot.type}
            </span>
          </div>

          {/* Simulate 360 Pan Trigger */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>{isRotating ? 'Pause Pan' : 'Auto Pan 360°'}</span>
          </button>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs text-[#E5C378] font-bold uppercase tracking-wider block">
              {activeSpot.tagline}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              {activeSpot.title}
            </h3>
            <p className="text-xs text-slate-200 mt-1 max-w-xl line-clamp-2">
              {activeSpot.description}
            </p>
          </div>
        </div>

        {/* Hotspots Selector Carousel */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
            Select Campus Zone ({hotspots.length} Available Locations)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {hotspots.map((spot) => {
              const isSelected = activeSpot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(spot)}
                  className={`p-2 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'border-[#B90124] bg-[#B90124]/10 dark:bg-[#B90124]/20 shadow-md ring-2 ring-[#B90124]/30'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-900'
                  }`}
                >
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-12 object-cover rounded-lg mb-1.5"
                  />
                  <p className="text-[11px] font-bold text-slate-800 dark:text-white truncate">
                    {spot.title}
                  </p>
                  <span className="text-[9px] text-[#B90124] dark:text-[#E5C378] font-semibold">
                    {spot.type}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            Want to see our 22-acre campus in real life? Book a personalized walking tour with our Housemasters.
          </p>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider"
            >
              Book In-Person Visit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-xs font-bold"
            >
              Close
            </Button>
          </div>
        </div>

      </div>
    </Modal>
  );
}
