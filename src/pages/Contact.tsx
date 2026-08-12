const Contact = () => {
  return (
    <>
      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-on-surface mb-6">Let's start a <span className="text-primary">conversation</span>.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Whether you're looking to upgrade your digital infrastructure or need custom software solutions, our team is ready to help you build the future.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16 items-start">
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-12">
            <div className="border border-outline-variant/30 bg-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-8">Get in touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">Global Headquarters</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Edmonton, AB<br />Serving Clients Globally</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">Email Us</h4>
                    <a className="font-body-md text-body-md text-primary hover:underline" href="mailto:support@comncam.ca">support@comncam.ca</a>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">For general inquiries and support.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>phone</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-1">Call Us</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">+1 (123) 456-7890</p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">Mon-Fri from 9am to 5pm MT.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-outline-variant/30 rounded-2xl p-2 h-64 relative overflow-hidden bg-white">
              <div 
                className="w-full h-full bg-cover bg-center rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-500" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5drgf0H8cAkQkxXvhlhi6RiY5sfTZh3IvPU9BEIql9KTrTjutjbGVW4PkBANs0lwP8ADKKoU8YCGUf7P5w_QW3p1oo_ZGzcAcTxh74dY789zEK6g6sv0D1CGrL4Lqc1KkDaq7wf77PkObVNCUXKKcM1A4lDvbb7RfcMh4pgZxLZ1pYVDrlu8aRbzITm0GIsbpw8Ve6oobbDHQmmzPcZ7KipIiD_xNK4zdNm0Gt_OWa4VBa2hv3r1GSw')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent flex items-end p-6 pointer-events-none rounded-2xl">
                <span className="font-label-md text-label-md text-primary bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">Edmonton</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="border border-outline-variant/30 bg-white rounded-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="firstName">First Name</label>
                    <input className="w-full bg-white border border-outline-variant/50 rounded-md px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-on-surface-variant/50" id="firstName" placeholder="Jane" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="lastName">Last Name</label>
                    <input className="w-full bg-white border border-outline-variant/50 rounded-md px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-on-surface-variant/50" id="lastName" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Work Email</label>
                  <input className="w-full bg-white border border-outline-variant/50 rounded-md px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-on-surface-variant/50" id="email" placeholder="jane@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="subject">Subject</label>
                  <select className="w-full bg-white border border-outline-variant/50 rounded-md px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors appearance-none cursor-pointer" id="subject">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunities</option>
                    <option>Enterprise Solutions</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="message">Message</label>
                  <textarea className="w-full bg-white border border-outline-variant/50 rounded-md px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors placeholder:text-on-surface-variant/50 resize-none" id="message" placeholder="How can we help you construct the future?" rows={5}></textarea>
                </div>
                <button className="w-full font-label-md text-label-md bg-primary text-white py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4" type="button">
                  Send Message
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
