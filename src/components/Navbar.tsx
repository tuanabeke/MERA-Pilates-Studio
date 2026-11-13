import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

// Minimal WhatsApp brand SVG icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="#25D366"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = getWhatsAppUrl("Hello MERA Studio, I would like to inquire about reserving a reformer session.");

  // Track scroll position + which section is immediately below the navbar (light vs dark background)
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setIsScrolled(window.scrollY > 16);

      const navBottom = headerRef.current?.getBoundingClientRect().bottom ?? 68;
      const probeY = navBottom + 2;
      const lightSections = document.querySelectorAll<HTMLElement>('[data-nav-theme="light"]');
      let light = false;
      lightSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) light = true;
      });
      setOnLight(light);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const leftNavLinks = [
    { label: 'The Method', href: '#the-method' },
    { label: 'Classes', href: '#classes' },
    { label: 'The Sanctuary', href: '#sanctuary' },
  ];

  const rightNavLinks = [
    { label: 'Schedule', href: '#schedule' },
    { label: 'Instructors', href: '#instructors' },
    { label: 'Membership', href: '#membership' },
    { label: 'Location', href: '#location' },
  ];

  // Light-on-dark vs dark-on-light navbar tone. An open mobile menu always uses the dark tone.
  const lightTone = onLight && !mobileMenuOpen;

  const headerSurface = lightTone
    ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-olive/15'
    : isScrolled || mobileMenuOpen
      ? 'bg-forest-950/95 backdrop-blur-md shadow-2xl border-b border-sand-300/15'
      : 'bg-forest-950/80 backdrop-blur-md border-b border-white/10';

  const textMain = lightTone ? 'text-forest-950' : 'text-ivory';
  const textSub = lightTone ? 'text-olive-500' : 'text-sand-300/80';
  const linkTone = lightTone
    ? 'text-forest-950/80 hover:text-forest-950'
    : 'text-ivory/80 hover:text-ivory';
  const underlineTone = lightTone ? 'bg-clay-300' : 'bg-sand-200';
  const dividerTone = lightTone ? 'bg-olive/25' : 'bg-sand-300/20';
  const iconHover = lightTone ? 'hover:bg-forest-950/5' : 'hover:bg-white/10';

  const logoImages = (heightClass: string) => (
    <span className="grid shrink-0">
      <img
        src="/images/mera-monogram-white.png"
        alt="MERA Monogram"
        className={`col-start-1 row-start-1 ${heightClass} w-auto object-contain transition-opacity duration-300 ${
          lightTone ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src="/images/mera-monogram.png"
        alt=""
        aria-hidden="true"
        className={`col-start-1 row-start-1 ${heightClass} w-auto object-contain transition-opacity duration-300 ${
          lightTone ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerSurface} ${textMain}`}
    >
      <div className="w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 h-16 lg:h-[68px] flex items-center">
        <div className="w-full flex items-center justify-between gap-4">
          
          {/* DESKTOP LEFT: MERA Logo + The Method + Classes + The Sanctuary */}
          <div className="hidden lg:flex items-center lg:space-x-5 xl:space-x-9">
            <a
              href="#"
              className="flex items-center gap-2.5 xl:gap-3 group py-0.5 mr-1 xl:mr-3 shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-300 rounded-sm"
              aria-label="MERA Reformer Studio — back to top"
            >
              <span className="transition-transform duration-300 group-hover:scale-105">{logoImages('h-7')}</span>
              <div className="flex flex-col">
                <span className={`font-serif text-xl tracking-[0.22em] uppercase font-light leading-none transition-colors duration-300 ${textMain}`}>
                  MERA
                </span>
                <span className={`text-[7.5px] uppercase tracking-[0.32em] font-medium mt-1 whitespace-nowrap transition-colors duration-300 ${textSub}`}>
                  Reformer Studio
                </span>
              </div>
            </a>

            <nav aria-label="Primary sections" className="flex items-center lg:space-x-4 xl:space-x-7">
              {leftNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`editorial-caps text-[10px] xl:text-[11px] font-medium tracking-[0.16em] xl:tracking-[0.22em] whitespace-nowrap transition-colors duration-300 relative group py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-300 rounded-sm ${linkTone}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${underlineTone}`}></span>
                </a>
              ))}
            </nav>
          </div>

          {/* MOBILE BRAND LOGO */}
          <div className="lg:hidden flex items-center">
            <a
              href="#"
              className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-300 rounded-sm"
              aria-label="MERA Reformer Studio — back to top"
            >
              {logoImages('h-6')}
              <div className="flex flex-col">
                <span className={`font-serif text-lg tracking-[0.22em] uppercase font-light leading-none transition-colors duration-300 ${textMain}`}>
                  MERA
                </span>
                <span className={`text-[6.5px] uppercase tracking-[0.28em] font-medium mt-0.5 transition-colors duration-300 ${textSub}`}>
                  Reformer Studio
                </span>
              </div>
            </a>
          </div>

          {/* DESKTOP RIGHT: Schedule + Instructors + Membership + Location + WhatsApp Icon */}
          <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-7">
            <nav aria-label="Studio details" className="flex items-center lg:space-x-4 xl:space-x-7">
              {rightNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`editorial-caps text-[10px] xl:text-[11px] font-medium tracking-[0.16em] xl:tracking-[0.22em] whitespace-nowrap transition-colors duration-300 relative group py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-300 rounded-sm ${linkTone}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${underlineTone}`}></span>
                </a>
              ))}
            </nav>

            <div className={`h-4 w-[1px] mx-1 transition-colors duration-300 ${dividerTone}`}></div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Connect with MERA Concierge on WhatsApp"
              aria-label="Connect with MERA Concierge on WhatsApp"
              className={`p-2 rounded-full active:scale-95 transition-all flex items-center justify-center group focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-300 ${iconHover}`}
            >
              <WhatsAppIcon className="w-5 h-5 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </a>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Concierge"
              className={`p-2 rounded-full active:scale-95 transition-all flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-300 ${iconHover}`}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-sand-300 rounded-sm ${lightTone ? 'text-forest-950 hover:text-olive-500' : 'text-ivory hover:text-sand-200'}`}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Overlay (always dark for consistent contrast) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-forest-950/95 backdrop-blur-xl px-6 pt-6 pb-10 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300 shadow-2xl text-ivory">
          <div className="text-center pb-4 border-b border-sand-300/10">
            <p className="font-serif italic text-lg text-sand-200">
              Where breath shapes form.
            </p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-sand-300/60 mt-1">
              SoHo, New York
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="editorial-caps text-xs font-semibold text-ivory hover:text-sand-300 py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-sand-400 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-olive-400 text-ivory text-xs editorial-caps font-semibold flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Connect via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
