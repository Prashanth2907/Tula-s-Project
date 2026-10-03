import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Academics } from './components/Academics';
import { Facilities } from './components/Facilities';
import { WhyTIS } from './components/WhyTIS';
import { Activities } from './components/Activities';
import { Testimonials } from './components/Testimonials';
import { AdmissionsCTA } from './components/AdmissionsCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { VirtualTourModal } from './components/VirtualTourModal';
import { EnquiryModal } from './components/EnquiryModal';
import { useTheme } from './hooks/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5F0] dark:bg-[#0A0F1D] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-[#B90124] selection:text-white">
      {/* Advanced Feature 1: Custom Interactive Cursor */}
      <CustomCursor />

      {/* Advanced Feature 4: Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Sticky Navigation Bar with Theme Switcher (Advanced Feature 3) */}
      <Navbar
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Flow */}
      <main>
        {/* Section 2: Hero */}
        <Hero
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* Section 3: About TIS with Key Statistics & Rankings */}
        <About
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* Section 4: Academics */}
        <Academics
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Section 5: Campus & Facilities Bento Grid */}
        <Facilities
          onOpenTour={() => setIsTourOpen(true)}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Section 6: Why Choose TIS */}
        <WhyTIS
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Section 7: Life at TIS / Activities */}
        <Activities
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* Section 8: Testimonials */}
        <Testimonials />

        {/* Section 9: Admissions Call-To-Action */}
        <AdmissionsCTA
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenTour={() => setIsTourOpen(true)}
        />

        {/* Section 10: Contact & Verified Location */}
        <Contact />
      </main>

      {/* Section 11: Complete Responsive Footer */}
      <Footer
        onOpenTour={() => setIsTourOpen(true)}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* Interactive Modals */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}

export default App;
