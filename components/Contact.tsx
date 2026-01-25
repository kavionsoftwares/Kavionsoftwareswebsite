
import React, { useState } from 'react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received. A Kavion engineer will respond within 24 hours.");
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 uppercase">
              Start Your <br />
              <span className="text-[#19E76E]">Build.</span>
            </h2>
            <p className="text-xl text-white/50 mb-16 max-w-md font-light">
              Ready to solve your business challenges? We communicate via Google Meet, Zoom, email, or chat—whatever makes you comfortable.
            </p>
            
            <div className="space-y-12">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#19E76E] mb-4">Inquiry Channel</h4>
                <p className="text-2xl font-bold">contact@kavionsoftwares.com</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#19E76E] mb-4">Availability</h4>
                <p className="text-lg text-white/60">Monday — Sunday <br /> Response within 24 Hours</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="p-10 border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#19E76E] outline-none transition-colors"
                    placeholder="E.g., Erlich Bachman"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#19E76E] outline-none transition-colors"
                    placeholder="E.g., erlich@piedpiper.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Inquiry Type</label>
                <select className="w-full bg-[#030303] border-b border-white/10 py-2 focus:border-[#19E76E] outline-none transition-colors">
                  <option>Full Custom Website</option>
                  <option>Intelligent Chatbot Integration</option>
                  <option>Feature Replication Request</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">Brief Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border border-white/10 p-4 focus:border-[#19E76E] outline-none transition-colors"
                  placeholder="Tell us about your business needs..."
                  required
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full">Transmit To Engineering</Button>
            </form>
            
            {/* Decorator */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-[#19E76E] opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
