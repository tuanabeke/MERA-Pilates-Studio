// Configurable WhatsApp details for MERA Reformer Studio
export const WHATSAPP_CONFIG = {
  // Update this phone number to the studio's official WhatsApp number (digits only with country code, e.g. "12125550199")
  phoneNumber: "12125550199",
  
  // Default greetings & context-specific message generators
  defaultMessage: "Hello MERA Studio, I would like to inquire about experiencing a reformer session.",
  
  classInquiry: (className: string) => 
    `Hello MERA Studio, I would like to reserve a reformer carriage for the ${className} session. Could you please share the next available times?`,
    
  timetableInquiry: (time: string, className: string, day: string) =>
    `Hello MERA Studio, I would like to reserve a bed for ${className} on ${day} at ${time}.`,
    
  membershipInquiry: (tierName: string) =>
    `Hello MERA Studio, I would like to inquire about ${tierName} and membership intake availability.`,
    
  privateDuetInquiry: () =>
    `Hello MERA Studio, I am interested in inquiring about private 1-on-1 / duet reformer sessions with a master director.`
};

/**
 * Returns a direct WhatsApp click-to-chat URL with prefilled URL-encoded message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${text}`;
}
