import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Monitor, 
  FlaskConical, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import { Modal } from './ui/Modal';
import { academicLevels, academicHighlights } from '../data/academicsData';

export function Academics({ onOpenEnquiry }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section id="academics" className="py-20 md:py-28 relative bg-white dark:bg-[#071629] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Academic Offerings"
          badgeIcon={GraduationCap}
          badgeVariant="crimson"
          title="Curated Pathways of"
          highlight="Intellectual Discovery"
          subtitle="From foundational wonder in Primary School to rigorous competitive preparation in Senior Secondary, Tula's CBSE-affiliated curriculum nurtures academic mastery and critical intellect."
        />

        {/* Academic Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {academicLevels.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <Card 
                className="w-full flex flex-col justify-between group hover:border-[#B90124]/50 dark:hover:border-[#E5C378]/50"
                hoverEffect={true}
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                        {program.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-xs font-semibold text-[#E5C378] uppercase tracking-wider block">
                        {program.grades}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-xs font-bold text-[#B90124] dark:text-[#E5C378] uppercase tracking-wide mb-2">
                      {program.tagline}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {program.description}
                    </p>

                    {/* Features snapshot */}
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      {program.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#60BAB1] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProgram(program)}
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full text-xs font-bold uppercase tracking-wider group-hover:bg-[#B90124] group-hover:text-white group-hover:border-[#B90124]"
                  >
                    Curriculum Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Academic Pillars Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#F8F5F0] dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
          {academicHighlights.map((pillar) => (
            <div key={pillar.title} className="flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#B90124]/10 dark:bg-[#B90124]/20 flex items-center justify-center text-[#B90124] dark:text-[#FF8A9E] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold font-heading text-[#0B2545] dark:text-white">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      <Modal
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        title={selectedProgram?.title}
        subtitle={`${selectedProgram?.grades} • Central Board of Secondary Education (CBSE)`}
        maxWidth="max-w-2xl"
      >
        {selectedProgram && (
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden aspect-video">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="text-lg font-bold font-heading text-[#0B2545] dark:text-white">
                {selectedProgram.tagline}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#C09D59] mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                Key Academic Distinctives
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProgram.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#60BAB1] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B2545]/5 dark:bg-white/5 text-xs text-slate-600 dark:text-slate-400">
              <strong>Curriculum Affiliation:</strong> {selectedProgram.curriculum}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenEnquiry();
                }}
                className="w-full text-xs font-bold uppercase tracking-wider"
              >
                Apply for {selectedProgram.title}
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => setSelectedProgram(null)}
                className="w-full text-xs font-bold"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
}
