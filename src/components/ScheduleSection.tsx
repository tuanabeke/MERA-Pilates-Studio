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

      if (rowsRef.current) {
        gsap.fromTo(
          rowsRef.current.children,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.07,
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
      ref={sectionRef}
      className="snap-scene relative min-h-[100svh] pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-[74px] lg:pb-5 2xl:pt-[82px] 2xl:pb-7 bg-olive-900 text-ivory overflow-hidden border-t border-white/10 flex flex-col justify-between"
    >
      {/* Ambient Radial Accent */}
      <div className="ambient-halo top-10 left-0 w-[500px] h-[500px] bg-sage-300/10 pointer-events-none"></div>

      <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 flex-1 flex flex-col justify-between gap-2 2xl:gap-4">
        
        <div className="shrink-0">
          {/* Section Header */}
          <div
            ref={headerRef}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 pb-2.5 border-b border-white/10 mb-2.5 2xl:pb-3.5 2xl:mb-3.5"
          >
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-3">
                <Calendar className="w-3.5 h-3.5 text-clay-300" />
                <span className="editorial-caps text-[10px] font-bold text-sand-300 tracking-widest">
                  Atelier Timetable
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[36px] 2xl:text-[48px] font-light text-ivory leading-[1.02] tracking-tight">
                Studio <span className="italic font-normal text-sand-200">schedule.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm 2xl:text-base text-sand-300/80 font-light max-w-md leading-relaxed lg:text-right">
              Every class is capped strictly at six reformer beds. Select a session below to request availability 
              directly with our SoHo concierge.
            </p>
          </div>

          {/* Day Tabs & Optional Class Filter */}
          <div
            ref={controlsRef}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2.5 2xl:pb-3 border-b border-white/10"
          >
            <div className="flex flex-wrap items-center gap-2">
              {days.map((day) => {
                const isSelected = activeDay === day;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setActiveDay(day)}
                    className={`px-4 py-1.5 2xl:py-2 rounded-full text-xs editorial-caps font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-200 ${
                      isSelected
                        ? 'bg-white/15 text-ivory border border-sand-300/35 shadow-md'
                        : 'bg-white/5 text-sand-200 border border-transparent hover:bg-white/10 hover:text-ivory'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="schedule-filter" className="editorial-caps text-[10px] text-sand-300/70 font-semibold">
                Filter:
              </label>
              <select
                id="schedule-filter"
                value={selectedFormatFilter}
                onChange={(e) => setSelectedFormatFilter(e.target.value)}
                className="bg-forest-950/70 border border-white/15 rounded-full px-4 py-1.5 2xl:py-2 text-xs editorial-caps text-ivory focus:outline-none focus:ring-1 focus:ring-sand-300 cursor-pointer"
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
        <div ref={rowsRef} className="flex-1 min-h-0 flex flex-col justify-center divide-y divide-white/10 my-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sand-300/70 text-sm font-light">
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
                  className="py-2 sm:py-2.5 2xl:py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 group hover:bg-white/[0.02] px-3 -mx-3 rounded-2xl transition-colors duration-300"
                >
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
              );
            })
          )}
        </div>

        {/* Bottom Studio Note */}
        <div className="pt-2.5 xl:pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-300/70 gap-3 shrink-0">
          <span className="editorial-caps text-[9.5px] tracking-widest">
            12-Hour Notice Window • Organic Grip Socks Required
          </span>
          <a
            href={getWhatsAppUrl(WHATSAPP_CONFIG.privateDuetInquiry())}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-caps text-[9.5px] text-clay-300 hover:text-ivory underline transition-colors font-semibold"
          >
            Looking for Private 1-on-1 Times? Message Concierge →
          </a>
        </div>

      </div>
    </section>
  );
};
