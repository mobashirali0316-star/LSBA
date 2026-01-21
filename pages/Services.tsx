
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Regulatory & Public Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            The Louisiana State Bar Association provides the framework for legal excellence through standardized regulation and comprehensive support systems.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-12 bg-white p-8 lg:p-16 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Official Service</h2>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">{service.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center">
                            <span className="text-amber-500 mr-2">•</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Process</h4>
                      <ol className="space-y-3">
                        {service.process.map((p, i) => (
                          <li key={i} className="text-sm text-slate-600">
                            <span className="font-bold text-slate-400 mr-1">{i+1}.</span> {p}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pricing Structure</p>
                      <p className="text-slate-900 font-bold">{service.pricing}</p>
                    </div>
                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded text-sm font-bold tracking-wide uppercase transition-all shadow-lg">
                      {service.cta}
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2 flex items-center justify-center bg-slate-100 rounded-lg border border-slate-200 p-8">
                   <div className="text-center">
                     <div className="text-slate-300 mb-4">
                        <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M9 4.804A7.994 7.994 0 002 12a8 8 0 1016 0 7.994 7.994 0 00-7-7.196V11a1 1 0 11-2 0V4.804z" />
                        </svg>
                     </div>
                     <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Regulatory Seal</p>
                     <p className="text-slate-500 text-xs mt-2 italic max-w-xs mx-auto">This process is governed by the Louisiana Supreme Court under LSBA Article VII.</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
