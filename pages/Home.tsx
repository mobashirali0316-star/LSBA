
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQS, TESTIMONIALS } from '../constants';
import { getLSBAAssistantResponse } from '../services/geminiService';

const Home: React.FC = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleAssistantSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setIsTyping(true);
    const response = await getLSBAAssistantResponse(chatInput);
    setChatResponse(response);
    setIsTyping(false);
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Courthouse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Upholding the Integrity of the Legal Profession in Louisiana
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-sans max-w-2xl">
              The Louisiana State Bar Association regulates, supports, and strengthens the practice of law to protect the public and maintain professional standards statewide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/services" className="bg-amber-600 hover:bg-amber-700 text-white text-center py-4 px-6 rounded shadow-lg font-bold transition-all uppercase tracking-wide text-sm">
                Find a Licensed Attorney
              </Link>
              <Link to="/services" className="bg-slate-700 hover:bg-slate-600 text-white text-center py-4 px-6 rounded shadow-lg font-bold transition-all uppercase tracking-wide text-sm">
                File a Complaint
              </Link>
              <Link to="/services" className="bg-slate-800 hover:bg-slate-700 text-white text-center py-4 px-6 rounded shadow-lg font-bold transition-all uppercase tracking-wide text-sm border border-slate-700">
                CLE & Compliance
              </Link>
              <Link to="/contact" className="bg-slate-800 hover:bg-slate-700 text-white text-center py-4 px-6 rounded shadow-lg font-bold transition-all uppercase tracking-wide text-sm border border-slate-700">
                Attorney Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Responsibilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Core Responsibilities</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Regulation, Oversight, and Public Protection</h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The LSBA serves as the official governing body for attorneys licensed to practice law in Louisiana. 
              Through regulation, education, and discipline, LSBA ensures accountability, competence, and ethical conduct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Attorney Licensing", icon: "⚖️", desc: "Administration of membership and professional standing." },
              { title: "Ethics Guidance", icon: "📜", desc: "Professional discipline and ethical standards oversight." },
              { title: "Mandatory CLE", icon: "📚", desc: "Setting and enforcing ongoing educational standards." },
              { title: "Access to Justice", icon: "🏛️", desc: "Public legal education and underserved community initiatives." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-lg hover:shadow-xl transition-shadow bg-slate-50">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split View: Attorneys vs Public */}
      <section className="bg-slate-50 flex flex-col lg:flex-row border-y border-slate-200">
        <div className="lg:w-1/2 p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-slate-200">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">For Attorneys</h2>
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Supporting Professional Excellence</h3>
          <ul className="space-y-4 mb-8">
            {["CLE compliance tracking", "Ethics advisory services", "Practice management support", "Lawyer wellness programs"].map((li, i) => (
              <li key={i} className="flex items-start">
                <span className="text-amber-600 mr-2">✓</span>
                <span className="text-slate-600 text-sm font-medium">{li}</span>
              </li>
            ))}
          </ul>
          <Link to="/services" className="inline-block border-2 border-slate-900 text-slate-900 px-8 py-3 font-bold text-sm tracking-wide uppercase hover:bg-slate-900 hover:text-white transition-colors">
            Access Member Resources
          </Link>
        </div>
        <div className="lg:w-1/2 p-12 lg:p-24 bg-white">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">For the Public</h2>
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Verified Legal Information</h3>
          <ul className="space-y-4 mb-8">
            {["Lawyer Referral & Info Service", "Attorney verification status", "Complaint filing portal", "Legal education programs"].map((li, i) => (
              <li key={i} className="flex items-start">
                <span className="text-amber-600 mr-2">✓</span>
                <span className="text-slate-600 text-sm font-medium">{li}</span>
              </li>
            ))}
          </ul>
          <Link to="/services" className="inline-block border-2 border-slate-900 text-slate-900 px-8 py-3 font-bold text-sm tracking-wide uppercase hover:bg-slate-900 hover:text-white transition-colors">
            Get Legal Help
          </Link>
        </div>
      </section>

      {/* Regulatory Assistant Tool (Gemini Integration) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-8 border-b border-slate-700">
              <h3 className="text-2xl font-serif font-bold text-amber-500 mb-2">LSBA Regulatory Assistant</h3>
              <p className="text-slate-400 text-sm">Automated system for navigating LSBA regulations and resources.</p>
            </div>
            <div className="p-8">
              {chatResponse ? (
                <div className="bg-slate-900 p-6 rounded-lg mb-6 border border-slate-700 animate-in slide-in-from-bottom-2">
                  <p className="text-slate-200 text-sm leading-relaxed italic">{chatResponse}</p>
                  <button 
                    onClick={() => {setChatResponse(''); setChatInput('');}}
                    className="mt-4 text-amber-500 text-xs font-bold uppercase hover:underline"
                  >
                    Clear Assistant
                  </button>
                </div>
              ) : null}
              <form onSubmit={handleAssistantSubmit} className="relative">
                <input 
                  type="text"
                  placeholder="Ask about licensing, CLE compliance, or finding an attorney..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-4 px-6 text-white focus:outline-none focus:border-amber-600 transition-colors"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={isTyping}
                />
                <button 
                  type="submit"
                  disabled={isTyping}
                  className="absolute right-2 top-2 bottom-2 bg-amber-600 px-6 rounded-md font-bold text-sm hover:bg-amber-700 disabled:opacity-50 transition-colors"
                >
                  {isTyping ? "Consulting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-serif font-bold text-slate-900">80+</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Years of Authority</p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-slate-900">Mandatory</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Licensing Membership</p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-slate-900">Non-Profit</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Public Mandate</p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-slate-900">Statewide</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Judicial Integration</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-sm font-bold text-amber-600 text-center uppercase tracking-widest mb-12">Professional Perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm">
                <div className="flex text-amber-500 mb-4 text-lg">★★★★★</div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900">{t.author}</span>
                  <span className="text-slate-500 text-xs uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
