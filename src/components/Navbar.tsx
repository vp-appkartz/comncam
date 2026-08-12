import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-outline-variant/30 transition-all duration-300">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logolb.png" alt="Comncam Solutions Logo" style={{ height: '40px', width: 'auto' }} />
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors text-lg font-semibold">Home</Link>
            <Link to="/about" className="text-on-surface-variant hover:text-primary transition-colors text-lg font-semibold">About</Link>
            <Link to="/services" className="text-on-surface-variant hover:text-primary transition-colors text-lg font-semibold">Services</Link>
            <Link to="/contact" className="text-on-surface-variant hover:text-primary transition-colors text-lg font-semibold">Contact</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-md font-label-md text-label-md hover:bg-primary/90 transition-colors flex items-center gap-2">
              Book a Demo
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center gap-8 pt-20">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-on-surface">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-on-surface">About</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-on-surface">Services</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-on-surface">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
