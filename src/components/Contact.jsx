import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    state: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // OTP Simulation State
  const [otpSent, setOtpSent] = useState(false);
  const [otpVal, setOtpVal] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Mobile phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.grade) {
      errs.grade = "Please select the Grade/Class applying for";
    }
    if (!formData.consent) {
      errs.consent = "Please agree to receive admission updates";
    }
    return errs;
  };

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      setErrors((prev) => ({ ...prev, phone: "Enter valid 10-digit phone number first" }));
      return;
    }
    setOtpSent(true);
    setOtpError('');
  };

  const handleVerifyOtp = () => {
    if (otpVal === '1234' || otpVal.length === 4) {
      setOtpVerified(true);
      setOtpError('');
    } else {
      setOtpError('Please enter a 4-digit code (Use demo: 1234)');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on edit
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate server response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      grade: '',
      state: '',
      message: '',
      consent: false,
    });
    setOtpSent(false);
    setOtpVal('');
    setOtpVerified(false);
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#F8F5F0] dark:bg-[#0A0F1D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Admissions & Campus Connect"
          badgeIcon={Building}
          badgeVariant="crimson"
          title="Connect with Our"
          highlight="Admissions Council"
          subtitle="Whether you are planning a campus visit, inquiring about fee structure, or enrolling for the 2025-26 academic session, our counseling team is here to assist you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Campus Info & Interactive Google Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Campus Info Card */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-card-soft">
              <h3 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white mb-6">
                Dehradun Campus Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#B90124]/10 dark:bg-[#B90124]/20 flex items-center justify-center text-[#B90124] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Campus Address</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Tula's International School<br />
                      Dhoolkot, P.O – Selaqui, Chakrata Road,<br />
                      Dehradun – 248011, Uttarakhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C09D59]/15 dark:bg-[#C09D59]/25 flex items-center justify-center text-[#9A7B39] dark:text-[#E5C378] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Telephones & Helplines</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      Admissions: <a href="tel:+919837983791" className="font-bold text-[#B90124] hover:underline">+91-9837983791</a>
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      Landline: <a href="tel:01352699444" className="hover:underline">0135-2699444</a> / <a href="tel:01352699666" className="hover:underline">0135-2699666</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#60BAB1]/15 dark:bg-[#60BAB1]/25 flex items-center justify-center text-[#007A83] dark:text-[#90CCD0] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Official Correspondence</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      <a href="mailto:info@tis.edu.in" className="hover:text-[#B90124] font-medium">info@tis.edu.in</a>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Admissions: admissions@tis.edu.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Visiting Hours</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      Monday to Saturday: 9:00 AM – 5:30 PM<br />
                      Sunday (by prior appointment): 10:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps View */}
            <div className="rounded-3xl overflow-hidden shadow-card-soft border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] h-64 relative">
              <iframe
                title="Tulas International School Dehradun Location Map"
                src="https://maps.google.com/maps?q=Tula's+International+School+Dehradun+Uttarakhand&t=m&z=13&output=embed&iwloc=near"
                className="w-full h-full border-0"
                loading="lazy"
                aria-label="Google Map showing Tulas International School Dehradun"
              />
            </div>

          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl relative">
              
              <div className="mb-6">
                <span className="text-xs font-bold text-[#B90124] dark:text-[#E5C378] uppercase tracking-wider block">
                  Quick Admission Registration
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#0B2545] dark:text-white mt-1">
                  Enquire for Academic Session 2025-26
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your details below. Our senior admissions counselor will contact you within 24 hours.
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#60BAB1]/10 border border-[#60BAB1]/30 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#60BAB1] text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-[#0B2545] dark:text-white">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.grade || 'Boarding Admission'}</strong> has been registered. Our admissions dean will connect with you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={resetForm}
                    className="text-xs uppercase tracking-wider"
                  >
                    Submit Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500/20' 
                          : 'border-slate-200 dark:border-slate-700 focus:ring-[#B90124]/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500/20' 
                            : 'border-slate-200 dark:border-slate-700 focus:ring-[#B90124]/30'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                        10-Digit Mobile Number *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          name="phone"
                          maxLength="10"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="9876543210"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                            errors.phone 
                              ? 'border-red-500 focus:ring-red-500/20' 
                              : 'border-slate-200 dark:border-slate-700 focus:ring-[#B90124]/30'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={otpVerified}
                          className="px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-slate-200 dark:bg-slate-700 hover:bg-[#B90124] hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                        >
                          {otpVerified ? 'Verified ✓' : otpSent ? 'Resend' : 'Get OTP'}
                        </button>
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* OTP Simulation Input when triggered */}
                  {otpSent && !otpVerified && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs flex items-center gap-2"
                    >
                      <input
                        type="text"
                        maxLength="4"
                        placeholder="Enter 1234"
                        value={otpVal}
                        onChange={(e) => setOtpVal(e.target.value)}
                        className="w-28 px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-700 text-center font-mono font-bold"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="px-3 py-1.5 rounded-lg bg-[#0B2545] text-white font-bold cursor-pointer"
                      >
                        Verify OTP
                      </button>
                      <span className="text-[11px] text-amber-700 dark:text-amber-300">
                        (Demo OTP code: 1234)
                      </span>
                    </motion.div>
                  )}

                  {/* Grade & State Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                        Grade Applying For *
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                          errors.grade 
                            ? 'border-red-500 focus:ring-red-500/20' 
                            : 'border-slate-200 dark:border-slate-700 focus:ring-[#B90124]/30'
                        }`}
                      >
                        <option value="">Select Class</option>
                        <option value="Class IV">Class IV (Primary)</option>
                        <option value="Class V">Class V (Primary)</option>
                        <option value="Class VI">Class VI (Middle)</option>
                        <option value="Class VII">Class VII (Middle)</option>
                        <option value="Class VIII">Class VIII (Middle)</option>
                        <option value="Class IX">Class IX (Secondary)</option>
                        <option value="Class X">Class X (Secondary)</option>
                        <option value="Class XI - Science">Class XI - Science (PCM/PCB)</option>
                        <option value="Class XI - Commerce">Class XI - Commerce</option>
                        <option value="Class XI - Humanities">Class XI - Humanities</option>
                        <option value="Class XII">Class XII</option>
                      </select>
                      {errors.grade && (
                        <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.grade}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                        Current State / City
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="e.g. Delhi, Mumbai, Dehradun"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-1">
                      Questions / Specific Inquiries (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about boarding fee structure, sports facilities, or schedule a campus visit..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B90124]/30 resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-0.5 rounded text-[#B90124] focus:ring-[#B90124]"
                      />
                      <span>
                        I authorize Tula's International School counselors to contact me via Call / SMS / WhatsApp regarding admissions and campus tours.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={Send}
                    iconPosition="right"
                    className="w-full font-bold uppercase tracking-wider text-xs sm:text-sm shadow-glow-crimson"
                  >
                    {isSubmitting ? "Submitting Registration..." : "Submit Admission Enquiry"}
                  </Button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
