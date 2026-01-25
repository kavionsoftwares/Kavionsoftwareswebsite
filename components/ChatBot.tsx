
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! Welcome to Kavion Softwares. We build completely customized, professional websites for businesses like yours. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const faqs = {
    'what do you do': {
      keywords: ['what do you do', 'services', 'what you offer', 'your services'],
      answer: 'We specialize in creating fully personalized, professional websites from scratch - no templates, ever! Every site is custom-built specifically for your business needs. We also integrate intelligent chatbots that answer FAQs, gather leads, and provide instant customer support.'
    },
    'who do you help': {
      keywords: ['who do you help', 'target clients', 'who are your clients', 'for who'],
      answer: 'We work with businesses at any stage who either don\'t have a website or have an outdated one that isn\'t attracting customers. If you\'re struggling to get noticed in the market and need a professional online presence to compete effectively, we\'re here to help!'
    },
    'business hours': {
      keywords: ['business hours', 'working hours', 'when open', 'availability'],
      answer: 'We work Monday to Sunday and respond to all inquiries within 1 day! Our email is open 24/7, so you can reach out anytime at build@kavion.software.'
    },
    'process': {
      keywords: ['process', 'how do you work', 'development process', 'how it works', 'steps'],
      answer: 'We run you through every step from point A to point B with complete transparency. We use automation platforms with personalized prompts to generate layouts matching your brand, then customize everything - editing text, adding pictures, coding chatbots, and tailoring to your specifications. Before launch, we thoroughly test everything and ask for your feedback to make any changes you want.'
    },
    'why choose you': {
      keywords: ['why choose', 'what sets you apart', 'why you', 'difference', 'different'],
      answer: 'No templates, ever! We generate the website until you\'re fully happy, never rushing or giving you sloppy work. We\'re solving problems together as one team. When you work with us, we truly want to make your business grow, not just take your money. We build genuine, lifetime relationships with our clients.'
    },
    'features': {
      keywords: ['features', 'what included', 'website include', 'what on website'],
      answer: 'We typically include your mission, what you do, contact page, gallery, employee information, reviews, and any sections you need. Everything uses pictures and colors matching your brand, incorporates your slogans, and includes tailored chatbots with customized colors, name, logo, and responses that fit your business perfectly!'
    },
    'pricing': {
      keywords: ['pricing', 'cost', 'price', 'how much', 'payment', 'packages'],
      answer: 'We tailor pricing to fit you! Option 1: We control and own the website, handling all changes, bugs, and updates for you. Option 2: We sell the website directly and transfer full ownership to you. With our monthly service fee, you get unlimited support, free editing and updates, and can add more pages, features, pictures, and animations as you grow.'
    },
    'ownership': {
      keywords: ['ownership', 'who owns', 'own the website'],
      answer: 'You choose what works best! Option 1: We control and own the website, ensuring we make changes you want and keep up with bugs or updates. Option 2: We sell the website directly and transfer full ownership to you. Either way, you\'re a client for life with free check-ups whenever you need them!'
    },
    'monthly fee': {
      keywords: ['monthly fee', 'monthly service', 'subscription', 'ongoing cost'],
      answer: 'With the monthly service fee, you receive unlimited support and feedback whenever you need it, plus free editing and updates to your website. We can add more pages, features, pictures, animations, and integrations as your business grows. Once you connect with us, you\'re a client for life!'
    },
    'communication': {
      keywords: ['communicate', 'contact', 'reach you', 'talk to you'],
      answer: 'We communicate however you want - Google Meet, Zoom, email, or chat - whatever makes you comfortable! Email us at build@kavion.software and we\'ll respond as soon as possible. When we receive a contact form, we get notified immediately.'
    },
    'privacy': {
      keywords: ['privacy', 'data', 'security', 'information safe'],
      answer: 'We do not collect any sensitive data because we don\'t need to. We only gather information about your business through forms: pictures, FAQs, employee info, and details for your website. Your data is kept in databases in our company\'s private account with various two-factor authentication steps and passwords. We do not share your information with anyone outside our company.'
    },
    'updates': {
      keywords: ['updates', 'changes', 'modify', 'edit website'],
      answer: 'You can request changes whenever you want, as long as it\'s within reason and doable for our team! We can add more pages, different pictures, animations, and any integrations you need. Just tell us what you want updated or improved, and we\'ll make it happen.'
    },
    'why need website': {
      keywords: ['why need website', 'importance', 'why website', '2026', 'modern'],
      answer: 'It\'s 2026, and tech is at the forefront of business! The majority of customers find businesses by searching online and choosing websites that look trustworthy and professional. A poor website means lost sales to competitors with better presentation. An interactive, professional, tailored website with chatbots and contact forms attracts more customers!'
    },
    'results': {
      keywords: ['results', 'expect', 'roi', 'return', 'investment'],
      answer: 'More sales! Your brand reliability increases with a professional site, and you\'ll see the return on investment through increased client sales. A professional website saves you money long term because you get the money back in client sales.'
    },
    'templates': {
      keywords: ['templates', 'why not template', 'wordpress', 'wix'],
      answer: 'Templates can\'t truly tailor your website to your business needs and wants. Many people don\'t know how to use them properly, resulting in broken features that make businesses look sloppy and unprofessional. We build everything from scratch, customized exactly for you!'
    },
    'other developers': {
      keywords: ['other developers', 'competition', 'why not others'],
      answer: 'Many developers don\'t know what they\'re doing, have broken features, or deliver very simple websites that won\'t captivate customers. They\'re trying to get a payday rather than solve the problem. We\'re different - we\'re trying to solve an issue for you, not take from you. We build genuine relationships!'
    },
    'chatbot': {
      keywords: ['chatbot', 'bot features', 'why chatbot'],
      answer: 'Our custom chatbots answer FAQs, gather leads through forms, and provide instant customer support! The chatbot\'s colors, name, logo, and responses are all customized to fit your business perfectly. Chatbots stop useless spam, help build trust, and give your website a premium feel that attracts customers.'
    },
    'team': {
      keywords: ['team', 'your team', 'employees', 'who works'],
      answer: 'We\'re polite, spontaneous, and hardworking! All of our employees are trained and ready for any roadblock. We want to get exactly what you want done in the most efficient way possible while building a genuine relationship with you.'
    },
    'get started': {
      keywords: ['get started', 'start', 'begin', 'how to start', 'sign up'],
      answer: 'Let\'s transform your online presence! Contact us through our website form or email us directly at build@kavion.software. We\'ll schedule a conversation to discuss your needs and start building your perfect website!'
    }
  };

  const quickReplies = [
    'What do you do?',
    'What are your prices?',
    'Why choose you?',
    'How do I get started?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Check each FAQ category
    for (const [key, faq] of Object.entries(faqs)) {
      if (faq.keywords.some(keyword => lowerInput.includes(keyword))) {
        return faq.answer;
      }
    }

    // Greetings
    if (lowerInput.match(/\b(hello|hi|hey|good morning|good afternoon|good evening)\b/)) {
      return 'Hello! I\'m here to help you learn more about Kavion Softwares and how we can build a professional, customized website for your business. What would you like to know?';
    }

    // Help requests
    if (lowerInput.includes('help')) {
      return 'I can help you with information about our custom web development services, pricing options, our process, why we don\'t use templates, chatbot features, and how to get started. What interests you most?';
    }

    // Thank you
    if (lowerInput.match(/\b(thank|thanks|appreciate)\b/)) {
      return 'You\'re very welcome! If you have any other questions, feel free to ask. When you\'re ready to get started, reach out to us at build@kavion.software!';
    }

    return null;
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const response = findBestMatch(text);
      
      if (response) {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: response,
          timestamp: new Date()
        }]);
      } else {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: 'I\'m not sure about that specific question, but I\'d love to help! I can tell you about our custom web development services, pricing, our process, website features, or how to get started. You can also email us directly at build@kavion.software for personalized assistance - we respond within 1 day!',
          timestamp: new Date()
        }]);
      }

      // Follow-up message
      setTimeout(() => {
        const lowerText = text.toLowerCase();
        if (!lowerText.includes('contact') && !lowerText.includes('email') && !lowerText.includes('get started')) {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: 'Is there anything else you\'d like to know? When you\'re ready to transform your online presence, email us at build@kavion.software and let\'s build something amazing together!',
            timestamp: new Date()
          }]);
        }
      }, 1500);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#19E76E] to-[#10b981] text-black p-4 rounded-full shadow-2xl hover:shadow-[#19E76E]/50 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
          aria-label="Open Chat"
        >
          <MessageCircle size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold uppercase tracking-widest text-[10px] ml-1">
            Chat with us
          </span>
        </button>
      )}

      {isOpen && (
        <div className={`bg-black border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 flex flex-col overflow-hidden ${
          isMinimized ? 'w-80 h-16' : 'w-[calc(100vw-3rem)] max-w-[400px] h-[600px] max-h-[calc(100vh-6rem)]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-black border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#19E76E] rotate-45 flex items-center justify-center transition-transform hover:rotate-90">
                <span className="text-black font-bold text-lg -rotate-45">K</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-tight uppercase">Kavion Softwares</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#19E76E] rounded-full animate-pulse"></span>
                  <p className="text-[#19E76E] text-[10px] uppercase tracking-widest font-mono">Systems Operational</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Minimize Chat"
              >
                <Minimize2 size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-black to-[#050505] scroll-smooth">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-none px-4 py-3 ${
                      msg.type === 'user'
                        ? 'bg-[#19E76E] text-black font-medium'
                        : 'bg-white/5 text-white/80 border border-white/10 backdrop-blur-sm'
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <span className={`text-[9px] mt-1.5 block opacity-40 font-mono ${msg.type === 'user' ? 'text-black' : 'text-white'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length <= 3 && (
                <div className="px-4 pb-3 flex flex-wrap gap-2 bg-black">
                  {quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickReply(reply)}
                      className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 bg-white/5 hover:bg-[#19E76E]/10 text-[#19E76E] border border-white/10 transition-all hover:border-[#19E76E]/50"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="border-t border-white/10 p-4 bg-black">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Inquiry..."
                    className="flex-1 bg-white/5 text-white border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:border-[#19E76E] transition-colors text-sm placeholder-white/20 font-mono"
                  />
                  <button
                    onClick={() => handleSend()}
                    className="bg-[#19E76E] text-black p-3 rounded-none hover:bg-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
                    disabled={!inputValue.trim()}
                  >
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
                <p className="text-[9px] text-white/20 mt-3 text-center uppercase tracking-[0.2em] font-mono">
                  Kavion Intelligence Interface v1.0
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
