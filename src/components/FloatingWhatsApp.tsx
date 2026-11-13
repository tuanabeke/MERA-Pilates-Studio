import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside
      aria-label="Direct WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-50 flex items-center group animate-fade-in-up"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Inquire via WhatsApp with MERA Studio Concierge"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 border border-white/20"
      >
        {/* Pulsing Presence Dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-5 h-5 fill-current" />

        {/* Expandable / Visible Label */}
        <span className="editorial-caps text-[11px] font-semibold tracking-wider hidden sm:inline text-white">
          Inquire via WhatsApp
        </span>
      </a>
    </aside>
  );
};
