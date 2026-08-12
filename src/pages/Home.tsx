import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/media/hero-image-1.png',
  '/media/hero-image-2.png'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="pt-20">
      {/* Section 1: Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 pb-section-gap overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          <div className="space-y-8 relative z-20">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-sm animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Engineering the Future
            </div>

            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-[64px] text-on-background leading-tight md:leading-[1.15] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transforming Big Ideas Into <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Scalable Digital Solutions
              </span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Full-cycle Software, Mobile App, IoT, and IT Consulting custom-built to drive business growth for Canadian and global enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/services" className="bg-primary text-white px-8 py-4 rounded-md font-label-md text-label-md hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/30 hover:-translate-y-1">
                Explore Our Services
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          {/* Hero Single Animated Image with Networking Style */}
          <div className="relative w-full h-[400px] md:h-[550px] mt-10 md:mt-0 flex items-center justify-center animate-float">
            
            {/* Networking Background Grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNThCRSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0 opacity-50"></div>
            
            {/* Network Nodes (Decorative) */}
            <div className="absolute top-10 left-10 w-3 h-3 bg-primary rounded-full z-0 animate-pulse shadow-[0_0_10px_rgba(0,88,190,0.8)]"></div>
            <div className="absolute top-20 right-10 w-2 h-2 bg-primary rounded-full z-0 animate-pulse shadow-[0_0_10px_rgba(0,88,190,0.8)]" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-12 right-16 w-3 h-3 bg-primary rounded-full z-0 animate-pulse shadow-[0_0_10px_rgba(0,88,190,0.8)]" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-12 w-2.5 h-2.5 bg-primary rounded-full z-0 animate-pulse shadow-[0_0_10px_rgba(0,88,190,0.8)]" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Network Lines */}
            <div className="absolute top-11 left-12 w-24 h-[1px] bg-primary/40 z-0 origin-left transform rotate-[25deg]"></div>
            <div className="absolute top-21 right-11 w-32 h-[1px] bg-primary/40 z-0 origin-right transform -rotate-[15deg]"></div>
            <div className="absolute bottom-12 right-17 w-20 h-[1px] bg-primary/40 z-0 origin-right transform rotate-[35deg]"></div>
            <div className="absolute bottom-21 left-13 w-16 h-[1px] bg-primary/40 z-0 origin-left transform -rotate-[45deg]"></div>

            {/* Main Image with Tech Borders (Rotating) */}
            <div className="w-[85%] h-[80%] overflow-hidden relative group z-10 border-t-[6px] border-l-[6px] border-primary rounded-tr-[3rem] rounded-bl-[3rem] shadow-[20px_20px_0px_rgba(0,88,190,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
              {heroImages.map((src, index) => (
                <img 
                  key={index}
                  className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-1000 ${index === currentImageIndex ? 'opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-110'}`} 
                  alt={`Slide ${index + 1}`}
                  src={src}
                />
              ))}
            </div>
            
            {/* Tech Accents on Image Container */}
            <div className="absolute top-4 right-[calc(7.5%-2px)] w-16 h-16 border-t-2 border-r-2 border-primary z-20"></div>
            <div className="absolute bottom-4 left-[calc(7.5%-2px)] w-16 h-16 border-b-2 border-l-2 border-primary z-20"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Value Proposition (Who We Are) */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h2 className="font-display-lg text-4xl md:text-5xl text-on-background leading-tight tracking-tight">
                Innovative Technology Built Around Your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Business Goals
                </span>
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                At Comncam Solutions Ltd., we don’t just write code—we engineer custom technology that drives efficiency, revenue, and seamless user experiences. Based in Alberta, Canada, our expert team partners with ambitious startups and established enterprises across industries to deliver future-ready software, IoT infrastructure, and modern web applications.
              </p>
            </div>
            
            {/* Right: Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                </div>
                <h3 className="font-headline-sm text-lg text-on-surface leading-snug">10+ Years of Industry Experience</h3>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">code_blocks</span>
                </div>
                <h3 className="font-headline-sm text-lg text-on-surface leading-snug">Custom End-to-End Software Development</h3>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">sync</span>
                </div>
                <h3 className="font-headline-sm text-lg text-on-surface leading-snug">Agile & Client-Centric Methodology</h3>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white border border-outline-variant/30 rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">shield_locked</span>
                </div>
                <h3 className="font-headline-sm text-lg text-on-surface leading-snug">Enterprise-Grade Security & Quality Assurance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Services Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap pt-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Our Core Tech Capabilities</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Comprehensive IT and software engineering solutions tailored to your operational needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Custom Web Design & Development */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">language</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">Custom Web Design & Development</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Fast, responsive, and SEO-optimized web solutions tailored to reflect your brand identity and convert visitors.</p>
            <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
              <li>Custom Front-End & Back-End</li>
              <li>E-Commerce & Portal Development</li>
              <li>CMS Integration & Performance Optimization</li>
            </ul>
          </div>
          {/* Mobile App Development */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">smartphone</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">Mobile App Development</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Native and cross-platform mobile apps built for performance, security, and effortless user engagement.</p>
            <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
              <li>iOS & Android (Flutter / React Native)</li>
              <li>Intuitive User Interfaces</li>
              <li>Scalable Backend & Cloud Integration</li>
            </ul>
          </div>
          {/* POS & Security Software */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">point_of_sale</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">POS & Security Software</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Customized Point-of-Sale engines and robust security systems to streamline operations and safeguard business data.</p>
            <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
              <li>Custom POS System Development</li>
              <li>Security & Access Control Software</li>
              <li>Inventory & Payment Gateway Integration</li>
            </ul>
          </div>
          {/* IoT Solutions */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">router</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">IoT (Internet of Things) Solutions</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Smart device integration and embedded software that connect hardware to real-time cloud data and analytics.</p>
            <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
              <li>Smart Device & Sensor Connectivity</li>
              <li>Real-time Monitoring Dashboards</li>
              <li>Cloud Architecture & Remote Control</li>
            </ul>
          </div>
          {/* UI/UX Experience Design */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">design_services</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">UI/UX Experience Design</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Human-centered UI/UX design that transforms complex functional requirements into beautiful, intuitive digital journeys.</p>
            <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
              <li>User Research & Wireframing</li>
              <li>Interactive Prototyping</li>
              <li>Accessibility & Usability Testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Why Partner With Us (Key Differentiators) */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30 pt-24">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">We're More Than an IT Vendor—We're Your Growth Partner</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-outline-variant/30 rounded-2xl p-8 border-t-4 border-t-primary">
              <h3 className="font-headline-sm text-xl font-bold mb-4">Quality Without Compromise</h3>
              <p className="font-body-md text-on-surface-variant">We adhere to strict quality engineering standards. Every line of code and user flow undergoes rigorous testing before deployment.</p>
            </div>
            <div className="border border-outline-variant/30 rounded-2xl p-8 border-t-4 border-t-primary">
              <h3 className="font-headline-sm text-xl font-bold mb-4">Transparent, Budget-Conscious Delivery</h3>
              <p className="font-body-md text-on-surface-variant">No hidden fees or unexpected delays. We provide realistic roadmaps, clear milestones, and solutions designed to fit your operational budget.</p>
            </div>
            <div className="border border-outline-variant/30 rounded-2xl p-8 border-t-4 border-t-primary">
              <h3 className="font-headline-sm text-xl font-bold mb-4">End-to-End Product Lifecycle</h3>
              <p className="font-body-md text-on-surface-variant">From early discovery and UI wireframes to architecture, deployment, and ongoing post-launch maintenance, we handle the entire technical journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Proven Process */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30 pt-24">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">How We Bring Your Vision to Life</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                { step: '1', title: 'Discovery & Strategy', text: 'We sit down with your team to understand your business objectives, target audience, technical requirements, and project scope.' },
                { step: '2', title: 'Architecture & UI/UX Design', text: 'Our design team crafts intuitive wireframes and visual prototypes while our architects design a secure, scalable system structure.' },
                { step: '3', title: 'Agile Engineering', text: 'We develop in iterative sprints, giving you full visibility and regular progress demos along the way.' },
                { step: '4', title: 'Quality Control & Deployment', text: 'Thorough security, usability, and performance testing ensure a flawless launch across all platforms and devices.' },
                { step: '5', title: 'Maintenance & Optimization', text: 'We provide ongoing technical support, system updates, and scaling support as your business grows.' },
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left w-full">
                    <div className={`border border-outline-variant/30 bg-surface p-6 rounded-2xl ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                      <h3 className="font-headline-sm text-xl font-bold text-primary mb-2">Step {item.step}: {item.title}</h3>
                      <p className="font-body-md text-on-surface-variant">{item.text}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center font-bold text-xl relative z-10 shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Ready to Elevate Your Digital Infrastructure? (Final CTA) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="border border-outline-variant/30 rounded-3xl p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center bg-white">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-display-lg text-display-lg mb-6">Have a Project in Mind? Let’s Build Something Great Together.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Whether you need a custom enterprise application, a scalable mobile app, or smart IoT integration, our Edmonton-based team is ready to assist.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/contact" className="font-label-md text-label-md bg-on-background text-surface px-8 py-4 rounded-md hover:bg-on-surface-variant transition-colors flex items-center gap-2">
                Schedule a Free Tech Consultation
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="relative z-10 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20 space-y-6 text-left">
            <h3 className="font-headline-sm text-xl font-bold text-on-background border-b border-outline-variant/30 pb-4">Direct Contact Highlights</h3>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <p className="font-label-md font-bold text-on-surface">Phone</p>
                <p className="font-body-md text-on-surface-variant">+1 (780) 569-2151</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
              <div>
                <p className="font-label-md font-bold text-on-surface">Email</p>
                <p className="font-body-md text-on-surface-variant">support@comncam.ca</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="font-label-md font-bold text-on-surface">Office</p>
                <p className="font-body-md text-on-surface-variant">Suite #201, 4196 93 ST NW,<br/>Edmonton, AB T6E 5P5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
