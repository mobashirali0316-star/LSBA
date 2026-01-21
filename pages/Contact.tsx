
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact the Association</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Official communication channels for regulatory, public, and attorney services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-6">Office Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm uppercase mb-2">Business Hours</h3>
                    <p className="text-slate-600 text-sm">Monday–Friday | 8:30 AM – 4:30 PM (CT)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm uppercase mb-2">Contact Details</h3>
                    <p className="text-slate-600 text-sm mb-1">Phone: (XXX) XXX-XXXX</p>
                    <p className="text-slate-600 text-sm">Email: info@lsba.org</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm uppercase mb-2">Location</h3>
                    <p className="text-slate-600 text-sm">Statewide jurisdiction serving the entire Louisiana judiciary and legal community.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 text-white rounded-lg">
                <h3 className="font-serif font-bold text-xl text-amber-500 mb-4 border-b border-slate-700 pb-4">Institutional Trust</h3>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  "This communication is part of the official LSBA registry. All inquiries are handled in accordance with professional privacy and regulatory transparency standards."
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-12 rounded-lg text-center animate-in zoom-in-95 duration-300">
                  <div className="text-5xl mb-6">✓</div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Inquiry Received</h2>
                  <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your request has been filed with the appropriate LSBA department. A representative will contact you within standard regulatory business timeframes.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-amber-600 font-bold text-sm uppercase tracking-widest hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 p-8 md:p-12 border border-slate-200 rounded-lg">
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Official Inquiry Form</h2>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                      <input type="text" required className="w-full bg-white border border-slate-300 rounded p-4 text-sm focus:outline-none focus:border-amber-600" />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input type="email" required className="w-full bg-white border border-slate-300 rounded p-4 text-sm focus:outline-none focus:border-amber-600" />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-white border border-slate-300 rounded p-4 text-sm focus:outline-none focus:border-amber-600" />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Inquiry Type</label>
                      <select className="w-full bg-white border border-slate-300 rounded p-4 text-sm focus:outline-none focus:border-amber-600">
                        <option>Attorney Inquiry</option>
                        <option>Public Resource</option>
                        <option>CLE Compliance</option>
                        <option>Disciplinary Matter</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message Body</label>
                      <textarea rows={5} required className="w-full bg-white border border-slate-300 rounded p-4 text-sm focus:outline-none focus:border-amber-600"></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
                        Submit Official Inquiry
                      </button>
                      <p className="mt-4 text-[10px] text-slate-400 text-center uppercase tracking-tighter">
                        By submitting, you agree to our regulatory terms of communication.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
