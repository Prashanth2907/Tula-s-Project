import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
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

      {/* Main Homepage Routed/Rendered from pages/Home.jsx */}
      <Home
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
      />

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
