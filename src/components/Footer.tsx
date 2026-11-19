import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Instagram, MessageCircle, ArrowUpRight, Clock } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);
  const locationCardRef = useRef<HTMLDivElement>(null);
  const colophonRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = getWhatsAppUrl(t.whatsapp.footerInquiry);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        locationCardRef.current,
        { opacity: 0, y: 24, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo(
        colophonRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="location"
      ref={footerRef}
      className="snap-scene bg-forest-950 text-ivory pt-16 sm:pt-20 lg:pt-[86px] xl:pt-[90px] pb-10 lg:pb-7 border-t border-white/10 relative overflow-hidden lg:min-h-[100svh] flex flex-col justify-between"
    >
      {/* Ambient Halo */}
      <div className="ambient-halo bottom-0 left-1/3 w-[500px] h-[500px] bg-olive-500/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1840px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-10 lg:gap-8">
        
        {/* Top / Main Showcase: SoHo Atelier Location & Sanctuary Visit */}
        <div ref={locationCardRef} className="lg:my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center p-6 sm:p-10 xl:p-12 rounded-2xl sm:rounded-3xl bg-forest-900 border border-white/10 shadow-xl lg:shadow-2xl">
            
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-clay-300"></span>
                <span className="editorial-caps text-[10px] max-sm:tracking-[0.18em] font-bold text-sand-300 tracking-[0.25em]">
                  {t.footer.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-[2rem] sm:text-5xl xl:text-6xl font-light text-ivory leading-[1.08] lg:leading-[1.04]">
                482 Broome Street, <br />
                <span className="italic font-normal text-sand-200">SoHo, New York.</span>
              </h2>

              <p className="hidden lg:block text-[13.5px] sm:text-sm xl:text-base text-sand-300/80 font-light max-w-lg leading-[1.65] lg:leading-relaxed pt-0.5">
                {t.footer.desktopDesc}
              </p>
              <p className="lg:hidden text-[13.5px] sm:text-sm text-sand-300/80 font-light max-w-lg leading-[1.6]">
                {t.footer.mobileDesc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-3.5">
                <a
                  href="https://maps.google.com/?q=482+Broome+St+New+York+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-sm:w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs editorial-caps max-sm:tracking-[0.16em] text-ivory font-semibold transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-clay-300" />
                  <span>{t.footer.mapsCta}</span>
                </a>

                <a
                  href={getWhatsAppUrl(t.whatsapp.visitInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-sm:w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full max-lg:bg-white/10 max-lg:hover:bg-white/20 max-lg:text-ivory lg:bg-ivory lg:text-forest-950 lg:hover:bg-sand-100 text-xs editorial-caps max-sm:tracking-[0.16em] font-semibold transition-all lg:shadow-md active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>{t.footer.visitCta}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 max-lg:pt-5 max-lg:border-t max-lg:border-white/10 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-clay-300 text-xs">
                  <Clock className="w-4 h-4" />
                  <span className="editorial-caps text-[10px] max-sm:tracking-[0.16em] font-bold tracking-widest">
                    {t.footer.hoursLabel}
                  </span>
                </div>
                <div className="space-y-1 text-[13px] sm:text-sm text-sand-200 font-light">
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span>{t.footer.weekdaysLabel}</span>
                    <span className="font-medium text-ivory">06:30 AM – 08:30 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1.5">
                    <span>{t.footer.weekendLabel}</span>
                    <span className="font-medium text-ivory">08:00 AM – 06:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-clay-300 text-xs">
                  <Mail className="w-4 h-4" />
                  <span className="editorial-caps text-[10px] max-sm:tracking-[0.16em] font-bold tracking-widest">
                    {t.footer.contactLabel}
                  </span>
                </div>
                <p className="text-[13px] sm:text-sm text-sand-200 font-light">
                  {t.footer.contactNote}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Editorial Brand Statement & Colophon */}
        <div ref={colophonRef} className="shrink-0 space-y-5 pt-6 lg:pt-5 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Brand Identity (Span 4) */}
            <div className="lg:col-span-4 flex items-center gap-3.5 sm:gap-4">
              <img
                src="/images/mera-monogram-white.png"
                alt={t.footer.monogramAlt}
                className="h-7 sm:h-8 w-auto object-contain shrink-0"
              />
              <div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-ivory uppercase font-light leading-none">
                    MERA
                  </span>
                  <span className="text-sand-500">•</span>
                  <span className="font-serif italic text-base sm:text-lg text-sand-200 font-light leading-none">
                    {t.footer.slogan}
                  </span>
                </div>
                <span className="text-[8.5px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sand-300/70 font-medium block mt-1.5">
                  {t.footer.addressSubline}
                </span>
              </div>
            </div>

            {/* Navigation Links (Span 5) */}
            <div className="lg:col-span-5 grid grid-cols-3 sm:flex sm:flex-wrap items-center lg:justify-center gap-x-4 sm:gap-x-6 gap-y-2.5 text-xs text-sand-300/80 font-light">
              <a href="#the-method" className="hover:text-ivory transition-colors editorial-caps text-[10px] max-sm:tracking-[0.14em]">{t.nav.links.theMethod}</a>
              <a href="#classes" className="hover:text-ivory transition-colors editorial-caps text-[10px] max-sm:tracking-[0.14em]">{t.nav.links.classes}</a>
              <a href="#sanctuary" className="hover:text-ivory transition-colors editorial-caps text-[10px] max-sm:tracking-[0.14em]">{t.nav.links.sanctuary}</a>
              <a href="#instructors" className="hover:text-ivory transition-colors editorial-caps text-[10px] max-sm:tracking-[0.14em]">{t.nav.links.instructors}</a>
              <a href="#schedule" className="hover:text-ivory transition-colors editorial-caps text-[10px] max-sm:tracking-[0.14em]">{t.nav.links.schedule}</a>
              <a href="#membership" className="hover:text-ivory transition-colors editorial-caps text-[10px] max-sm:tracking-[0.14em]">{t.nav.links.membership}</a>
            </div>

            {/* Direct Concierge CTA (Span 3 - Desktop Only since Mobile has Concierge Visit Request right above) */}
            <div className="hidden lg:flex lg:col-span-3 lg:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-[11px] editorial-caps font-semibold shadow-lg hover:bg-[#20bd5a] active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{t.footer.whatsappCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Bottom Legal & Social Row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400/60 gap-3">
            <p>{t.footer.copyright(new Date().getFullYear())}</p>
            <div className="flex items-center space-x-6 text-[11px]">
              <a href="#" className="hover:text-sand-200 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-sand-200 transition-colors">{t.footer.terms}</a>
              <span className="text-sand-500">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sand-200 transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@merareformer</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
