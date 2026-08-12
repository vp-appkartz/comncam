import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-outline-variant/30 mt-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logolb.png" alt="Comncam Solutions Logo" style={{ height: '40px', width: 'auto' }} />
            </Link>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              Crafting the digital world of tomorrow through scalable, innovative software solutions tailored for high-growth enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">link</span>
              </a>
              <a href="mailto:support@comncam.ca" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>
          
          {/* Links Col */}
          <div>
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal Col */}
          <div>
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-outline-variant/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-sm text-on-surface-variant">© 2024 Comncam Solutions Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-label-md text-sm text-on-surface-variant hover:text-primary cursor-pointer">Privacy Policy</span>
            <span className="w-1 h-1 rounded-full bg-outline"></span>
            <span className="font-label-md text-sm text-on-surface-variant hover:text-primary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
