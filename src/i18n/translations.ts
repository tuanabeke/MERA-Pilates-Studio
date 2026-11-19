export type Language = 'en' | 'tr';

export interface TranslatedClassFormat {
  id: string;
  name: string;
  subtitle: string;
  categoryBadge: string;
  level: string;
  duration: string;
  focus: string;
  description: string;
  keyBenefits: string[];
  springFocus: string;
  accentQuote: string;
  slides: {
    alt: string;
    caption?: string;
  }[];
}

export interface TranslatedInstructor {
  id: string;
  title: string;
  shortRole: string;
  specialty: string;
  bio: string;
  credentials: string[];
  quote: string;
}

export interface TranslatedMembershipTier {
  id: string;
  name: string;
  subtitle: string;
  cadence: string;
  badge: string;
  description: string;
  features: string[];
  cta: string;
}

export interface TranslationSchema {
  meta: {
    title: string;
  };
  whatsapp: {
    defaultMessage: string;
    navbarInquiry: string;
    footerInquiry: string;
    visitInquiry: string;
    classInquiry: (className: string) => string;
    timetableInquiry: (time: string, className: string, day: string) => string;
    membershipInquiry: (tierName: string) => string;
    privateDuetInquiry: () => string;
    instructorInquiry: (instructorName: string) => string;
  };
  nav: {
    brandSubtitle: string;
    backToTopAria: string;
    primaryNavAria: string;
    studioNavAria: string;
    mobileNavAria: string;
    languageSwitcherAria: string;
    whatsappTitle: string;
    whatsappLabel: string;
    toggleMenuAria: string;
    links: {
      theMethod: string;
      classes: string;
      sanctuary: string;
      schedule: string;
      instructors: string;
      membership: string;
      location: string;
    };
  };
  hero: {
    imageAlt: string;
    eyebrowPrimary: string;
    eyebrowSecondaryLeft: string;
    eyebrowSecondaryRight: string;
    slogan: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    cta: string;
  };
  method: {
    watermark: string;
    bracketLabel: string;
    eyebrow: string;
    headingStart: string;
    headingItalic: string;
    mobileIntro: string;
    desktopIntro: string;
    imageAlt: string;
    imageBadge: string;
    imageQuoteEyebrow: string;
    imageQuoteStart: string;
    imageQuoteItalic: string;
    pillarsHeader: string;
    pillars: {
      num: string;
      title: string;
      headline: string;
      description: string;
    }[];
    springTitle: string;
    springSubLabel: string;
    springLabels: {
      light: string;
      medium: string;
      heavy: string;
    };
    springs: {
      light: { name: string; role: string; note: string };
      medium: { name: string; role: string; note: string };
      heavy: { name: string; role: string; note: string };
    };
  };
  classes: {
    bracketLabel: string;
    eyebrow: string;
    headingStart: string;
    headingItalic: string;
    mobileIntro: string;
    desktopIntro: string;
    tablistAria: string;
    carouselAriaSuffix: string;
    prevPhotoAria: string;
    nextPhotoAria: string;
    viewPhotoAria: (num: number) => string;
    mobileDuration: string;
    mobileIntensity: string;
    desktopPacing: string;
    desktopIntensity: string;
    levelOfFive: (level: number) => string;
    desktopTargetFocus: string;
    desktopSpringApparatus: string;
    desktopOutcomes: string;
    cta: string;
    items: Record<string, TranslatedClassFormat>;
  };
  sanctuary: {
    eyebrow: string;
    headingStart: string;
    headingItalic: string;
    mobileIntro: string;
    desktopIntro: string;
    imageAlt: string;
    imageAnnotation: string;
    imageQuote: string;
    imageTags: [string, string, string];
    pillars: {
      label: string;
      title: string;
      desc: string;
    }[];
  };
  instructors: {
    bracketLabel: string;
    eyebrow: string;
    headingStart: string;
    headingItalic: string;
    desktopIntro: string;
    selectDirector: string;
    philosophyLabel: string;
    credentialsLabel: string;
    inquireCta: (firstName: string) => string;
    items: Record<string, TranslatedInstructor>;
  };
  schedule: {
    eyebrow: string;
    headingStart: string;
    headingItalic: string;
    mobileIntro: string;
    desktopIntro: string;
    days: Record<'Today' | 'Tomorrow' | 'Saturday' | 'Sunday', string>;
    filterLabel: string;
    filterOptions: {
      all: string;
      'mera-sculpt': string;
      'classical-alignment': string;
      'athletic-flow': string;
      'restorative-decompress': string;
    };
    classNames: Record<string, string>;
    levels: Record<string, string>;
    instructorRoles: Record<string, string>;
    duration50Min: string;
    emptyState: (dayLabel: string) => string;
    mobileWaitlistOnly: string;
    mobileBedsOpen: (spotsLeft: number) => string;
    mobileWaitlistCta: string;
    mobileReserveCta: string;
    desktopWaitlistOnly: string;
    desktopBedsOpen: (spotsLeft: number, totalSpots: number) => string;
    desktopWaitlistCta: string;
    desktopReserveCta: string;
    bottomNotice: string;
    privateTimesCta: string;
  };
  membership: {
    eyebrow: string;
    headingStart: string;
    headingItalic: string;
    desktopIntro: string;
    mobileIntro: string;
    privilegesLabel: string;
    defaultCta: string;
    assuranceText: string;
    privateDuetCta: string;
    tiers: Record<string, TranslatedMembershipTier>;
  };
  footer: {
    eyebrow: string;
    desktopDesc: string;
    mobileDesc: string;
    mapsCta: string;
    visitCta: string;
    hoursLabel: string;
    weekdaysLabel: string;
    weekendLabel: string;
    contactLabel: string;
    contactNote: string;
    monogramAlt: string;
    slogan: string;
    addressSubline: string;
    whatsappCta: string;
    copyright: (year: number) => string;
    privacy: string;
    terms: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    meta: {
      title: 'MERA Reformer Studio — Find your natural balance',
    },
    whatsapp: {
      defaultMessage: 'Hello MERA Studio, I would like to inquire about experiencing a reformer session.',
      navbarInquiry: 'Hello MERA Studio, I would like to inquire about reserving a reformer session.',
      footerInquiry: 'Hello MERA Studio, I would like to inquire about your reformer schedule and memberships.',
      visitInquiry: 'Hello MERA Studio, I would like to schedule a visit to the SoHo atelier.',
      classInquiry: (className) =>
        `Hello MERA Studio, I would like to reserve a reformer carriage for the ${className} session. Could you please share the next available times?`,
      timetableInquiry: (time, className, day) =>
        `Hello MERA Studio, I would like to reserve a bed for ${className} on ${day} at ${time}.`,
      membershipInquiry: (tierName) =>
        `Hello MERA Studio, I would like to inquire about ${tierName} and membership intake availability.`,
      privateDuetInquiry: () =>
        `Hello MERA Studio, I am interested in inquiring about private 1-on-1 / duet reformer sessions with a master director.`,
      instructorInquiry: (instructorName) =>
        `Hello MERA Studio, I would like to inquire about a private 1-on-1 reformer session with ${instructorName}.`,
    },
    nav: {
      brandSubtitle: 'Reformer Studio',
      backToTopAria: 'MERA Reformer Studio — back to top',
      primaryNavAria: 'Primary sections',
      studioNavAria: 'Studio details',
      mobileNavAria: 'Mobile navigation',
      languageSwitcherAria: 'Language selector',
      whatsappTitle: 'Connect with MERA Concierge on WhatsApp',
      whatsappLabel: 'WhatsApp Concierge',
      toggleMenuAria: 'Toggle Menu',
      links: {
        theMethod: 'The Method',
        classes: 'Classes',
        sanctuary: 'The Sanctuary',
        schedule: 'Schedule',
        instructors: 'Instructors',
        membership: 'Membership',
        location: 'Location',
      },
    },
    hero: {
      imageAlt: 'MERA Reformer Pilates Studio sunlit space with white oak reformers',
      eyebrowPrimary: 'SoHo Atelier • Intimate 6 Reformers Only',
      eyebrowSecondaryLeft: 'Spring Intake Open',
      eyebrowSecondaryRight: 'Bespoke Carriage Biomechanics',
      slogan: 'Where breath shapes form.',
      headlineLine1: 'The Architecture',
      headlineLine2: 'of Resistance.',
      description:
        'A boutique reformer sanctuary in SoHo designed for deep postural realignment. Stripped of fitness noise, calibrated to the rhythm of slow eccentric spring tension.',
      cta: 'Explore The Method',
    },
    method: {
      watermark: 'EQUILIBRIUM',
      bracketLabel: '[ The Method ]',
      eyebrow: 'The MERA Method',
      headingStart: 'Movement designed ',
      headingItalic: 'as architecture.',
      mobileIntro: 'Calibrated spring tension eliminates momentum and awakens dormant postural stabilizers.',
      desktopIntro:
        'We treat the body not as a machine to exhaust, but as a living structure to realign. Calibrated spring tension eliminates momentum and awakens dormant postural stabilizers.',
      imageAlt: 'Practitioner in warm golden light executing controlled kneeling extension on a black MERA reformer',
      imageBadge: 'Controlled Tension • Axial Extension',
      imageQuoteEyebrow: 'Biomechanical Focus',
      imageQuoteStart: '"Strength is not exertion. ',
      imageQuoteItalic: 'It is an act of alignment."',
      pillarsHeader: 'Three Core Pillars',
      pillars: [
        {
          num: '01',
          title: 'Controlled Recoil',
          headline: 'Strength is sculpted on the slow carriage return.',
          description:
            'Unlike dead weights where gravity dictates strain, our white oak reformer springs maintain constant linear resistance. Resisting the return elongates muscle fibers without joint impact.',
        },
        {
          num: '02',
          title: 'Skeletal Neutrality',
          headline: 'The natural plumb line of the human spine.',
          description:
            'Before applying tension, our directors calibrate your pelvic tilt and spinal curvature. Every repetition recalibrates your posture from the foundation up.',
        },
        {
          num: '03',
          title: 'Parasympathetic Flow',
          headline: 'Power without kinetic chaos.',
          description:
            'No screaming coaches or frantic tempo. Through deep diaphragmatic breath and smooth carriage glide, intense muscle work converts into deep mental clarity.',
        },
      ],
      springTitle: 'Precision Spring Resistance',
      springSubLabel: 'Tactile Feel',
      springLabels: {
        light: 'light',
        medium: 'medium',
        heavy: 'heavy',
      },
      springs: {
        light: {
          name: 'Feather Tension (1 Blue)',
          role: 'Deep Core Stabilization & Balance',
          note: 'Demands maximum internal abdominal recruitment to stabilize the free glide.',
        },
        medium: {
          name: 'Signature MERA (1 Red + 1 Blue)',
          role: 'Progressive Muscular Sculpting',
          note: 'The foundational tension balancing muscular endurance with joint decompression.',
        },
        heavy: {
          name: 'Athletic Kinetic (2 Red + 1 Green)',
          role: 'Posterior Chain Power & Stamina',
          note: 'Challenging high-resistance load for athletic propulsion and spinal endurance.',
        },
      },
    },
    classes: {
      bracketLabel: '[ Practice Offerings ]',
      eyebrow: 'Practice Offerings',
      headingStart: 'Curated pathways ',
      headingItalic: 'to strength.',
      mobileIntro:
        'Intimate six-reformer group sessions and bespoke one-on-one coaching grounded in deliberate control.',
      desktopIntro:
        'Whether refining posture in private one-to-one coaching or moving in a quiet six-reformer group, every offering is grounded in slow, deliberate control.',
      tablistAria: 'Practice offerings',
      carouselAriaSuffix: 'studio photography',
      prevPhotoAria: 'Previous group reformer photograph',
      nextPhotoAria: 'Next group reformer photograph',
      viewPhotoAria: (num) => `View group reformer photo ${num}`,
      mobileDuration: 'Duration',
      mobileIntensity: 'Intensity',
      desktopPacing: 'Session Pacing',
      desktopIntensity: 'Intensity Level',
      levelOfFive: (level) => `Level ${level}/5`,
      desktopTargetFocus: 'Target Focus',
      desktopSpringApparatus: 'Spring Apparatus',
      desktopOutcomes: 'Session Outcomes',
      cta: 'View Weekly Schedule',
      items: {
        'private-sessions': {
          id: 'private-sessions',
          name: 'Private Sessions',
          subtitle: 'One-to-One Instructor-Led Calibration',
          categoryBadge: '1-on-1 Bespoke',
          level: 'All Levels • Individualized',
          duration: 'Tailored Pacing (Flexible)',
          focus: 'Anatomical Calibration • Personal Progression • Custom Springs',
          description:
            'Dedicated one-on-one instruction tailored to your spinal alignment, joint sensitivity, and personal goals. Your director adjusts carriage height, spring resistance, and repertoire in real time.',
          keyBenefits: [
            '1-on-1 biomechanical assessment',
            'Custom spring resistance calibration',
            'Targeted rehabilitation or athletic focus',
          ],
          springFocus: 'Bespoke Apparatus • Reformer, Ladder Barrel & Wall Support',
          accentQuote: 'Every millimeter of movement calibrated specifically to your body.',
          slides: [
            {
              alt: 'MERA instructor guiding a private one-on-one client on a Reformer machine',
            },
          ],
        },
        'group-reformer': {
          id: 'group-reformer',
          name: 'Group Reformer',
          subtitle: 'Intimate Small-Group Repertoire',
          categoryBadge: 'Max 6 Reformers',
          level: 'Foundations to Progressive',
          duration: '50 Min',
          focus: 'Spinal Articulation • Full-Body Symmetry • Controlled Flow',
          description:
            'Capped strictly at six practitioners, our small-group sessions unite classical reformer precision with kinetic resistance—elevating strength and posture while preserving personal hands-on cueing.',
          keyBenefits: [
            'Strict 6-reformer intimacy',
            'Symmetric skeletal alignment',
            'Controlled muscular endurance & agility',
          ],
          springFocus: 'Balanced Tension • Long Box, Short Box & Straps',
          accentQuote: 'Shared quiet focus across six synchronized reformer carriages.',
          slides: [
            {
              alt: 'Small group practicing synchronized lateral mermaid stretch on sunlit reformers',
              caption: 'Synchronized Lateral Elongation',
            },
            {
              alt: 'Small group reformer session performing overhead leg straps work in warm studio light',
              caption: 'Controlled Strap Suspension',
            },
          ],
        },
        'mera-sculpt': {
          id: 'mera-sculpt',
          name: 'MERA Sculpt',
          subtitle: 'Signature Full-Body Precision',
          categoryBadge: 'Signature Flow',
          level: 'All Levels (Progressive)',
          duration: '50 Min',
          focus: 'Deep Core • Posterior Chain • Isometric Burn',
          description:
            'Continuous dynamic spring resistance with slow eccentric control. Designed to elongate muscle fibers and awaken deep stabilizers without joint impact.',
          keyBenefits: [
            'Targeted posterior chain toning',
            'Deep transverse abdominal activation',
            'Controlled muscular endurance',
          ],
          springFocus: 'Medium to Heavy Springs • Reformer + Sculpt Bar',
          accentQuote: 'The slow eccentric carriage return is where transformation occurs.',
          slides: [
            {
              alt: 'Practitioner executing MERA Sculpt mermaid side extension on white oak reformer',
            },
          ],
        },
        'restorative-decompress': {
          id: 'restorative-decompress',
          name: 'Restorative Decompress',
          subtitle: 'Myofascial Release & Nervous System Reset',
          categoryBadge: 'Recovery & Mobility',
          level: 'Gentle / Restorative',
          duration: '50 Min',
          focus: 'Fascial Elongation • Vagal Calming • Spinal Traction',
          description:
            'Slow traction sequences using the fluid carriage glide to decompress tight lumbar vertebrae, open hips, and down-regulate sympathetic tension.',
          keyBenefits: [
            'Release of chronic neck & lower back strain',
            'Lymphatic circulation',
            'Deep parasympathetic clarity',
          ],
          springFocus: 'Light Feather Springs • Leather Straps & Bolsters',
          accentQuote: 'Allow the springs to suspend you. Spaciousness in every joint.',
          slides: [
            {
              alt: 'Restorative reformer practice inside sunlit MERA studio beneath arched wall niche',
            },
          ],
        },
      },
    },
    sanctuary: {
      eyebrow: 'The Physical Sanctuary',
      headingStart: 'An architectural space ',
      headingItalic: 'engineered for restoration.',
      mobileIntro: 'Located on Broome Street in SoHo—crafted from mineral lime plaster and solid white oak.',
      desktopIntro:
        'Located on Broome Street in SoHo. Every tactile material—from mineral lime plaster to hand-finished white oak—is chosen to calm sensory fatigue and return you to natural equilibrium.',
      imageAlt:
        'MERA Reformer Studio interior showing solid white oak reformers, arched window and recessed illuminated niche',
      imageAnnotation: 'The Main Atelier • 482 Broome Street, SoHo',
      imageQuote: '"Where warm shadows dance against mineral lime plaster."',
      imageTags: ['Circadian Light', 'Solid Oak Frames', 'Acoustic Serenity'],
      pillars: [
        {
          label: 'Circadian Light',
          title: 'Arched Casement Windows',
          desc: '14-foot architectural apertures welcoming soft, natural morning daylight without harsh synthetic glare.',
        },
        {
          label: 'Acoustic Serenity',
          title: 'Mineral Lime Plaster',
          desc: 'Natural lime coating absorbs urban noise, creating an acoustic cocoon where the only rhythm is your breath.',
        },
        {
          label: 'Intimate Scale',
          title: 'Strictly 6 Reformers',
          desc: 'We permanently capped atelier capacity at six. You are never crowded, rushed, or lost in the background.',
        },
        {
          label: 'Botanical Craft',
          title: 'Hinoki & Smoked Sage',
          desc: 'Organic essential oils continuously diffused to open airways and trigger autonomic nervous system calm.',
        },
      ],
    },
    instructors: {
      bracketLabel: '[ Movement Directors ]',
      eyebrow: 'Anatomical Leadership',
      headingStart: 'Guided by scholars ',
      headingItalic: 'of biomechanics.',
      desktopIntro:
        'Former classical soloists, kinesiology researchers, and physical rehabilitation specialists. Every session offers continuous anatomical calibration.',
      selectDirector: 'Select Director',
      philosophyLabel: 'Movement Philosophy',
      credentialsLabel: 'Credentials & Mastery',
      inquireCta: (firstName) => `Inquire Private Session with ${firstName}`,
      items: {
        elena: {
          id: 'elena',
          title: 'Founder & Master Movement Director',
          shortRole: 'Founder',
          specialty: 'Classical Precision & Postural Biomechanics',
          bio: 'Former soloist classical ballerina trained at the Vaganova Academy. Elena spent 14 years mastering spinal articulation, pelvic alignment, and effortless poise. She founded MERA to replace chaotic gym culture with deliberate anatomical craft.',
          credentials: [
            'PMA Certified Master Practitioner',
            'Polestar Comprehensive Pilates',
            'B.A. Dance & Kinesiology',
          ],
          quote:
            'True strength is not aggressive force. It is the quiet authority of an aligned body moving in harmony with breath.',
        },
        marcus: {
          id: 'marcus',
          title: 'Senior Biomechanist & Athletic Lead',
          shortRole: 'Senior Biomechanist',
          specialty: 'Athletic Conditioning & Kinetic Chain Optimization',
          bio: 'With a background in sports kinesiology and functional rehabilitation, Marcus bridges athletic power with the surgical control of the reformer carriage, challenging stabilizing muscles at the edge of muscular fatigue.',
          credentials: [
            'M.Sc. Human Movement Science',
            'BASI Pilates Comprehensive',
            'Functional Range Conditioning (FRC)',
          ],
          quote:
            'When you control the eccentric return of the carriage, you awaken stabilizing layers ordinary workouts never reach.',
        },
        sophie: {
          id: 'sophie',
          title: 'Fascial Integration & Restorative Lead',
          shortRole: 'Fascial Integration',
          specialty: 'Myofascial Decompression & Pre/Post-Natal',
          bio: 'Sophie integrates clinical myofascial release with somatic reformer movement. Her sessions dissolve deep musculoskeletal tension and restore parasympathetic ease, decompressing spinal vertebrae with fluid grace.',
          credentials: [
            'Comprehensive Reformer Diploma',
            'Anatomy Trains for Movement Therapists',
            'Pre & Post-Natal Reformer Specialist',
          ],
          quote: 'Release the muscular gripping, find the bone stack, and let the springs carry you.',
        },
      },
    },
    schedule: {
      eyebrow: 'Atelier Timetable',
      headingStart: 'Studio ',
      headingItalic: 'schedule.',
      mobileIntro: 'Strictly six reformer beds per session.',
      desktopIntro:
        'Every class is capped strictly at six reformer beds. Select a session below to request availability directly with our SoHo concierge.',
      days: {
        Today: 'Today',
        Tomorrow: 'Tomorrow',
        Saturday: 'Saturday',
        Sunday: 'Sunday',
      },
      filterLabel: 'Filter:',
      filterOptions: {
        all: 'All Classes',
        'mera-sculpt': 'MERA Sculpt',
        'classical-alignment': 'Classical Alignment',
        'athletic-flow': 'Athletic Flow',
        'restorative-decompress': 'Restorative Decompress',
      },
      classNames: {
        'mera-sculpt': 'MERA Sculpt',
        'classical-alignment': 'Classical Alignment',
        'athletic-flow': 'Athletic Flow',
        'restorative-decompress': 'Restorative Decompress',
      },
      levels: {
        'All Levels': 'All Levels',
        Foundations: 'Foundations',
        'Level 2-3': 'Level 2-3',
        Progressive: 'Progressive',
        Intermediate: 'Intermediate',
      },
      instructorRoles: {
        'Founder & Master Coach': 'Founder & Master Coach',
        'Senior Biomechanist': 'Senior Biomechanist',
        'Athletic Specialist': 'Athletic Specialist',
      },
      duration50Min: '50 Min',
      emptyState: (dayLabel) =>
        `No scheduled sessions match this filter on ${dayLabel}. Try viewing all classes or messaging our concierge for custom times.`,
      mobileWaitlistOnly: 'Waitlist only',
      mobileBedsOpen: (spotsLeft) => `${spotsLeft} ${spotsLeft === 1 ? 'bed' : 'beds'} open`,
      mobileWaitlistCta: 'Waitlist',
      mobileReserveCta: 'Reserve',
      desktopWaitlistOnly: 'Waitlist Only',
      desktopBedsOpen: (spotsLeft, totalSpots) => `${spotsLeft} of ${totalSpots} Beds Open`,
      desktopWaitlistCta: 'Join Waitlist',
      desktopReserveCta: 'Request Bed',
      bottomNotice: '12-Hour Notice Window • Organic Grip Socks Required',
      privateTimesCta: 'Looking for Private 1-on-1 Times? Message Concierge →',
    },
    membership: {
      eyebrow: 'Atelier Commitments',
      headingStart: "Invest in your body's ",
      headingItalic: 'architecture.',
      desktopIntro:
        'Direct enrollment via WhatsApp concierge. Every tier includes our comprehensive 1-on-1 biomechanical assessment.',
      mobileIntro: 'Direct enrollment via WhatsApp concierge, including a 1-on-1 biomechanical assessment.',
      privilegesLabel: 'Privileges Included:',
      defaultCta: 'Inquire via WhatsApp',
      assuranceText: 'Zero Lock-In: Pause, transfer, or adjust anytime with 14-day notice.',
      privateDuetCta: 'Inquire About Private 1-on-1 & Duet Reformer Sessions →',
      tiers: {
        'sanctuary-trial': {
          id: 'sanctuary-trial',
          name: 'The Foundation Intake',
          subtitle: '3-Session Welcome Experience',
          cadence: 'one-time intake',
          badge: 'First Visit Ritual',
          description:
            'An intimate welcome sequence including a 1-on-1 spine assessment before small-group reformer sessions.',
          features: [
            '1x 1-on-1 Postural & Biomechanical Assessment (30 min)',
            '2x Group Reformer Sessions (Strictly 6 guests)',
            'Complimentary MERA organic grip socks',
            'Personalized spring tension calibration profile',
            'Valid for 21 days from purchase',
          ],
          cta: 'Inquire on WhatsApp',
        },
        'sanctuary-core': {
          id: 'sanctuary-core',
          name: 'The Core Membership',
          subtitle: '8 Sessions Monthly Commitment',
          cadence: 'per month',
          badge: 'Most Revered',
          description:
            'Designed for consistent weekly practice. Progressive strength, postural lift, and spinal decompression.',
          features: [
            '8 Reformer Sessions per billing cycle ($35.60/session)',
            '14-day advance priority class reservation',
            '1x Complimentary guest pass per month',
            '10% savings on MERA apothecary & curated lifestyle goods',
            'Exclusive access to master workshops & seasonal immersions',
            'Rollover up to 2 unused sessions per cycle',
          ],
          cta: 'Reserve on WhatsApp',
        },
        'sanctuary-unlimited': {
          id: 'sanctuary-unlimited',
          name: 'The Atelier Unlimited',
          subtitle: 'Unrestricted Studio Access',
          cadence: 'per month',
          badge: 'Bespoke Atelier',
          description:
            'For those who view reformer practice as a cornerstone daily ritual. Freedom across all session formats.',
          features: [
            'Unlimited Reformer Sessions across all formats',
            'Permanent reserved bed guarantee in your favorite slot',
            '2x Private 1-on-1 tuning sessions per quarter',
            'Private styling locker & complimentary laundry service',
            'Unlimited guest passes (1 per session with member)',
            'Complimentary signature MERA canvas tote bag',
          ],
          cta: 'Inquire on WhatsApp',
        },
      },
    },
    footer: {
      eyebrow: 'SoHo Atelier Location',
      desktopDesc:
        'Nestled on the quiet second floor above Broome Street, between West Broadway and Wooster. A private haven designed to quiet urban noise and return you to pure kinetic focus.',
      mobileDesc: 'Second floor above Broome Street, between West Broadway and Wooster.',
      mapsCta: 'Open in Google Maps',
      visitCta: 'Concierge Visit Request',
      hoursLabel: 'Practice Hours',
      weekdaysLabel: 'Monday – Friday',
      weekendLabel: 'Saturday & Sunday',
      contactLabel: 'Direct Contact',
      contactNote: 'concierge@merastudio.com • Strictly 6 reformers per session',
      monogramAlt: 'MERA Studio Monogram',
      slogan: 'Where breath shapes form.',
      addressSubline: 'Reformer Studio — 482 Broome St, SoHo, NY 10013',
      whatsappCta: 'WhatsApp Concierge',
      copyright: (year) => `© ${year} MERA Reformer Studio. All rights reserved.`,
      privacy: 'Privacy',
      terms: 'Terms of Atelier',
    },
  },

