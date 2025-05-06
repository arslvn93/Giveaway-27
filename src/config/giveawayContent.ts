// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1556742517-fde6c2abbe11?ixid=M3w3MjQzNjF8MXwxfHNlYXJjaHwxfHxjYWZlfGVufDB8fHx8MTc0NjU0ODY4MHww&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxjYWZlfGVufDB8fHx8MTc0NjU0ODY4MHww&ixlib=rb-4.1.0", 
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwzfHxjYWZlfGVufDB8fHx8MTc0NjU0ODY4MHww&ixlib=rb-4.1.0", 
];

export const prizeContent = {
  title: "Exclusive Dinner Experience at Spaccio",
  description: "Enjoy a lavish dining evening at Spaccio with an exquisite meal for four. This exclusive giveaway, valued at $500, includes gourmet dishes and perfectly paired wines, all set in the elegant ambiance of Spaccio at 22 Sackville. It’s the perfect chance to create unforgettable memories with your loved ones.",
  features: [
    "Gourmet dinner for four at Spaccio",
    "Exquisite wine pairings curated for a perfect match",
    "Elegant dining ambiance on a sun-kissed patio",
    "A culinary journey with unforgettable flavors",
    "Ideal for a romantic dinner, family gathering, or double date",
  ],
  value: "$500",
};

// Header section
export const headerContent = {
  title: "Win an Exclusive Dinner Experience at Spaccio!",
  description: "Treat yourself to an evening of fine dining, exquisite wines, and unforgettable memories at Spaccio. Enter now for your chance to win a $500 dinner for four at one of the city's finest dining destinations.",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
  secondaryImage: prizeImages[1],
};

// Navigation section
export const navigationContent = {
  title: "Spaccio Dinner Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Entering our giveaway is simple and fun! Just fill out the form and answer a few quick questions about your culinary preferences to secure your chance to win this exclusive dining experience.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Provide your name and email address to get started."
    },
    {
      icon: "Share2",
      title: "Answer a Quick Survey",
      description: "Tell us about your dining preferences in a few fun questions."
    },
    {
      icon: "Users",
      title: "Confirm Your Entry",
      description: "Check your email for a confirmation to complete your entry."
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute to enter" 
    },
    { 
      icon: "Trophy", 
      title: "Exclusive Prize", 
      desc: "Win a $500 dinner experience at Spaccio" 
    },
    { 
      icon: "Gift", 
      title: "Unforgettable Experience", 
      desc: "Indulge in gourmet dining and exquisite wines" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry."
  },
  currentEntries: 0,
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 21 years or older is eligible to enter this giveaway."
    },
    {
      question: "How long does the giveaway run?",
      answer: "The giveaway runs from May 12, 2025 until May 30, 2025."
    },
    {
      question: "How will the winner be selected?",
      answer: "The winner will be selected randomly from all valid entries using a certified random selection tool."
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours after the giveaway ends and must respond within 72 hours to claim the prize."
    },
    {
      question: "How many times can I enter?",
      answer: "Each person may enter once. Additional survey completions are not eligible for extra entries."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, your information will be kept confidential and used solely for this giveaway."
    }
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Ensure your email address is correct before submitting your entry",
    "Answer the survey honestly to secure your chance to win",
    "Mark your calendar for the drawing on May 30, 2025"
  ],
  importantNotice: "All winners will be contacted via the email provided during entry. Please check your inbox and spam folder regularly after the giveaway ends.",
  supportEmail: "erica@ericareddy.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "erica@ericareddy.com",
  phone: "",
  brokerage: {
    name: "Erica Reddy-Choquette",
    address: "Toronto, Canada"
  },
  disclaimer: "This giveaway is organized and hosted by Erica Reddy-Choquette.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "Erica's Exclusive Giveaway brings you unforgettable dining experiences paired with exquisite wines.",
  email: "erica@ericareddy.com",
  phone: "",
  quickLinks: ["Home", "Prize Details", "How to Enter", "Rules", "Contact"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "Erica Reddy-Choquette",
    address: "Toronto, Canada"
  },
  disclaimer: "This giveaway is organized by Erica Reddy-Choquette.",
  copyright: "Copyright 2025. All rights reserved",
  company: "Erica Reddy-Choquette",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("May 30, 2025")
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'amber-600',
    light: 'amber-400',
    dark: 'amber-800',
    gradient: 'from-amber-500 to-amber-700',
    text: 'amber-700',
    textLight: 'amber-500',
    textDark: 'amber-900',
    hover: 'amber-700',
    border: 'amber-200',
    background: 'amber-50',
    accent: 'amber-100',
    accentDark: 'amber-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-amber-100/70 via-amber-50/40 to-transparent',
    countdownBg: 'from-amber-800 to-amber-950',
    countdownText: 'from-amber-200 to-amber-400',
    prizeTitle: 'from-amber-700 to-amber-500',
    button: 'from-amber-500 to-amber-600',
    buttonHover: 'from-amber-600 to-amber-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
};