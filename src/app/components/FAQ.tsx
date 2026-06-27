import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'What areas do you cover for doorstep service?',
    answer:
      'We provide doorstep tailoring services across all major areas in the city. Contact us to check if we cover your location, and we\'ll be happy to arrange a home visit at your convenience.',
  },
  {
    question: 'How long does it take to complete a garment?',
    answer:
      'Standard garments typically take 7-10 days, while bridal wear and complex designs may require 2-3 weeks. We also offer express services for urgent requirements with guaranteed timely delivery.',
  },
  {
    question: 'Do you provide fabric, or should I bring my own?',
    answer:
      'We offer both options! You can choose from our premium fabric collection curated from the finest suppliers, or bring your own fabric for us to work with. Our consultants will guide you in selecting the perfect material.',
  },
  {
    question: 'What if the garment doesn\'t fit perfectly?',
    answer:
      'We stand behind our Perfect Fit Guarantee. If any adjustments are needed, we offer free alterations within 15 days of delivery to ensure you\'re completely satisfied with the fit.',
  },
  {
    question: 'Can I see design samples before placing an order?',
    answer:
      'Absolutely! During your consultation, we\'ll show you our portfolio of completed works, design catalogs, and can create custom sketches based on your preferences before finalizing the order.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major payment methods including cash, credit/debit cards, UPI, and digital wallets. We typically require a 50% advance at the time of measurement, with the balance due upon delivery.',
  },
  {
    question: 'Do you handle bulk orders for events or corporate uniforms?',
    answer:
      'Yes, we specialize in bulk orders for weddings, corporate events, and uniform requirements. We offer special pricing for bulk orders and have the capacity to handle large-scale projects with consistent quality.',
  },
  {
    question: 'Is there a cancellation or modification policy?',
    answer:
      'You can modify your order within 24 hours of placing it. After cutting begins, we can make design adjustments but cannot cancel the order. We\'ll work closely with you to ensure the final product meets your expectations.',
  },
];

export function FAQ() {
  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full border" style={{ borderColor: '#D4AF37' }}>
              <p className="text-sm tracking-widest" style={{ color: '#D4AF37' }}>
                FAQ
              </p>
            </div>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1a1a1a',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-70" style={{ color: '#1a1a1a' }}>
              Everything you need to know about our tailoring services
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300 shadow-sm"
              >
                <AccordionTrigger
                  className="text-left hover:no-underline py-6"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: '#1a1a1a' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-relaxed opacity-70" style={{ color: '#1a1a1a' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
