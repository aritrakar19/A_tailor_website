import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Send, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormFields {
  name: string;
  email: string;
  contact: string;
  address: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
  address?: string;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact Number is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Formulate WhatsApp message format exactly as required:
    const message = `Hello Tailor & Dhaga,

I would like to book an appointment.

Name: ${formData.name.trim()}

Email: ${formData.email.trim()}

Contact Number: ${formData.contact.trim()}

Address: ${formData.address.trim()}

Please contact me regarding my appointment.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918910316419?text=${encodedMessage}`;

    // Simulate luxury redirection loading before opening in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        contact: '',
        address: '',
      });
      setErrors({});
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#121212] border border-[#D4AF37]/30 max-w-lg w-full p-8 rounded-2xl shadow-2xl z-10 text-white selection:bg-[#D4AF37] selection:text-black"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] text-gray-400 transition-colors cursor-pointer"
              aria-label="Close booking modal"
            >
              <X size={18} />
            </button>

            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
                  Book An Appointment
                </h3>
                <p className="text-xs text-gray-400 font-sans">Experience elite door-step tailoring consultation</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D4AF37]/15 mb-6" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                    errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1 font-sans">{errors.name}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                    errors.email ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1 font-sans">{errors.email}</p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contact" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5 font-sans">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                    errors.contact ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                  }`}
                />
                {errors.contact && (
                  <p className="text-xs text-red-400 mt-1 font-sans">{errors.contact}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1.5 font-sans">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  disabled={isLoading}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none ${
                    errors.address ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10 focus:border-[#D4AF37]'
                  }`}
                />
                {errors.address && (
                  <p className="text-xs text-red-400 mt-1 font-sans">{errors.address}</p>
                )}
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all duration-300 bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Send</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Booking Request</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
