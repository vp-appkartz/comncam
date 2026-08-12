const About = () => {
  return (
    <main className="pt-32 pb-section-gap relative">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-outline-variant/30 text-on-surface-variant font-label-md text-label-md mb-8">
              <span className="material-symbols-outlined text-sm">visibility</span>
              Our Vision
            </div>
            <h1 className="font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-on-background mb-6 leading-tight">
              Pioneering the <br /> Digital Horizon
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              At Comncam Solutions Ltd., we build intelligent infrastructure that empowers visionary enterprises to scale beyond boundaries. We are the architects of tomorrow's cloud ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="font-label-md text-label-md bg-primary text-white px-8 py-4 rounded-md transition-colors flex items-center gap-2 hover:bg-primary/90" href="#leadership">
                Meet the Team
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-outline-variant/30">
            <img className="w-full h-full object-cover" alt="Abstract tech composition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd-eoK5utMvDM2avlrohCQnIAVufL36w6MT0Czv8MqMcOiXP64_kz6JAEzozIkRo_45tLAKvPmFgiug8M4E3gsGZinO16a_2Q1tSeYLJbmTsprke7v6Z4r_-vVxhRXtyblBE3IbFgZ5HwsuTUKeIVtlXRNjif7RdnUlvSdgnDzM4BED-ft5oip2kFixLmgi_cIouJnyXa0YQYUDUZ9LxGcJe9aAP8AN5NAyKDznRQFyJ__YwK8-_7rFA" />
          </div>
        </div>
      </section>

      {/* Mission & Values (Bento Grid) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Core Principles</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">The foundational values that drive our engineering excellence and client partnerships.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Bento Item 1: Mission (Large) */}
          <div className="md:col-span-2 border border-outline-variant/30 rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden bg-white">
            <span className="material-symbols-outlined text-primary text-4xl mb-auto" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            <h3 className="font-headline-md text-headline-md text-on-background mb-3">Our Mission</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">To democratize access to enterprise-grade AI infrastructure, enabling startups to deploy complex models with zero friction and absolute reliability.</p>
          </div>
          {/* Bento Item 2: Innovation */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 flex flex-col relative overflow-hidden bg-white">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 p-3 border border-outline-variant/30 rounded-xl w-fit" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            <h3 className="font-headline-sm text-headline-sm text-on-background mb-2 mt-auto">Relentless Innovation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Pushing the boundaries of what's possible in cloud native architecture.</p>
          </div>
          {/* Bento Item 3: Stats */}
          <div className="border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden bg-white">
            <h4 className="font-display-lg text-display-lg text-primary font-bold mb-2">99.9%</h4>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Uptime Guarantee</p>
          </div>
          {/* Bento Item 4: Transparency */}
          <div className="md:col-span-2 border border-outline-variant/30 rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden bg-white">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl p-4 border border-outline-variant/30 rounded-xl" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-3">Radical Transparency</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">We believe in open architectures, transparent pricing, and collaborative roadmaps. Our clients are partners in our technological evolution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-section-gap relative z-10 border-t border-outline-variant/30" id="leadership">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Leadership Team</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Visionaries with decades of experience scaling global infrastructure and leading high-performance engineering teams.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Elena Rostova", title: "Chief Executive Officer", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDJV2ZpprVy3F-eeRQoqOYp3XLViWmihMnyDdqIAtEwpL_IMu82dJIdhmt112JBBAkITBft1ORcgIcJZubLuJHkwcKgTadSLtzTNZsk-OtHMK3hMUaXfuo0hz8kUWxww8JHPntOeAio3A2aizUyhUwIRAQS4Y0f7YqsiF8vF5Eg3C5N4Z9TbkezigmDbVBg3H8KGwKR2uHkb5XsRe50CDTF-HyXH8DNNGbXiXgTpLCrHehummiyzYPQw" },
              { name: "David Chen", title: "Chief Technology Officer", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFUJLqx9ASj3sJjLuXOwcr_3kuhyjh43jS-Dp3UqSnz0FIldMtzCFiF8IEwnA8JfxjxeKUlEqNq7iyzrdWQrV31A_bTtEDTkpp68AHMz89redIERv3y0k-LWYSjJCHSpry9JYIfnDbAFixDE0UpnFriPlmHJCsdpN2BUZKRAhzESMwXLRnyQ1n1_tYZTUImiRcqoT0-ZT8k6F68_5ewsKcHr_jNK51PNgQIFCHZ5rB0Agmhg25rIkTaQ" },
              { name: "Sarah Jenkins", title: "VP of Engineering", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNGLDMJKQwX9P-tD_OSpOqFFQqbw2FUgKzeIWaJug4hUove19PjGv8LdSPGdCPGHgyquTrgrnp0dgBIu8BMQoyYSWItF9egge0RE1SbpfiH7EJAPaQOGm99L3-YFWl8AXTM9oGpg5nBVmM-_JrymOE5yKTddmuDf1_P8N90-HYv9J1In0FUVif0VlKnd5dpMyPgZfj4yXaReMpjQWzMup_GMoER9Ui4jujv5nCBaoyZXJbW85sDZwXDA" },
              { name: "Marcus Thorne", title: "Head of Product", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvoaKPqVFi_1LCateu4paHvL8JXZlaIJm9k01LkRWJD0-3c5cV3C6z7ZDDqNWQ18xJo5FEUVV30Jgc0Aa64mLWZsY0wLVNdND2Va2gntt7RSfQ56Qtw5bsE384e5EmGZcQmQZc19ZQBbsF7xoAGxvoMNGbsv6MxQGIquHdOKegv_4QqY8MvkbL07fHjmwmd69bi784_bS5RJ2vxjgGocrXesooV5U2W8973_lNleSPUmNxKmwtBUXQNA" }
            ].map((leader, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative bg-surface">
                  <img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" alt={leader.name} src={leader.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-3">
                      <span className="material-symbols-outlined text-white hover:text-primary-fixed cursor-pointer transition-colors">mail</span>
                      <span className="material-symbols-outlined text-white hover:text-primary-fixed cursor-pointer transition-colors">language</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-background mb-1">{leader.name}</h4>
                <p className="font-body-md text-body-md text-primary font-medium">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
