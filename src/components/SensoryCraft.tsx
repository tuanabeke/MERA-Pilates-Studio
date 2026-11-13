import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const SensoryCraft: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl("Hello MERA Studio, I would like to inquire about the sensory studio experience.");

  const notes = [
    {
      num: 'I',
      label: 'Scent',
      title: 'Hinoki & Smoked Sage',
      sub: 'Botanical essential oils diffused continuously for autonomic calm.'
    },
    {
      num: 'II',
      label: 'Sound',
      title: '432 Hz Resonance',
      sub: 'Mineral plaster absorbs city noise, anchoring attention on breath.'
    },
    {
      num: 'III',
      label: 'Hydration',
      title: 'Electrolyte Infusions',
      sub: 'House-steeped holy basil and magnesium tonics for cellular reset.'
    },
    {
      num: 'IV',
      label: 'Light',
      title: 'Circadian Sunbeams',
      sub: '14-foot arched apertures calibrated to natural daylight rhythms.'
    }
  ];

  return (
    <section
      id="sensory"
      className="relative h-screen h-[100dvh] snap-start snap-always flex flex-col justify-between overflow-hidden bg-ivory pt-20 sm:pt-24 pb-5 sm:pb-7 border-t border-b border-olive/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-olive/10 shrink-0">
          <div className="space-y-1">
            <span className="editorial-caps text-[9px] sm:text-[10px] font-bold text-clay-400 tracking-widest block">
              Atmospheric Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-olive-900 font-light leading-tight">
              Movement for <span className="italic font-normal text-clay-400">all five senses.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-olive-500 max-w-xs font-light shrink-0 sm:text-right">
            Calming sensory overload so muscular tissue lengthens without defensive tension.
          </p>
        </div>

        {/* Sensory Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto py-2">
          
          {/* Studio Photography — Correctly Framed */}
          <div className="lg:col-span-6 relative h-[34vh] sm:h-[44vh] lg:h-[48vh] w-full">
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-sand-300 bg-sand-200 group">
              <img
                src="/images/studio-interior-arch.jpg"
                alt="Practitioner seated on white oak reformer in serene sunlit MERA atelier"
                className="w-full h-full object-cover object-[center_36%] editorial-img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-ivory space-y-1">
                <span className="editorial-caps text-[8px] sm:text-[9px] text-sand-200 font-semibold tracking-widest">
                  Sanctuary Chamber 01
                </span>
                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-ivory font-light leading-snug">
                  "Stillness is not the absence of movement, but movement in equilibrium."
                </p>
              </div>
            </div>
          </div>

          {/* Sensory Ledger (4 Clean Elements + Action) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {notes.map((n) => (
                <div
                  key={n.num}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-sand-100/60 border border-sand-300/80 space-y-1 hover:border-olive-400 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-clay-400 font-mono">
                    <span>{n.num}</span>
                    <span className="editorial-caps text-[8px] sm:text-[9px] text-olive-400 font-semibold">
                      {n.label}
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-olive-900 font-normal">
                    {n.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-olive-500 font-light leading-snug">
                    {n.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Concierge CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-olive/10">
              <span className="text-xs text-olive-500">
                Experience the sensory atelier in SoHo.
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive-300 text-ivory text-xs editorial-caps font-semibold hover:bg-olive-400 active:scale-95 transition-all shadow-sm group"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

        {/* Footer Note */}
        <div className="pt-2 sm:pt-3 border-t border-olive/10 flex items-center justify-between text-xs text-olive-400 shrink-0">
          <span className="editorial-caps text-[9px] text-olive-500">
            Aromatic Architecture • Auditory Reset • Adapted Hydration
          </span>
          <span className="editorial-caps text-[9px] text-clay-400 font-semibold">
            Sensory Reset Protocol
          </span>
        </div>

      </div>
    </section>
  );
};
