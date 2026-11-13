export interface ClassImageSlide {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
}

export interface ClassFormat {
  id: string;
  name: string;
  subtitle: string;
  categoryBadge: string;
  level: string;
  duration: string;
  focus: string;
  intensity: number; // 1-5
  description: string;
  keyBenefits: string[];
  springFocus: string;
  image: string;
  images: ClassImageSlide[];
  accentQuote: string;
}

/**
 * Configurable session durations.
 * Group formats reflect existing 50-minute studio schedule data.
 * Update `privateSessions` below once exact 1-on-1 duration is finalized by the studio.
 */
export const STUDIO_DURATION_CONFIG = {
  privateSessions: 'Tailored Pacing (Flexible)',
  groupReformer: '50 Min',
  meraSculpt: '50 Min',
  restorativeDecompress: '50 Min',
} as const;

export interface ScheduleItem {
  id: string;
  time: string;
  className: string;
  classId: string;
  instructor: string;
  instructorRole: string;
  level: string;
  duration: string;
  spotsLeft: number;
  totalSpots: number;
  day: 'Today' | 'Tomorrow' | 'Saturday' | 'Sunday';
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  credentials: string[];
  quote: string;
  image: string;
}

export const CLASS_FORMATS: ClassFormat[] = [
  {
    id: 'private-sessions',
    name: 'Private Sessions',
    subtitle: 'One-to-One Instructor-Led Calibration',
    categoryBadge: '1-on-1 Bespoke',
    level: 'All Levels • Individualized',
    duration: STUDIO_DURATION_CONFIG.privateSessions,
    focus: 'Anatomical Calibration • Personal Progression • Custom Springs',
    intensity: 3,
    description: 'Dedicated one-on-one instruction tailored to your spinal alignment, joint sensitivity, and personal goals. Your director adjusts carriage height, spring resistance, and repertoire in real time.',
    keyBenefits: ['1-on-1 biomechanical assessment', 'Custom spring resistance calibration', 'Targeted rehabilitation or athletic focus'],
    springFocus: 'Bespoke Apparatus • Reformer, Ladder Barrel & Wall Support',
    image: '/images/Trainer-and-client-pilates-reformer.jpg',
    images: [
      {
        src: '/images/Trainer-and-client-pilates-reformer.jpg',
        alt: 'MERA instructor guiding a private one-on-one client on a Reformer machine',
        objectPosition: 'object-[center_92%]'
      }
    ],
    accentQuote: 'Every millimeter of movement calibrated specifically to your body.'
  },
  {
    id: 'group-reformer',
    name: 'Group Reformer',
    subtitle: 'Intimate Small-Group Repertoire',
    categoryBadge: 'Max 6 Reformers',
    level: 'Foundations to Progressive',
    duration: STUDIO_DURATION_CONFIG.groupReformer,
    focus: 'Spinal Articulation • Full-Body Symmetry • Controlled Flow',
    intensity: 4,
    description: 'Capped strictly at six practitioners, our small-group sessions unite classical reformer precision with kinetic resistance—elevating strength and posture while preserving personal hands-on cueing.',
    keyBenefits: ['Strict 6-reformer intimacy', 'Symmetric skeletal alignment', 'Controlled muscular endurance & agility'],
    springFocus: 'Balanced Tension • Long Box, Short Box & Straps',
    image: '/images/group-reformar-pilates.jpg',
    images: [
      {
        src: '/images/group-reformar-pilates.jpg',
        alt: 'Small group practicing synchronized lateral mermaid stretch on sunlit reformers',
        caption: 'Synchronized Lateral Elongation',
        objectPosition: 'object-[center_75%]'
      },
      {
        src: '/images/group-reformer-session.jpg',
        alt: 'Small group reformer session performing overhead leg straps work in warm studio light',
        caption: 'Controlled Strap Suspension',
        objectPosition: 'object-[center_50%]'
      }
    ],
    accentQuote: 'Shared quiet focus across six synchronized reformer carriages.'
  },
  {
    id: 'mera-sculpt',
    name: 'MERA Sculpt',
    subtitle: 'Signature Full-Body Precision',
    categoryBadge: 'Signature Flow',
    level: 'All Levels (Progressive)',
    duration: STUDIO_DURATION_CONFIG.meraSculpt,
    focus: 'Deep Core • Posterior Chain • Isometric Burn',
    intensity: 4,
    description: 'Continuous dynamic spring resistance with slow eccentric control. Designed to elongate muscle fibers and awaken deep stabilizers without joint impact.',
    keyBenefits: ['Targeted posterior chain toning', 'Deep transverse abdominal activation', 'Controlled muscular endurance'],
    springFocus: 'Medium to Heavy Springs • Reformer + Sculpt Bar',
    image: '/images/reformer-exercise-mermaid.jpg',
    images: [
      {
        src: '/images/reformer-exercise-mermaid.jpg',
        alt: 'Practitioner executing MERA Sculpt mermaid side extension on white oak reformer',
        objectPosition: 'object-center'
      }
    ],
    accentQuote: 'The slow eccentric carriage return is where transformation occurs.'
  },
  {
    id: 'restorative-decompress',
    name: 'Restorative Decompress',
    subtitle: 'Myofascial Release & Nervous System Reset',
    categoryBadge: 'Recovery & Mobility',
    level: 'Gentle / Restorative',
    duration: STUDIO_DURATION_CONFIG.restorativeDecompress,
    focus: 'Fascial Elongation • Vagal Calming • Spinal Traction',
    intensity: 2,
    description: 'Slow traction sequences using the fluid carriage glide to decompress tight lumbar vertebrae, open hips, and down-regulate sympathetic tension.',
    keyBenefits: ['Release of chronic neck & lower back strain', 'Lymphatic circulation', 'Deep parasympathetic clarity'],
    springFocus: 'Light Feather Springs • Leather Straps & Bolsters',
    image: '/images/studio-interior-arch.jpg',
    images: [
      {
        src: '/images/studio-interior-arch.jpg',
        alt: 'Restorative reformer practice inside sunlit MERA studio beneath arched wall niche',
        objectPosition: 'object-[center_42%]'
      }
    ],
    accentQuote: 'Allow the springs to suspend you. Spaciousness in every joint.'
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 's1',
    time: '07:30 AM',
    className: 'MERA Sculpt',
    classId: 'mera-sculpt',
    instructor: 'Elena Rostova',
    instructorRole: 'Founder & Master Coach',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 2,
    totalSpots: 6,
    day: 'Today'
  },
  {
    id: 's2',
    time: '09:00 AM',
    className: 'Classical Alignment',
    classId: 'classical-alignment',
    instructor: 'Marcus Vance',
    instructorRole: 'Senior Biomechanist',
    level: 'Foundations',
    duration: '50 Min',
    spotsLeft: 1,
    totalSpots: 6,
    day: 'Today'
  },
  {
    id: 's3',
    time: '12:15 PM',
    className: 'Athletic Flow',
    classId: 'athletic-flow',
    instructor: 'Sophie Chen',
    instructorRole: 'Athletic Specialist',
    level: 'Level 2-3',
    duration: '50 Min',
    spotsLeft: 0,
    totalSpots: 6,
    day: 'Today'
  },
  {
    id: 's4',
    time: '05:30 PM',
    className: 'MERA Sculpt',
    classId: 'mera-sculpt',
    instructor: 'Elena Rostova',
    instructorRole: 'Founder & Master Coach',
    level: 'Progressive',
    duration: '50 Min',
    spotsLeft: 3,
    totalSpots: 6,
    day: 'Today'
  },
  {
    id: 's5',
    time: '07:00 PM',
    className: 'Restorative Decompress',
    classId: 'restorative-decompress',
    instructor: 'Sophie Chen',
    instructorRole: 'Athletic Specialist',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 2,
    totalSpots: 6,
    day: 'Today'
  },
  // Tomorrow
  {
    id: 's6',
    time: '08:00 AM',
    className: 'Classical Alignment',
    classId: 'classical-alignment',
    instructor: 'Marcus Vance',
    instructorRole: 'Senior Biomechanist',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 4,
    totalSpots: 6,
    day: 'Tomorrow'
  },
  {
    id: 's7',
    time: '10:30 AM',
    className: 'MERA Sculpt',
    classId: 'mera-sculpt',
    instructor: 'Elena Rostova',
    instructorRole: 'Founder & Master Coach',
    level: 'Progressive',
    duration: '50 Min',
    spotsLeft: 3,
    totalSpots: 6,
    day: 'Tomorrow'
  },
  {
    id: 's8',
    time: '01:00 PM',
    className: 'Athletic Flow',
    classId: 'athletic-flow',
    instructor: 'Marcus Vance',
    instructorRole: 'Senior Biomechanist',
    level: 'Level 2-3',
    duration: '50 Min',
    spotsLeft: 1,
    totalSpots: 6,
    day: 'Tomorrow'
  },
  {
    id: 's9',
    time: '06:15 PM',
    className: 'Restorative Decompress',
    classId: 'restorative-decompress',
    instructor: 'Sophie Chen',
    instructorRole: 'Athletic Specialist',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 5,
    totalSpots: 6,
    day: 'Tomorrow'
  },
  // Saturday
  {
    id: 's10',
    time: '09:00 AM',
    className: 'MERA Sculpt',
    classId: 'mera-sculpt',
    instructor: 'Elena Rostova',
    instructorRole: 'Founder & Master Coach',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 2,
    totalSpots: 6,
    day: 'Saturday'
  },
  {
    id: 's11',
    time: '11:00 AM',
    className: 'Athletic Flow',
    classId: 'athletic-flow',
    instructor: 'Marcus Vance',
    instructorRole: 'Senior Biomechanist',
    level: 'Intermediate',
    duration: '50 Min',
    spotsLeft: 0,
    totalSpots: 6,
    day: 'Saturday'
  },
  {
    id: 's12',
    time: '04:00 PM',
    className: 'Restorative Decompress',
    classId: 'restorative-decompress',
    instructor: 'Sophie Chen',
    instructorRole: 'Athletic Specialist',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 4,
    totalSpots: 6,
    day: 'Saturday'
  },
  // Sunday
  {
    id: 's13',
    time: '09:30 AM',
    className: 'Classical Alignment',
    classId: 'classical-alignment',
    instructor: 'Elena Rostova',
    instructorRole: 'Founder & Master Coach',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 3,
    totalSpots: 6,
    day: 'Sunday'
  },
  {
    id: 's14',
    time: '11:30 AM',
    className: 'Restorative Decompress',
    classId: 'restorative-decompress',
    instructor: 'Sophie Chen',
    instructorRole: 'Athletic Specialist',
    level: 'All Levels',
    duration: '50 Min',
    spotsLeft: 2,
    totalSpots: 6,
    day: 'Sunday'
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'elena',
    name: 'Elena Rostova',
    title: 'Founder & Master Movement Director',
    specialty: 'Classical Precision & Postural Biomechanics',
    bio: 'Former soloist classical ballerina trained at the Vaganova Academy. Elena spent 14 years mastering spinal articulation, pelvic alignment, and effortless poise. She founded MERA to replace chaotic gym culture with deliberate anatomical craft.',
    credentials: ['PMA Certified Master Practitioner', 'Polestar Comprehensive Pilates', 'B.A. Dance & Kinesiology'],
    quote: 'True strength is not aggressive force. It is the quiet authority of an aligned body moving in harmony with breath.',
    image: '/images/instructor-elena.jpg'
  },
  {
    id: 'marcus',
    name: 'Marcus Vance',
    title: 'Senior Biomechanist & Athletic Lead',
    specialty: 'Athletic Conditioning & Kinetic Chain Optimization',
    bio: 'With a background in sports kinesiology and functional rehabilitation, Marcus bridges athletic power with the surgical control of the reformer carriage, challenging stabilizing muscles at the edge of muscular fatigue.',
    credentials: ['M.Sc. Human Movement Science', 'BASI Pilates Comprehensive', 'Functional Range Conditioning (FRC)'],
    quote: 'When you control the eccentric return of the carriage, you awaken stabilizing layers ordinary workouts never reach.',
    image: '/images/instructor-marcus.jpg'
  },
  {
    id: 'sophie',
    name: 'Sophie Chen',
    title: 'Fascial Integration & Restorative Lead',
    specialty: 'Myofascial Decompression & Pre/Post-Natal',
    bio: 'Sophie integrates clinical myofascial release with somatic reformer movement. Her sessions dissolve deep musculoskeletal tension and restore parasympathetic ease, decompressing spinal vertebrae with fluid grace.',
    credentials: ['Comprehensive Reformer Diploma', 'Anatomy Trains for Movement Therapists', 'Pre & Post-Natal Reformer Specialist'],
    quote: 'Release the muscular gripping, find the bone stack, and let the springs carry you.',
    image: '/images/instructor-sophie.jpg'
  }
];

