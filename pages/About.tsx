
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Role in Louisiana’s Legal System</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Founded over 80 years ago, the Louisiana State Bar Association serves as the official regulatory body for the legal profession in Louisiana.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-2/3 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Mission & Values</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  LSBA operates under the authority of the Louisiana Supreme Court and functions as a non-profit, mandatory bar association. Its mission is rooted in public protection, ethical accountability, and professional excellence.
                </p>
                <div className="bg-slate-50 p-8 border-l-4 border-amber-600 rounded-r-lg">
                  <h3 className="font-bold text-amber-600 uppercase tracking-widest text-xs mb-2">Our Mission</h3>
                  <p className="text-xl font-serif font-semibold text-slate-900 italic leading-relaxed">
                    "To regulate the practice of law, uphold ethical standards, and promote access to justice for the people of Louisiana."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Leadership & Governance</h2>
                <p className="text-slate-700 leading-relaxed">
                  LSBA is governed by elected and appointed legal professionals who represent diverse practice areas and jurisdictions across Louisiana. Operations are supported by experienced legal and administrative staff who manage the complex regulatory landscape of the state.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-slate-900 p-8 rounded text-white">
                  <h4 className="font-bold mb-4 border-b border-slate-700 pb-2">Core Values</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Integrity</li>
                    <li>• Accountability</li>
                    <li>• Transparency</li>
                    <li>• Professional Competence</li>
                    <li>• Public Trust</li>
                  </ul>
                </div>
                <div className="bg-slate-100 p-8 rounded text-slate-900">
                  <h4 className="font-bold mb-4 border-b border-slate-200 pb-2">Achievements</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• 80+ years of regulatory service</li>
                    <li>• Statewide CLE framework</li>
                    <li>• Established discipline systems</li>
                    <li>• Underserved community reach</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-slate-50 p-8 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Why LSBA Exists</h3>
              <ul className="space-y-6">
                {[
                  { title: "Public Protection", desc: "Setting the standard for licensing and practice entry." },
                  { title: "Lawyer Accountability", desc: "Overseeing professional responsibility and discipline." },
                  { title: "Ethical Practice", desc: "Providing resources and advisory opinions on legal ethics." },
                  { title: "Judicial Confidence", desc: "Maintaining public trust in the Louisiana justice system." }
                ].map((item, i) => (
                  <li key={i}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