  tr: {
    meta: {
      title: 'MERA Reformer Studio — Doğal dengenizi keşfedin',
    },
    whatsapp: {
      defaultMessage: 'Merhaba MERA Studio, reformer seansı deneyimi hakkında bilgi almak istiyorum.',
      navbarInquiry: 'Merhaba MERA Studio, reformer seansı rezervasyonu hakkında bilgi almak istiyorum.',
      footerInquiry: 'Merhaba MERA Studio, reformer ders programınız ve üyelikler hakkında bilgi almak istiyorum.',
      visitInquiry: 'Merhaba MERA Studio, SoHo atölyenizi ziyaret etmek için randevu talep ediyorum.',
      classInquiry: (className) =>
        `Merhaba MERA Studio, ${className} seansı için reformer rezervasyonu yapmak istiyorum. En yakın uygun saatleri paylaşabilir misiniz?`,
      timetableInquiry: (time, className, day) =>
        `Merhaba MERA Studio, ${day} günü saat ${time} için ${className} dersinde yer ayırtmak istiyorum.`,
      membershipInquiry: (tierName) =>
        `Merhaba MERA Studio, ${tierName} ve üyelik kayıt uygunluğu hakkında bilgi almak istiyorum.`,
      privateDuetInquiry: () =>
        `Merhaba MERA Studio, baş eğitmen eşliğinde birebir özel / düet reformer seansları hakkında bilgi almak istiyorum.`,
      instructorInquiry: (instructorName) =>
        `Merhaba MERA Studio, ${instructorName} ile birebir özel reformer seansı hakkında bilgi almak istiyorum.`,
    },
    nav: {
      brandSubtitle: 'Reformer Stüdyosu',
      backToTopAria: 'MERA Reformer Stüdyosu — başa dön',
      primaryNavAria: 'Ana bölümler',
      studioNavAria: 'Stüdyo detayları',
      mobileNavAria: 'Mobil gezinme',
      languageSwitcherAria: 'Dil seçici',
      whatsappTitle: 'WhatsApp üzerinden MERA Danışma ile iletişime geçin',
      whatsappLabel: 'WhatsApp Danışma',
      toggleMenuAria: 'Menüyü Aç/Kapat',
      links: {
        theMethod: 'Metot',
        classes: 'Dersler',
        sanctuary: 'Stüdyo',
        schedule: 'Program',
        instructors: 'Eğitmenler',
        membership: 'Üyelik',
        location: 'Konum',
      },
    },
    hero: {
      imageAlt: 'Beyaz meşe reformerlarla gün ışığı alan MERA Reformer Pilates Stüdyosu',
      eyebrowPrimary: 'SoHo Atölye • Yalnızca 6 Reformer',
      eyebrowSecondaryLeft: 'Bahar Dönemi Kayıtları Açık',
      eyebrowSecondaryRight: 'Kişiye Özel Reformer Biyomekaniği',
      slogan: 'Nefesin forma dönüştüğü yer.',
      headlineLine1: 'Direncin',
      headlineLine2: 'Mimarisi.',
      description:
        'Derin postüral hizalanma için tasarlanmış butik bir SoHo reformer stüdyosu. Spor salonu gürültüsünden arınmış, yavaş eksantrik yay direncinin ritmine göre kalibre edilmiş.',
      cta: 'Metodu Keşfet',
    },
    method: {
      watermark: 'DENGE',
      bracketLabel: '[ Metot ]',
      eyebrow: 'MERA Metodu',
      headingStart: 'Mimari olarak tasarlanmış ',
      headingItalic: 'hareket.',
      mobileIntro:
        'Kalibre edilmiş yay direnci ivmeyi ortadan kaldırır ve derin postüral dengeleyicileri harekete geçirir.',
      desktopIntro:
        'Bedeni tüketilecek bir makine değil, yeniden hizalanacak canlı bir yapı olarak görüyoruz. Kalibre edilmiş yay direnci ivmeyi ortadan kaldırır ve derin postüral dengeleyicileri uyandırır.',
      imageAlt: 'Sıcak gün ışığında siyah MERA reformer üzerinde kontrollü uzama hareketi yapan eğitmen',
      imageBadge: 'Kontrollü Direnç • Eksenel Uzama',
      imageQuoteEyebrow: 'Biyomekanik Odak',
      imageQuoteStart: '"Güç, aşırı efor değildir. ',
      imageQuoteItalic: 'Bir hizalanma sanatıdır."',
      pillarsHeader: 'Üç Temel İlke',
      pillars: [
        {
          num: '01',
          title: 'Kontrollü Geri Dönüş',
          headline: 'Güç, taşıyıcının yavaş geri dönüşünde şekillenir.',
          description:
            'Yerçekiminin yükü belirlediği serbest ağırlıkların aksine, beyaz meşe reformer yaylarımız kesintisiz doğrusal direnç sunar. Geri dönüşe direnmek, eklemlere yük bindirmeden kas liflerini uzatır.',
        },
        {
          num: '02',
          title: 'İskelet Nötralliği',
          headline: 'İnsan omurgasının doğal denge ekseni.',
          description:
            'Direnç uygulamadan önce eğitmenlerimiz pelvik açınızı ve omurga eğrinizi hassas biçimde değerlendirir. Her tekrar, duruşunuzu temelden yukarı yeniden hizalar.',
        },
        {
          num: '03',
          title: 'Parasempatik Akış',
          headline: 'Kaos olmadan gerçek güç.',
          description:
            'Bağıran eğitmenler ya da telaşlı tempolar yok. Derin diyafram nefesi ve akıcı taşıyıcı hareketiyle yoğun kas çalışması zihinsel berraklığa dönüşür.',
        },
      ],
      springTitle: 'Hassas Yay Direnci',
      springSubLabel: 'Dokunsal His',
      springLabels: {
        light: 'hafif',
        medium: 'orta',
        heavy: 'ağır',
      },
      springs: {
        light: {
          name: 'Tüy Hafifliği (1 Mavi)',
          role: 'Derin Core Stabilizasyonu & Denge',
          note: 'Serbest kayışı dengelemek için derin karın kaslarının maksimum aktivasyonunu gerektirir.',
        },
        medium: {
          name: 'İmza MERA (1 Kırmızı + 1 Mavi)',
          role: 'Kademeli Kas Şekillendirme',
          note: 'Kas dayanıklılığı ile eklem rahatlamasını dengeleyen temel direnç ayarı.',
        },
        heavy: {
          name: 'Atletik Kinetik (2 Kırmızı + 1 Yeşil)',
          role: 'Arka Zincir Gücü & Dayanıklılık',
          note: 'Atletik itiş gücü ve omurga dayanıklılığı için yüksek dirençli çalışma.',
        },
      },
    },
    classes: {
      bracketLabel: '[ Ders Seçenekleri ]',
      eyebrow: 'Ders Seçenekleri',
      headingStart: 'Güce giden ',
      headingItalic: 'özel rotalar.',
      mobileIntro:
        'Bilinçli kontrol temeline dayalı, altı reformerlık butik grup dersleri ve kişiye özel birebir koçluk.',
      desktopIntro:
        'İster birebir özel koçlukla duruşunuzu inceltin, ister sakin altı kişilik grup seansında hareket edin; her ders yavaş ve bilinçli kontrole dayanır.',
      tablistAria: 'Ders seçenekleri',
      carouselAriaSuffix: 'stüdyo fotoğrafları',
      prevPhotoAria: 'Önceki grup reformer fotoğrafı',
      nextPhotoAria: 'Sonraki grup reformer fotoğrafı',
      viewPhotoAria: (num) => `Grup reformer fotoğrafı ${num} görüntüle`,
      mobileDuration: 'Süre',
      mobileIntensity: 'Yoğunluk',
      desktopPacing: 'Seans Süresi',
      desktopIntensity: 'Yoğunluk Seviyesi',
      levelOfFive: (level) => `Seviye ${level}/5`,
      desktopTargetFocus: 'Hedef Odak',
      desktopSpringApparatus: 'Yay & Ekipman',
      desktopOutcomes: 'Seans Kazanımları',
      cta: 'Haftalık Programı Gör',
      items: {
        'private-sessions': {
          id: 'private-sessions',
          name: 'Özel Seanslar',
          subtitle: 'Birebir Eğitmen Eşliğinde Kalibrasyon',
          categoryBadge: '1-e-1 Kişiye Özel',
          level: 'Tüm Seviyeler • Kişiselleştirilmiş',
          duration: 'Kişiye Özel Tempo (Esnek)',
          focus: 'Anatomik Kalibrasyon • Kişisel İlerleme • Özel Yay Ayarı',
          description:
            'Omurga hizalanmanıza, eklem hassasiyetinize ve kişisel hedeflerinize göre uyarlanmış birebir eğitim. Eğitmeniniz taşıyıcı yüksekliğini, yay direncini ve repertuvarı anlık olarak ayarlar.',
          keyBenefits: [
            'Birebir biyomekanik değerlendirme',
            'Kişiye özel yay direnci kalibrasyonu',
            'Hedefe yönelik rehabilitasyon veya atletik odak',
          ],
          springFocus: 'Kişiye Özel Ekipman • Reformer, Ladder Barrel & Duvar Desteği',
          accentQuote: 'Hareketin her milimetresi yalnızca sizin bedeninize göre kalibre edilir.',
          slides: [
            {
              alt: 'Reformer cihazı üzerinde birebir özel seans yönlendiren MERA eğitmeni',
            },
          ],
        },
        'group-reformer': {
          id: 'group-reformer',
          name: 'Grup Reformer',
          subtitle: 'Butik Küçük Grup Repertuvarı',
          categoryBadge: 'En Fazla 6 Reformer',
          level: 'Temelden İleri Seviyeye',
          duration: '50 Dk',
          focus: 'Omurga Artikülasyonu • Tüm Vücut Simetrisi • Kontrollü Akış',
          description:
            'Kesinlikle altı kişiyle sınırlı küçük grup seanslarımız, klasik reformer hassasiyetini kinetik dirençle birleştirir; kişisel dokunsal yönlendirmeyi koruyarak güç ve duruşu yükseltir.',
          keyBenefits: [
            'En fazla 6 reformerlık butik deneyim',
            'Simetrik iskelet hizalanması',
            'Kontrollü kas dayanıklılığı ve çeviklik',
          ],
          springFocus: 'Dengeli Direnç • Uzun Kutu, Kısa Kutu & Kayışlar',
          accentQuote: 'Senkronize altı reformer üzerinde paylaşılan dingin odak.',
          slides: [
            {
              alt: 'Gün ışığı alan reformerlar üzerinde senkronize yan esneme yapan küçük grup',
              caption: 'Senkronize Lateral Uzama',
            },
            {
              alt: 'Sıcak stüdyo ışığında kayışlarla bacak çalışması yapan küçük grup reformer seansı',
              caption: 'Kontrollü Kayış Süspansiyonu',
            },
          ],
        },
        'mera-sculpt': {
          id: 'mera-sculpt',
          name: 'MERA Sculpt',
          subtitle: 'İmza Tüm Vücut Hassasiyeti',
          categoryBadge: 'İmza Akış',
          level: 'Tüm Seviyeler (Kademeli)',
          duration: '50 Dk',
          focus: 'Derin Core • Arka Zincir • İzometrik Yanma',
          description:
            'Yavaş eksantrik kontrolle kesintisiz dinamik yay direnci. Eklemlere darbe uygulamadan kas liflerini uzatmak ve derin dengeleyici kasları uyandırmak için tasarlandı.',
          keyBenefits: [
            'Hedefli arka zincir sıkılaşması',
            'Derin transvers karın aktivasyonu',
            'Kontrollü kas dayanıklılığı',
          ],
          springFocus: 'Orta ve Ağır Yaylar • Reformer + Sculpt Bar',
          accentQuote: 'Dönüşüm, taşıyıcının yavaş eksantrik geri dönüşünde gerçekleşir.',
          slides: [
            {
              alt: 'Beyaz meşe reformer üzerinde MERA Sculpt yan uzama hareketi yapan sporcu',
            },
          ],
        },
        'restorative-decompress': {
          id: 'restorative-decompress',
          name: 'Restoratif Gevşeme',
          subtitle: 'Miyofasyal Rahatlama & Sinir Sistemi Yenilenmesi',
          categoryBadge: 'Toparlanma & Mobilite',
          level: 'Nazik / Restoratif',
          duration: '50 Dk',
          focus: 'Fasyal Uzama • Vagal Sakinleşme • Omurga Dekompresyonu',
          description:
            'Gergin bel omurlarını rahatlatmak, kalçaları açmak ve sempatik gerginliği yatıştırmak için akıcı taşıyıcı kayışını kullanan yavaş traksiyon sekansları.',
          keyBenefits: [
            'Kronik boyun ve bel gerginliğinde rahatlama',
            'Lenfatik dolaşım desteği',
            'Derin parasempatik zihinsel berraklık',
          ],
          springFocus: 'Hafif Tüy Yaylar • Deri Kayışlar & Destek Yastıkları',
          accentQuote: 'Yayların sizi taşımasına izin verin. Her eklemde ferahlık.',
          slides: [
            {
              alt: 'Kemerli duvar nişi altında gün ışığı alan MERA stüdyosunda restoratif reformer pratiği',
            },
          ],
        },
      },
    },
    sanctuary: {
      eyebrow: 'Fiziksel Sığınak',
      headingStart: 'Yenilenme için tasarlanmış ',
      headingItalic: 'mimari bir alan.',
      mobileIntro: "SoHo, Broome Street'te — mineral kireç sıva ve masif beyaz meşe ile şekillendirildi.",
      desktopIntro:
        "SoHo, Broome Street'te. Mineral kireç sıvadan el işçiliği beyaz meşeye kadar her dokunsal malzeme, duyusal yorgunluğu yatıştırmak ve sizi doğal dengenize döndürmek için seçildi.",
      imageAlt:
        'Masif beyaz meşe reformerlar, kemerli pencere ve aydınlatmalı nişi gösteren MERA Reformer Stüdyosu iç mekanı',
      imageAnnotation: 'Ana Atölye • 482 Broome Street, SoHo',
      imageQuote: '"Sıcak gölgelerin mineral kireç sıva üzerinde dans ettiği yer."',
      imageTags: ['Doğal Gün Işığı', 'Masif Meşe Çerçeveler', 'Akustik Sükunet'],
      pillars: [
        {
          label: 'Doğal Gün Işığı',
          title: 'Kemerli Yüksek Pencereler',
          desc: 'Yapay parlamadan uzak, yumuşak doğal sabah ışığını içeri davet eden 4 metrelik mimari açıklıklar.',
        },
        {
          label: 'Akustik Sükunet',
          title: 'Mineral Kireç Sıva',
          desc: 'Doğal kireç kaplama şehir gürültüsünü emerek yalnızca nefesinizin ritminin duyulduğu akustik bir koza yaratır.',
        },
        {
          label: 'Butik Ölçek',
          title: 'Yalnızca 6 Reformer',
          desc: 'Atölye kapasitemizi kalıcı olarak altı ile sınırladık. Asla kalabalıkta kaybolmaz ya da aceleye getirilmezsiniz.',
        },
        {
          label: 'Botanik Dokunuş',
          title: 'Hinoki & Tütsülenmiş Adaçayı',
          desc: 'Nefes yollarını açmak ve otonom sinir sistemini yatıştırmak için sürekli yayılan organik esansiyel yağlar.',
        },
      ],
    },
    instructors: {
      bracketLabel: '[ Hareket Direktörleri ]',
      eyebrow: 'Anatomik Liderlik',
      headingStart: 'Biyomekanik uzmanlarının ',
      headingItalic: 'rehberliğinde.',
      desktopIntro:
        'Eski klasik bale solistleri, kinezyoloji araştırmacıları ve fiziksel rehabilitasyon uzmanları. Her seans kesintisiz anatomik kalibrasyon sunar.',
      selectDirector: 'Eğitmen Seçin',
      philosophyLabel: 'Hareket Felsefesi',
      credentialsLabel: 'Uzmanlık & Sertifikalar',
      inquireCta: (firstName) => `${firstName} ile Özel Seans Sor`,
      items: {
        elena: {
          id: 'elena',
          title: 'Kurucu & Baş Hareket Direktörü',
          shortRole: 'Kurucu',
          specialty: 'Klasik Hassasiyet & Postüral Biyomekanik',
          bio: 'Vaganova Akademisi mezunu eski klasik bale solisti. Elena 14 yıl boyunca omurga artikülasyonu, pelvik hizalanma ve zahmetsiz zarafet üzerine uzmanlaştı. Kaotik spor salonu kültürünü bilinçli anatomik zanaatla değiştirmek için MERA’yı kurdu.',
          credentials: [
            'PMA Sertifikalı Baş Eğitmen',
            'Polestar Kapsamlı Pilates',
            'Dans & Kinezyoloji Lisans',
          ],
          quote:
            'Gerçek güç, sert bir zorlama değildir. Nefesle uyum içinde hareket eden hizalanmış bir bedenin sakin otoritesidir.',
        },
        marcus: {
          id: 'marcus',
          title: 'Kıdemli Biyomekanist & Atletik Lider',
          shortRole: 'Kıdemli Biyomekanist',
          specialty: 'Atletik Kondisyon & Kinetik Zincir Optimizasyonu',
          bio: 'Spor kinezyolojisi ve fonksiyonel rehabilitasyon geçmişine sahip Marcus, atletik gücü reformer taşıyıcısının cerrahi kontrolüyle birleştirerek derin dengeleyici kasları sınır noktalarında çalıştırır.',
          credentials: [
            'İnsan Hareket Bilimi Yüksek Lisans',
            'BASI Kapsamlı Pilates',
            'Fonksiyonel Hareket Açıklığı (FRC)',
          ],
          quote:
            'Taşıyıcının eksantrik geri dönüşünü kontrol ettiğinizde, sıradan antrenmanların hiç ulaşamadığı dengeleyici kas katmanlarını uyandırırsınız.',
        },
        sophie: {
          id: 'sophie',
          title: 'Fasya Entegrasyonu & Restoratif Lider',
          shortRole: 'Fasya Entegrasyonu',
          specialty: 'Miyofasyal Dekompresyon & Doğum Öncesi/Sonrası',
          bio: 'Sophie, klinik miyofasyal gevşemeyi somatik reformer hareketiyle bütünleştirir. Seansları derin kas-iskelet gerginliğini çözer, parasempatik dinginliği geri kazandırır ve omurları akıcı bir zarafetle rahatlatır.',
          credentials: [
            'Kapsamlı Reformer Diploması',
            'Hareket Terapistleri için Anatomy Trains',
            'Doğum Öncesi & Sonrası Reformer Uzmanı',
          ],
          quote: 'Kas kasılmasını serbest bırakın, kemik dizilimini bulun ve yayların sizi taşımasına izin verin.',
        },
      },
    },
    schedule: {
      eyebrow: 'Atölye Ders Programı',
      headingStart: 'Stüdyo ',
      headingItalic: 'programı.',
      mobileIntro: 'Her seans en fazla altı reformer ile sınırlıdır.',
      desktopIntro:
        'Her ders en fazla altı reformer ile sınırlıdır. Aşağıdan bir seans seçerek SoHo danışma ekibimizden doğrudan yer durumu sorgulayabilirsiniz.',
      days: {
        Today: 'Bugün',
        Tomorrow: 'Yarın',
        Saturday: 'Cumartesi',
        Sunday: 'Pazar',
      },
      filterLabel: 'Filtre:',
      filterOptions: {
        all: 'Tüm Dersler',
        'mera-sculpt': 'MERA Sculpt',
        'classical-alignment': 'Klasik Hizalanma',
        'athletic-flow': 'Atletik Akış',
        'restorative-decompress': 'Restoratif Gevşeme',
      },
      classNames: {
        'mera-sculpt': 'MERA Sculpt',
        'classical-alignment': 'Klasik Hizalanma',
        'athletic-flow': 'Atletik Akış',
        'restorative-decompress': 'Restoratif Gevşeme',
      },
      levels: {
        'All Levels': 'Tüm Seviyeler',
        Foundations: 'Temel Seviye',
        'Level 2-3': 'Seviye 2-3',
        Progressive: 'İleri Seviye',
        Intermediate: 'Orta Seviye',
      },
      instructorRoles: {
        'Founder & Master Coach': 'Kurucu & Baş Eğitmen',
        'Senior Biomechanist': 'Kıdemli Biyomekanist',
        'Athletic Specialist': 'Atletik Uzman',
      },
      duration50Min: '50 Dk',
      emptyState: (dayLabel) =>
        `${dayLabel} için bu filtreye uygun planlı seans bulunmuyor. Tüm dersleri görüntüleyebilir veya özel saatler için danışma ekibimize yazabilirsiniz.`,
      mobileWaitlistOnly: 'Yalnızca yedek liste',
      mobileBedsOpen: (spotsLeft) => `${spotsLeft} yer müsait`,
      mobileWaitlistCta: 'Yedek Liste',
      mobileReserveCta: 'Rezerve Et',
      desktopWaitlistOnly: 'Yalnızca Yedek Liste',
      desktopBedsOpen: (spotsLeft, totalSpots) => `${totalSpots} Yerden ${spotsLeft} Müsait`,
      desktopWaitlistCta: 'Yedek Listeye Katıl',
      desktopReserveCta: 'Yer Ayırt',
      bottomNotice: '12 Saat Önceden Bildirim • Organik Kaymaz Çorap Zorunludur',
      privateTimesCta: 'Birebir Özel Seans Saatleri mi Arıyorsunuz? Danışmaya Yazın →',
    },
    membership: {
      eyebrow: 'Atölye Üyelikleri',
      headingStart: 'Bedeninizin mimarisine ',
      headingItalic: 'yatırım yapın.',
      desktopIntro:
        'WhatsApp danışma hattı üzerinden doğrudan kayıt. Her paket kapsamlı birebir biyomekanik değerlendirme içerir.',
      mobileIntro: 'Birebir biyomekanik değerlendirme dahil, WhatsApp danışma üzerinden doğrudan kayıt.',
      privilegesLabel: 'Dahil Olan Ayrıcalıklar:',
      defaultCta: 'WhatsApp ile Bilgi Al',
      assuranceText: 'Taahhütsüz Üyelik: 14 gün önceden bildirerek dilediğiniz zaman dondurun, devredin veya değiştirin.',
      privateDuetCta: 'Birebir Özel ve Düet Reformer Seansları Hakkında Bilgi Alın →',
      tiers: {
        'sanctuary-trial': {
          id: 'sanctuary-trial',
          name: 'Temel Başlangıç Paketi',
          subtitle: '3 Seanslık Hoş Geldin Deneyimi',
          cadence: 'tek seferlik başlangıç',
          badge: 'İlk Ziyaret Ritüeli',
          description:
            'Küçük grup reformer seansları öncesinde birebir omurga değerlendirmesi içeren özenli bir başlangıç serisi.',
          features: [
            '1x Birebir Postüral & Biyomekanik Değerlendirme (30 dk)',
            '2x Grup Reformer Seansı (En fazla 6 misafir)',
            'MERA organik kaymaz çorap hediyesi',
            'Kişiye özel yay direnci kalibrasyon profili',
            'Satın alımdan itibaren 21 gün geçerlidir',
          ],
          cta: 'WhatsApp ile Bilgi Al',
        },
        'sanctuary-core': {
          id: 'sanctuary-core',
          name: 'Core Üyelik',
          subtitle: 'Aylık 8 Seanslık Düzenli Program',
          cadence: 'aylık',
          badge: 'En Çok Tercih Edilen',
          description:
            'Düzenli haftalık pratik için tasarlandı. Kademeli güçlenme, postüral yükselme ve omurga rahatlaması.',
          features: [
            'Fatura dönemi başına 8 Reformer Seansı ($35.60/seans)',
            '14 gün önceden öncelikli ders rezervasyonu',
            'Ayda 1x ücretsiz misafir katılım hakkı',
            'MERA apothecary ve seçkin ürünlerde %10 avantaj',
            'Usta atölyelerine ve sezonluk buluşmalara özel erişim',
            'Kullanılmayan en fazla 2 seansı sonraki döneme aktarma',
          ],
          cta: 'WhatsApp ile Yer Ayırt',
        },
        'sanctuary-unlimited': {
          id: 'sanctuary-unlimited',
          name: 'Atölye Sınırsız',
          subtitle: 'Sınırsız Stüdyo Erişimi',
          cadence: 'aylık',
          badge: 'Özel Atölye',
          description:
            'Reformer pratiğini günlük bir ritüel olarak benimseyenler için. Tüm ders formatlarında tam özgürlük.',
          features: [
            'Tüm ders formatlarında Sınırsız Reformer Seansı',
            'Favori saatinizde kalıcı reformer rezervasyon garantisi',
            'Üç ayda bir 2x birebir özel kalibrasyon seansı',
            'Kişisel dolap ve ücretsiz tekstil bakım hizmeti',
            'Sınırsız misafir hakkı (üye ile seans başına 1 misafir)',
            'İmza MERA kanvas bez çanta hediyesi',
          ],
          cta: 'WhatsApp ile Bilgi Al',
        },
      },
    },
    footer: {
      eyebrow: 'SoHo Atölye Konumu',
      desktopDesc:
        'Broome Street üzerinde, West Broadway ile Wooster arasındaki sakin ikinci katta yer alır. Şehir gürültüsünü geride bırakıp saf kinetik odağa dönmeniz için tasarlanmış özel bir sığınak.',
      mobileDesc: 'Broome Street, West Broadway ile Wooster arasındaki ikinci kat.',
      mapsCta: "Google Haritalar'da Aç",
      visitCta: 'Stüdyo Ziyareti Talep Et',
      hoursLabel: 'Çalışma Saatleri',
      weekdaysLabel: 'Pazartesi – Cuma',
      weekendLabel: 'Cumartesi & Pazar',
      contactLabel: 'Doğrudan İletişim',
      contactNote: 'concierge@merastudio.com • Her seans en fazla 6 reformer',
      monogramAlt: 'MERA Stüdyo Monogramı',
      slogan: 'Nefesin forma dönüştüğü yer.',
      addressSubline: 'Reformer Stüdyosu — 482 Broome St, SoHo, NY 10013',
      whatsappCta: 'WhatsApp Danışma',
      copyright: (year) => `© ${year} MERA Reformer Studio. Tüm hakları saklıdır.`,
      privacy: 'Gizlilik',
      terms: 'Atölye Koşulları',
    },
  },
};