export const MEMBERSHIP_TIERS = [
  {
    id: 'sanctuary-trial',
    name: 'The Foundation Intake',
    subtitle: '3-Session Welcome Experience',
    price: '$135',
    cadence: 'one-time intake',
    badge: 'First Visit Ritual',
    popular: false,
    description: 'An intimate welcome sequence including a 1-on-1 spine assessment before small-group reformer sessions.',
    features: [
      '1x 1-on-1 Postural & Biomechanical Assessment (30 min)',
      '2x Group Reformer Sessions (Strictly 6 guests)',
      'Complimentary MERA organic grip socks',
      'Personalized spring tension calibration profile',
      'Valid for 21 days from purchase'
    ],
    cta: 'Inquire on WhatsApp'
  },
  {
    id: 'sanctuary-core',
    name: 'The Core Membership',
    subtitle: '8 Sessions Monthly Commitment',
    price: '$285',
    cadence: 'per month',
    badge: 'Most Revered',
    popular: true,
    description: 'Designed for consistent weekly practice. Progressive strength, postural lift, and spinal decompression.',
    features: [
      '8 Reformer Sessions per billing cycle ($35.60/session)',
      '14-day advance priority class reservation',
      '1x Complimentary guest pass per month',
      '10% savings on MERA apothecary & curated lifestyle goods',
      'Exclusive access to master workshops & seasonal immersions',
      'Rollover up to 2 unused sessions per cycle'
    ],
    cta: 'Reserve on WhatsApp'
  },
  {
    id: 'sanctuary-unlimited',
    name: 'The Atelier Unlimited',
    subtitle: 'Unrestricted Studio Access',
    price: '$460',
    cadence: 'per month',
    badge: 'Bespoke Atelier',
    popular: false,
    description: 'For those who view reformer practice as a cornerstone daily ritual. Freedom across all session formats.',
    features: [
      'Unlimited Reformer Sessions across all formats',
      'Permanent reserved bed guarantee in your favorite slot',
      '2x Private 1-on-1 tuning sessions per quarter',
      'Private styling locker & complimentary laundry service',
      'Unlimited guest passes (1 per session with member)',
      'Complimentary signature MERA canvas tote bag'
    ],
    cta: 'Inquire on WhatsApp'
  }
];
