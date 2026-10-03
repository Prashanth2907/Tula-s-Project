import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Compass, 
  ExternalLink,
  Heart,
  Shield,
  FileText
} from 'lucide-react';
import { Button } from './ui/Button';

export function Footer({ onOpenTour, onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About TIS', href: '#about' },
    { name: 'Academics & Wings', href: '#academics' },
    { name: '16+ Olympic Sports', href: '#facilities' },
    { name: 'Why Choose TIS', href: '#why-tis' },
    { name: 'Student Life & Activities', href: '#activities' },
    { name: 'Parent Testimonials', href: '#testimonials' },
    { name: 'Admissions 2025-26', href: '#contact' },
  ];

  const mandatoryLinks = [
    { name: 'CBSE Mandatory Public Disclosure', href: 'https://tis.edu.in/mandatory-disclosure/' },
    { name: 'Child Welfare & Safety Policy', href: 'https://tis.edu.in/' },
    { name: 'Anti-Ragging & Disciplinary Policy', href: 'https://tis.edu.in/' },
    { name: 'Fee Structure & Scholarships', href: '#contact' },
    { name: 'School Academic Calendar 2025', href: 'https://tis.edu.in/' },
    { name: 'Fedena Parent ERP Portal', href: 'https://tis.fedena.com/' },
  ];

  return (
    <footer className="bg-[#071629] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative Brand Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] p-0.5 border border-[#C09D59]/50 flex items-center justify-center">
                <span className="font-serif font-black text-xl text-[#C09D59]">TIS</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white block leading-none">
                  TULA'S
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C09D59] uppercase block mt-0.5">
                  International School
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Known as <em>"The Modern Gurukul"</em>, Tula’s International School is a premier CBSE co-ed boarding school in Dehradun, combining ancient Vedic virtues with 21st-century international education across 22 pollution-free acres.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenEnquiry}
                className="text-xs font-bold uppercase tracking-wider"
              >
                Apply Online
              </Button>
              <Button
                variant="gold"
                size="sm"
                onClick={onOpenTour}
                className="text-xs font-bold uppercase tracking-wider"
                icon={Compass}
              >
                Virtual Tour
              </Button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C09D59]">
              Explore Campus
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-500">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mandatory Disclosures & Portals */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C09D59]">
              Policies & Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {mandatoryLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-500">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C09D59]">
              Dehradun Campus
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#60BAB1] shrink-0 mt-0.5" />
                <span>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C09D59] shrink-0" />
                <a href="tel:+919837983791" className="hover:text-white font-bold">+91-9837983791</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B90124] shrink-0" />
                <a href="mailto:info@tis.edu.in" className="hover:text-white">info@tis.edu.in</a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {[
                  { name: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/" },
                  { name: "Instagram", href: "https://www.instagram.com/tulasinternationalschool/" },
                  { name: "YouTube", href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/school/tulas-international-school/" }
                ].map(soc => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#B90124] text-white flex items-center justify-center text-xs font-bold transition-colors"
                    title={soc.name}
                  >
                    {soc.name[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Tula's International School, Dehradun. All Rights Reserved. Affiliated to CBSE, New Delhi.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#E5C378] hover:underline cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
