import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main className="pt-32 pb-section-gap overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Visionary Solutions
            </div>
            <h1 className="font-display-lg md:font-display-xl text-display-lg md:text-display-xl text-on-background mb-6">
              Architecting the <span className="text-primary">Digital World</span> of Tomorrow
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
              Comncam Solutions Ltd. delivers innovative, scalable software development and digital infrastructure tailored to meet your unique business needs.
            </p>
            <div className="flex gap-4">
              <a href="/contact" className="font-label-md text-label-md bg-primary text-white px-8 py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">
                Get a Quote
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-outline-variant/30">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFqoYp0iXXoQosNixp8UoeVKh4XxsARbczjeiKg9nMDXcRTF5JEubKpOD9QUAZWYXu90_LRCaZsDIf25rilDnARAOTs8tbh60ADeOVk2aWwJvumpJaC4iw5qL24CDMvqzUvTcfjRmaGP8FDm9vMTE-_IUNR36SeegrgEUG1KD5XZ6Vn5L569l88h7MN2m_uQtE--WcV-Zm5e_63J8r2srBDYL-ZUsN_HCAbyex9QwhyMfCP8e84Nghhw')" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap pt-16">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Our Core Services</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Comprehensive digital solutions engineered for scale and performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Custom Web Development */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">code</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">Custom Web Development</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">Robust, scalable web applications built with modern frameworks to deliver seamless user experiences and high performance.</p>
          </div>
          {/* Mobile App Development */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">smartphone</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">Mobile App Development</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">Native and cross-platform mobile solutions that connect your brand directly to users, anywhere.</p>
          </div>
          {/* IoT */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">router</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">IoT Solutions</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">Connecting hardware to the cloud with robust IoT architectures for real-time monitoring and control.</p>
          </div>
          {/* AI */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">AI & Machine Learning</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">Integrating cutting-edge AI to automate processes and generate actionable insights from your data.</p>
          </div>
          {/* Data Science */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">database</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">Data Science</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">Building data pipelines and advanced analytics tools that drive strategic business decisions.</p>
          </div>
          {/* DevOps */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 hover:border-primary/50 transition-colors bg-white">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">cloud</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-3">Cloud & DevOps</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">Scalable cloud infrastructure and seamless CI/CD pipelines to accelerate your software delivery.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="border border-outline-variant/30 bg-white rounded-3xl p-12 text-center relative overflow-hidden">
          <h2 className="font-display-lg text-display-lg mb-6 relative z-10">Let's Make Something <br />Great Together!</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10">
            Take the first step towards digital success with Comncam Solutions by your side. Our team of experts is eager to craft tailored solutions.
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <a href="/contact" className="font-label-md text-label-md bg-on-background text-surface px-8 py-4 rounded-md hover:bg-on-surface-variant transition-colors flex items-center gap-2">
              Schedule Consultation
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
