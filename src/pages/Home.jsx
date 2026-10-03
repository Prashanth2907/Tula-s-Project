import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Academics } from '../components/Academics';
import { Facilities } from '../components/Facilities';
import { WhyTIS } from '../components/WhyTIS';
import { Activities } from '../components/Activities';
import { Testimonials } from '../components/Testimonials';
import { AdmissionsCTA } from '../components/AdmissionsCTA';
import { Contact } from '../components/Contact';

export function Home({ onOpenEnquiry, onOpenTour }) {
  return (
    <main>
      {/* Section 2: Hero */}
      <Hero
        onOpenEnquiry={onOpenEnquiry}
        onOpenTour={onOpenTour}
      />

      {/* Section 3: About TIS with Key Statistics & Rankings */}
      <About
        onOpenEnquiry={onOpenEnquiry}
        onOpenTour={onOpenTour}
      />

      {/* Section 4: Academics */}
      <Academics
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Section 5: Campus & Facilities Bento Grid */}
      <Facilities
        onOpenTour={onOpenTour}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Section 6: Why Choose TIS */}
      <WhyTIS
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Section 7: Life at TIS / Activities */}
      <Activities
        onOpenEnquiry={onOpenEnquiry}
        onOpenTour={onOpenTour}
      />

      {/* Section 8: Testimonials */}
      <Testimonials />

      {/* Section 9: Admissions Call-To-Action */}
      <AdmissionsCTA
        onOpenEnquiry={onOpenEnquiry}
        onOpenTour={onOpenTour}
      />

      {/* Section 10: Contact & Verified Location */}
      <Contact />
    </main>
  );
}

export default Home;
