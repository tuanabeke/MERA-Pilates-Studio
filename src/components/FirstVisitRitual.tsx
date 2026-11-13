import React from 'react';
import { Sparkles } from 'lucide-react';

export const FirstVisitRitual: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Arrival & Welcome Elixir',
      time: '15 Min Prior',
      desc: 'Step into our quiet SoHo space. Store belongings in private cedar lockers and enjoy an in-house botanical adaptogen tonic.'
    },
    {
      num: '02',
      title: 'Anatomical Calibration',
      time: 'Pre-Session',
      desc: 'Your movement director checks spinal curvature and pelvic tilt, setting your custom carriage spring tensions.'
    },
    {
      num: '03',
      title: 'The 50-Minute Practice',
      time: 'Main Flow',
      desc: 'Signature low-impact, deep muscular burn. With strictly six reformers, every breath and eccentric repetition is attended.'
    },
    {
      num: '04',
      title: 'Post-Session Apothecary',
      time: 'Unwind',
      desc: 'Relax in our styling suites with organic botanical skincare, iced eucalyptus cold towels, and cellular magnesium tonics.'
    }
  ];

  return (
    <section
      id="first-visit"
      className="relative h-screen h-[100dvh] snap-start snap-always flex flex-col justify-between overflow-hidden bg-ivory-100/50 border-t border-b border-olive/10 pt-20 sm:pt-24 pb-5 sm:pb-7"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 shrink-0">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-clay-300"></span>
            <span className="editorial-caps text-[9px] sm:text-[10px] font-semibold text-olive-500">
              Effortless Introduction
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-900 font-light leading-tight">
            The First Visit Ritual
          </h2>
          
          <p className="text-xs sm:text-sm text-olive-500 font-light">
            Designed to make your introduction welcoming, restorative, and empowering.
          </p>
        </div>

        {/* Steps Timeline — 4 Clean Cards Fitting in Viewport */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-auto py-2">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-4 sm:p-5 rounded-2xl bg-ivory/80 border border-sand-300/80 shadow-sm space-y-2 group hover:border-clay-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between border-b border-olive/10 pb-2">
                <span className="font-serif text-3xl sm:text-4xl text-clay-400 font-light block">
                  {step.num}
                </span>
                <span className="editorial-caps text-[8px] sm:text-[9px] font-semibold px-2 py-0.5 rounded-full bg-sand-200 text-olive-900">
                  {step.time}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-lg sm:text-xl text-olive-900 font-normal group-hover:text-clay-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-olive-500 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-1 text-[9px] editorial-caps font-semibold text-olive-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-sage-300" />
                <span>MERA Signature Care</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-2 sm:pt-3 border-t border-olive/10 flex items-center justify-between text-xs text-olive-400 shrink-0">
          <span className="editorial-caps text-[9px] text-olive-500">
            Complimentary Organic Grip Socks Provided on First Visit
          </span>
          <span className="editorial-caps text-[9px] text-clay-400 font-semibold">
            Private Cedar Suites
          </span>
        </div>

      </div>
    </section>
  );
};
