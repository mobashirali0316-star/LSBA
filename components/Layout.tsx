
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-amber-600 p-2 rounded">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05l-3.293 3.293a1 1 0 01-1.414 0l-3.293-3.293a1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.789l1.599.8L9 4.323V3a1 1 0 011-1zm0 5a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold uppercase tracking-wider font-serif">LSBA</span>
                <span className="text-xs text-slate-400 font-sans tracking-tight">Louisiana State Bar Association</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  isActive(link.path) ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/services" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-sm text-sm font-bold transition-all shadow-md"
            >
              ATTORNEY LOGIN
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800 pb-4`}>
        <div className="px-2 pt-2 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold bg-amber-600 text-white"
          >
            ATTORNEY LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
               <svg className="w-10 h-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05l-3.293 3.293a1 1 0 01-1.414 0l-3.293-3.293a1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.789l1.599.8L9 4.323V3a1 1 0 011-1zm0 5a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                </svg>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-wider">Louisiana State Bar Association</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Serving the legal profession and the public since 1941. Official regulatory body for attorneys licensed in Louisiana under the authority of the Louisiana Supreme Court.
            </p>
          </div>
          
          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Attorney Directory</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">CLE Compliance</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">File a Complaint</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Governance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Louisiana Statewide Jurisdiction<br />
              Business Hours: Mon–Fri, 8:30 AM – 4:30 PM (CT)
            </p>
            <p className="text-slate-300 text-sm mb-2 font-bold">(XXX) XXX-XXXX</p>
            <p className="text-slate-300 text-sm">info@lsba.org</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Louisiana State Bar Association. All regulatory rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Use</a>
            <a href="#" className="hover:text-slate-300">Regulatory Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
