import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  GraduationCap, 
  Sparkles,
  Compass
} from 'lucide-react';
import { Button } from './ui/Button';
import { ThemeToggle } from './common/ThemeToggle';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function Navbar({ onOpenEnquiry, onOpenTour, theme, toggleTheme }) {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About TIS', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Campus & Facilities', href: '#facilities' },
    { name: 'Why TIS', href: '#why-tis' },
    { name: 'Life at TIS', href: '#activities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Admissions Helpline Bar */}
      <div className={`w-full bg-[#0B2545] text-white/90 text-xs py-2 px-4 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'hidden md:block py-1.5' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            <a 
              href="tel:+919837983791" 
              className="flex items-center gap-1.5 hover:text-[#C09D59] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C09D59]" />
              <span>Admissions Helpline: <strong>+91-9837983791</strong></span>
            </a>
            <a 
              href="mailto:info@tis.edu.in" 
              className="hidden lg:flex items-center gap-1.5 hover:text-[#C09D59] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#C09D59]" />
              <span>info@tis.edu.in</span>
            </a>
            <div className="hidden xl:flex items-center gap-1.5 text-white/70 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#60BAB1]" />
              <span>Dhoolkot, Chakrata Road, Dehradun</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#B90124] text-[10px] font-bold tracking-wider uppercase text-white animate-pulse">
              Admissions 2025-26 Open
            </span>
            <button
              onClick={onOpenTour}
              className="hidden md:flex items-center gap-1 text-[11px] text-[#C09D59] hover:underline font-semibold cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>360° Virtual Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#0A0F1D]/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-slate-200/50 dark:border-slate-800/80 py-3' 
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* TIS Crest & Brand Identity */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Tula's International School Homepage"
          >
            {/* Crest Emblem */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#B90124] to-[#0B2545] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-[#0B2545] rounded-[10px] flex items-center justify-center border border-[#C09D59]/40">
                <span className="font-serif font-black text-lg sm:text-xl text-[#C09D59] tracking-tighter">
                  TIS
                </span>
              </div>
            </div>

            {/* School Text */}
            <div className="flex flex-col">
              <span className={`font-heading font-extrabold text-lg sm:text-xl leading-none tracking-tight ${
                isScrolled ? 'text-[#0B2545] dark:text-white' : 'text-white'
              }`}>
                TULA'S
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#C09D59] uppercase leading-tight mt-0.5">
                International School
              </span>
              <span className="hidden sm:inline-block text-[9px] font-serif italic text-[#60BAB1] tracking-wider leading-none">
                The Modern Gurukul • Dehradun
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 tracking-wide cursor-pointer ${
                    isActive 
                      ? 'text-[#B90124] dark:text-[#E5C378]' 
                      : isScrolled
                        ? 'text-slate-700 dark:text-slate-200 hover:text-[#B90124] dark:hover:text-[#E5C378]'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#B90124] dark:bg-[#C09D59] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenEnquiry}
              className="text-xs font-bold uppercase tracking-wider shadow-glow-crimson"
              icon={ArrowRight}
              iconPosition="right"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="sm:hidden" />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled 
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white' 
                  : 'bg-white/20 text-white backdrop-blur-sm'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-[#0A0F1D]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-[#C09D59] uppercase tracking-wider">
                  Menu & Portals
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#B90124]/10 text-[#B90124] font-semibold">
                  Classes IV – XII
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#B90124] transition-all"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full text-sm font-bold uppercase tracking-wider"
                >
                  Enquire & Apply Online
                </Button>
                
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTour();
                  }}
                  className="w-full text-sm font-bold uppercase tracking-wider"
                  icon={Compass}
                >
                  Explore 360° Virtual Tour
                </Button>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                Admissions Helpline: <a href="tel:+919837983791" className="text-[#B90124] font-bold">+91-9837983791</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
