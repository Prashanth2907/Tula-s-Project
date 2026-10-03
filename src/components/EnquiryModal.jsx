import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Phone,
  Mail,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

export function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    boarderType: 'Residential Boarding',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = "Valid 10-digit mobile required";
    if (!formData.grade) errs.grade = "Grade selection required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      grade: '',
      boarderType: 'Residential Boarding',
      city: ''
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Admissions 2025–26 Fast Track Application"
      subtitle="Tula's International School • The Modern Gurukul, Dehradun"
      maxWidth="max-w-xl"
    >
      {isSuccess ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#60BAB1] text-white flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
            Application Received!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
            Dear <strong>{formData.name}</strong>, your application priority token for <strong>{formData.grade}</strong> has been created. Our admissions dean will call <strong>{formData.phone}</strong> today.
          </p>
          <Button
            variant="primary"
            size="sm"
            onClick={resetForm}
            className="text-xs uppercase tracking-wider"
          >
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
              Parent's Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Dr. Sunita Mehra"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30"
            />
            {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                Parent Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="parent@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30"
              />
              {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phone"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit number"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30"
              />
              {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                Grade Applying For *
              </label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30"
              >
                <option value="">Select Grade</option>
                <option value="Class IV">Class IV</option>
                <option value="Class V">Class V</option>
                <option value="Class VI">Class VI</option>
                <option value="Class VII">Class VII</option>
                <option value="Class VIII">Class VIII</option>
                <option value="Class IX">Class IX</option>
                <option value="Class X">Class X</option>
                <option value="Class XI (Science)">Class XI (Science)</option>
                <option value="Class XI (Commerce)">Class XI (Commerce)</option>
                <option value="Class XI (Humanities)">Class XI (Humanities)</option>
                <option value="Class XII">Class XII</option>
              </select>
              {errors.grade && <p className="text-[11px] text-red-500 mt-1">{errors.grade}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                Boarding Preference
              </label>
              <select
                name="boarderType"
                value={formData.boarderType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30"
              >
                <option value="Full Residential Boarding">Full Residential Boarding</option>
                <option value="Day Boarding (Dehradun Region)">Day Boarding</option>
                <option value="Weekly Boarding">Weekly Boarding</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
              Current Residence City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. New Delhi, Dubai, Mumbai, Dehradun"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full font-bold uppercase tracking-wider text-xs sm:text-sm shadow-glow-crimson"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Fast-Track Application"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
