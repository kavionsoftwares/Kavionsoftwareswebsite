
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-[#19E76E] transition-colors group"
      >
        <span className="text-lg md:text-xl font-medium tracking-tight pr-8">{q}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-white/40 text-sm leading-relaxed max-w-3xl">
          {a}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Why don't you use templates like WordPress or Wix?",
      a: "Templates result in broken features and sloppy sites. Many business owners lose sales because their template-based site looks unprofessional. We build everything from scratch to ensure a premium, reliable feel."
    },
    {
      q: "What do I get for the monthly service fee?",
      a: "You get unlimited support and feedback, free editing, and free technical updates. As your business grows, we add more pages, features, and animations at no extra cost. You're a client for life."
    },
    {
      q: "How does the 'Enterprise Replication' work?",
      a: "If you love a specific high-end website's features or layout, we analyze the engineering behind it and code our own custom version tailored to your brand. You get a professional look even if you're not sure exactly what you want yet."
    },
    {
      q: "How fast do you respond to inquiries?",
      a: "We respond to all inquiries within 1 day. We work Monday to Sunday and our email is monitored 24/7. When you reach out, we're notified immediately."
    }
  ];

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#19E76E] mb-6 block">Support Protocol</span>
             <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-none uppercase">Clarity &<br />Integrity.</h2>
             <p className="text-white/40 text-sm">Everything we build is designed for 2026. Have a question not listed? Our team is available 7 days a week.</p>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
