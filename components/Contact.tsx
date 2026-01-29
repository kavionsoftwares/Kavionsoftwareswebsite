import React, { useState } from 'react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    botcheck: '', // spam protection
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // ✅ VITE ENV VARIABLE (THIS IS THE FIX)
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    console.log('Env check:', {
      hasKey: !!accessKey,
      keyLength: accessKey?.length,
    });

    if (!accessKey) {
      console.error('Missing VITE_WEB3FORMS_KEY');
      setStatus('error');
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'N/A',
        inquiry_type: formData.inquiryType,
        message: formData.message,
        subject: 'New inquiry from kavionsoftwares.com',
        botcheck: formData.botcheck, // honeypot
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log('Web3Forms response:', data);

      if (data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
          botcheck: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
              Ready to solve your business challenges? We communicate via Google Meet,
              Zoom, email, or chat—whatever makes you comfortable.
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#19E76E] mb-4">
                  Inquiry Channel
                </h4>
                <p className="text-2xl font-bold">contact@kavionsoftwares.com</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#19E76E] mb-4">
                  Availability
                </h4>
                <p className="text-lg text-white/60">
                  Monday — Sunday <br /> Response within 24 Hours
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="p-10 border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-8"
            >
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                style={{ display: 'none' }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#19E76E] outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#19E76E] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Phone (Optional)
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#19E76E] outline-none"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#030303] border-b border-white/10 py-2 focus:border-[#19E76E] outline-none"
                  >
                    <option value="" disabled>Select Inquiry</option>
                    <option value="Full Custom Website">Full Custom Website</option>
                    <option value="Intelligent Chatbot Integration">Chatbot Integration</option>
                    <option value="Feature Replication Request">Feature Replication</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-white/10 p-4 focus:border-[#19E76E] outline-none"
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Transmitting...' : 'Transmit To Engineering'}
              </Button>

              {status === 'success' && (
                <p className="text-sm text-white/70">
                  Inquiry received ✅ We’ll respond within 24 hours.
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm text-white/70">
                  Something went wrong ❌ Please try again or email us directly.
                </p>
              )}
            </form>

            <div className="absolute -top-6 -right-6 w-12 h-12 border-t border-r border-[#19E76E] opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
