import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SCHEDULE_ITEMS } from '../data/studioData';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../config/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'Today' | 'Tomorrow' | 'Saturday' | 'Sunday'>('Today');
  const [selectedFormatFilter, setSelectedFormatFilter] = useState<string>('all');

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  const days: ('Today' | 'Tomorrow' | 'Saturday' | 'Sunday')[] = ['Today', 'Tomorrow', 'Saturday', 'Sunday'];

  const filteredItems = SCHEDULE_ITEMS.filter((item) => {
    const matchesDay = item.day === activeDay;
    const matchesFilter = selectedFormatFilter === 'all' || item.classId === selectedFormatFilter;
    return matchesDay && matchesFilter;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );

      gsap.fromTo(
        controlsRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 86%',
            toggleActions: 'play none none none',
          }
        }
      );

      const isMobile = window.matchMedia('(max-width: 1023px)').matches;

      if (rowsRef.current) {
        gsap.fromTo(
          rowsRef.current.children,
          { opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? 12 : 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 84%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="schedule"
      data-nav-theme-mobile="light"
      ref={sectionRef}
      className="snap-scene relative lg:min-h-[100svh] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[74px] lg:pb-5 2xl:pt-[82px] 2xl:pb-7 max-lg:bg-ivory-50 max-lg:text-forest-950 lg:bg-olive-900 lg:text-ivory overflow-hidden border-t max-lg:border-olive/15 lg:border-white/10 flex flex-col justify-between"
    >
      {/* Ambient Radial Accent (Desktop only) */}
      <div className="hidden lg:block ambient-halo top-10 left-0 w-[500px] h-[500px] bg-sage-300/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-4 lg:gap-2 2xl:gap-4">
        
        <div className="shrink-0">
          {/* Section Header */}
          <div
            ref={headerRef}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 lg:gap-3 pb-4 lg:pb-2.5 border-b max-lg:border-olive/15 lg:border-white/10 mb-4 lg:mb-2.5 2xl:pb-3.5 2xl:mb-3.5"
          >
            <div className="space-y-1.5 lg:space-y-1 max-w-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Calendar className="w-3.5 h-3.5 max-lg:text-clay-400 lg:text-clay-300" />
                <span className="editorial-caps text-[10px] max-sm:tracking-[0.18em] font-bold max-lg:text-clay-400 lg:text-sand-300 tracking-widest">
                  Atelier Timetable
                </span>
              </div>

              <h2 className="font-serif text-[2rem] sm:text-5xl lg:text-[36px] 2xl:text-[48px] font-light max-lg:text-forest-950 lg:text-ivory leading-[1.06] lg:leading-[1.02] tracking-tight">
                Studio <span className="italic font-normal max-lg:text-clay-400 lg:text-sand-200">schedule.</span>
              </h2>
            </div>

            <p className="lg:hidden text-[13.5px] sm:text-sm text-olive-500 font-light max-w-md leading-[1.6]">
              Strictly six reformer beds per session.
            </p>
            <p className="hidden lg:block text-xs sm:text-sm 2xl:text-base text-sand-300/80 font-light max-w-md leading-relaxed lg:text-right">
              Every class is capped strictly at six reformer beds. Select a session below to request availability 
              directly with our SoHo concierge.
            </p>
          </div>

          {/* Day Tabs & Optional Class Filter */}
          <div
            ref={controlsRef}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 lg:pb-2.5 2xl:pb-3 border-b max-lg:border-olive/15 lg:border-white/10"
          >
            <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2">
              {days.map((day) => {
                const isSelected = activeDay === day;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setActiveDay(day)}
                    className={`max-sm:py-2.5 max-sm:px-1 sm:px-4 sm:py-1.5 2xl:py-2 rounded-full text-[10.5px] sm:text-xs editorial-caps max-sm:tracking-[0.1em] font-semibold transition-all duration-300 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200 ${
                      isSelected
                        ? 'max-lg:bg-forest-950 max-lg:text-ivory max-lg:shadow-sm lg:bg-white/15 lg:text-ivory lg:border lg:border-sand-300/35 lg:shadow-md'
                        : 'max-lg:bg-ivory max-lg:text-forest-950/75 max-lg:border max-lg:border-sand-300/80 lg:bg-white/5 lg:text-sand-200 lg:border lg:border-transparent lg:hover:bg-white/10 lg:hover:text-ivory'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <label htmlFor="schedule-filter" className="editorial-caps text-[10px] max-lg:text-olive-500 lg:text-sand-300/70 font-semibold">
                Filter:
              </label>
              <select
                id="schedule-filter"
                value={selectedFormatFilter}
                onChange={(e) => setSelectedFormatFilter(e.target.value)}
                className="max-lg:bg-ivory max-lg:text-forest-950 max-lg:border-sand-300 lg:bg-forest-950/70 border lg:border-white/15 rounded-full px-4 py-1.5 2xl:py-2 text-xs editorial-caps lg:text-ivory focus:outline-none focus:ring-1 focus:ring-sand-300 cursor-pointer"
              >
                <option value="all">All Classes</option>
                <option value="mera-sculpt">MERA Sculpt</option>
                <option value="classical-alignment">Classical Alignment</option>
                <option value="athletic-flow">Athletic Flow</option>
                <option value="restorative-decompress">Restorative Decompress</option>
              </select>
            </div>
          </div>
        </div>

        {/* Clean Typographic Timetable Rows */}
        <div ref={rowsRef} className="flex-1 min-h-0 flex flex-col justify-center divide-y max-lg:divide-olive/15 lg:divide-white/10 my-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center max-lg:text-olive-500 lg:text-sand-300/70 text-sm font-light">
              No scheduled sessions match this filter on {activeDay}. Try viewing all classes or messaging our concierge for custom times.
            </div>
          ) : (
            filteredItems.map((item) => {
              const isFull = item.spotsLeft === 0;
              const itemWhatsappUrl = getWhatsAppUrl(
                WHATSAPP_CONFIG.timetableInquiry(item.time, item.className, item.day)
              );

              return (
                <div
                  key={item.id}
                  className="py-4 md:py-2.5 2xl:py-3.5 group lg:hover:bg-white/[0.02] md:px-3 md:-mx-3 md:rounded-2xl transition-colors duration-300"
                >
                  {/* MOBILE SCHEDULE ENTRY (< lg): Clean, Effortless Studio Hierarchy + Forest Green Reserve Button */}
                  <div className="lg:hidden flex items-center justify-between gap-4">
                    <div className="min-w-0 space-y-0.5">
                      <span className="font-mono text-[11px] font-semibold text-clay-400 tracking-wider block">
                        {item.time}
                      </span>
                      <h3 className="font-serif text-[22px] text-forest-950 font-normal leading-snug truncate">
                        {item.className}
                      </h3>
                      <p className="text-[13px] text-olive-500 font-light truncate pt-0.5">
                        <span className="text-forest-950/85 font-normal">{item.instructor}</span>
                        <span className="mx-1.5 text-sand-400">·</span>
                        {isFull ? (
                          <span className="text-clay-400 font-medium">Waitlist only</span>
                        ) : (
                          <span>
                            {item.spotsLeft} {item.spotsLeft === 1 ? 'bed' : 'beds'} open
                          </span>
                        )}
                      </p>
                    </div>

                    <a
                      href={itemWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`shrink-0 min-w-[108px] h-10 px-4 rounded-full text-[10.5px] editorial-caps tracking-[0.16em] font-medium transition-all duration-200 inline-flex items-center justify-center shadow-sm active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-950 ${
                        isFull
                          ? 'bg-forest-950/80 text-ivory/90 hover:bg-forest-950'
                          : 'bg-forest-950 text-ivory hover:bg-forest-800'
                      }`}
                    >
                      <span>{isFull ? 'Waitlist' : 'Reserve'}</span>
                    </a>
                  </div>

                  {/* DESKTOP SCHEDULE ROW (lg+): Original Approved Layout */}
                  <div className="hidden lg:flex md:flex-row md:items-center justify-between gap-2.5">
                    {/* Time & Class Info */}
                    <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                      <div className="min-w-[95px]">
                        <span className="font-serif text-xl sm:text-2xl xl:text-3xl text-ivory font-light block leading-none">
                          {item.time}
                        </span>
                        <span className="font-mono text-[10px] text-sand-300/70 mt-0.5 block">
                          {item.duration}
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-serif text-lg sm:text-xl xl:text-2xl text-ivory font-normal group-hover:text-sand-200 transition-colors leading-tight">
                            {item.className}
                          </h3>
                          <span className="editorial-caps text-[9px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-sand-200 border border-white/10">
                            {item.level}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-sand-300/80 font-light">
                          <span className="font-medium text-sand-100">{item.instructor}</span>
                          <span className="text-sand-400/50">•</span>
                          <span>{item.instructorRole}</span>
                        </div>
                      </div>
                    </div>

                    {/* Availability & Harmonized WhatsApp Booking Action */}
                    <div className="flex items-center justify-between md:justify-end gap-5 pt-1 md:pt-0">
                      <div>
                        {isFull ? (
                          <span className="inline-flex items-center gap-2 text-[10px] editorial-caps font-semibold text-clay-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-clay-300"></span>
                            Waitlist Only
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-[10px] editorial-caps font-semibold text-sage-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-300 animate-pulse"></span>
                            {item.spotsLeft} of {item.totalSpots} Beds Open
                          </span>
                        )}
                      </div>

                      <a
                        href={itemWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 xl:px-6 xl:py-2.5 rounded-full text-xs editorial-caps font-semibold bg-white/10 text-sand-200 hover:bg-white/20 hover:text-ivory transition-all duration-300 flex items-center gap-2 shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-300"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                        <span>{isFull ? 'Join Waitlist' : 'Request Bed'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Studio Note */}
        <div className="pt-3 lg:pt-2.5 xl:pt-3 border-t max-lg:border-olive/15 lg:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs max-lg:text-olive-500 lg:text-sand-300/70 gap-2 sm:gap-3 shrink-0">
          <span className="hidden sm:inline editorial-caps text-[9.5px] max-sm:tracking-[0.14em] tracking-widest">
            12-Hour Notice Window • Organic Grip Socks Required
          </span>
          <a
            href={getWhatsAppUrl(WHATSAPP_CONFIG.privateDuetInquiry())}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-caps text-[9.5px] max-sm:tracking-[0.14em] max-lg:text-clay-400 lg:text-clay-300 max-lg:hover:text-forest-950 lg:hover:text-ivory underline transition-colors font-semibold"
          >
            Looking for Private 1-on-1 Times? Message Concierge →
          </a>
        </div>

      </div>
    </section>
  );
};
