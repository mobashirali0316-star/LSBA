
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-slate-900 py-20 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Publications & Announcements</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Institutional updates, regulatory guidance, and educational resources for the Louisiana legal community.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post, idx) => (
              <article key={idx} className="flex flex-col bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${post.title}/800/400`} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">{post.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button className="text-slate-900 font-bold text-sm uppercase tracking-wider hover:text-amber-600 transition-colors flex items-center">
                    Read Regulatory Article <span className="ml-2">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Top Educational Outlines</h3>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { title: "LSBA Regulation", items: ["Authority", "Licensing", "Discipline"] },
                 { title: "CLE Compliance", items: ["Requirements", "Reporting", "Violations"] },
                 { title: "Public Resources", items: ["Referrals", "Complaints", "Education"] }
               ].map((box, i) => (
                 <div key={i} className="bg-slate-900 text-white p-6 rounded text-left">
                    <h4 className="font-bold text-amber-500 mb-3 text-sm uppercase tracking-wide border-b border-slate-700 pb-2">{box.title}</h4>
                    <ul className="text-xs space-y-2 text-slate-400">
                      {box.items.map((it, idx) => <li key={idx}>• {it}</li>)}
                    </ul>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
