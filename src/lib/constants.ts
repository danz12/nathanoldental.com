// Business Information - Central source of truth
export const BUSINESS_INFO = {
  name: "Nathanol Specialty Dental Center",
  type: "Specialty Dental Center",
  tagline: "Your Smile, Our Specialty",
  
  // Location
  location: {
    city: "Addis Ababa",
    country: "Ethiopia",
    address: "2Q5Q+59P, Addis Ababa",
    plusCode: "2Q5Q+59P",
    googleMapsUrl: "https://maps.google.com/?q=2Q5Q%2B59P+Addis+Ababa+Ethiopia",
  },
  
  // Contact
  contact: {
    phone: "093 030 3333",
    phoneHref: "tel:+251930303333",
    whatsapp: "https://wa.me/251930303333",
    email: "info@nathanoldental.com", // Placeholder
  },
  
  // Social Media (placeholders - replace with actual URLs)
  social: {
    facebook: "https://facebook.com/nathanoldental",
    instagram: "https://instagram.com/nathanoldental",
    tiktok: "https://tiktok.com/@nathanoldental",
  },
  
  // Reviews
  reviews: {
    google: {
      rating: 4.8,
      count: 60,
      url: "https://g.page/nathanoldental/review",
    },
    facebook: {
      rating: 5,
      count: 5,
      url: "https://facebook.com/nathanoldental/reviews",
    },
  },
  
  // Hours
  hours: {
    today: "Open · Closes 1:30 PM",
    weekly: [
      { day: "Monday", hours: "8:00 AM - 1:30 PM, 3:00 PM - 7:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 1:30 PM, 3:00 PM - 7:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 1:30 PM, 3:00 PM - 7:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 1:30 PM, 3:00 PM - 7:00 PM" },
      { day: "Friday", hours: "8:00 AM - 1:30 PM, 3:00 PM - 7:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
} as const;

// SEO Metadata for each page
export const SEO_METADATA = {
  home: {
    title: "Nathanol Specialty Dental Center | Best Dental Clinic in Addis Ababa",
    description: "Nathanol Specialty Dental Center offers comprehensive dental care in Addis Ababa, Ethiopia. From general dentistry to orthodontics and implants. Call 093 030 3333 to book.",
    keywords: "dental clinic Addis Ababa, specialty dental center, dentist Ethiopia, dental implants, orthodontics Addis Ababa",
  },
  about: {
    title: "About Us | Nathanol Specialty Dental Center - Addis Ababa",
    description: "Learn about Nathanol Specialty Dental Center, your trusted dental care provider in Addis Ababa. Patient-centered care with modern facilities.",
    keywords: "dental center about, Nathanol dental history, dental team Addis Ababa",
  },
  services: {
    title: "Dental Services | Nathanol Specialty Dental Center - Addis Ababa",
    description: "Explore our comprehensive dental services including general dentistry, orthodontics, implants, root canal, and cosmetic dentistry in Addis Ababa.",
    keywords: "dental services Addis Ababa, orthodontics, dental implants, root canal treatment, cosmetic dentistry Ethiopia",
  },
  team: {
    title: "Our Specialists | Nathanol Specialty Dental Center - Addis Ababa",
    description: "Meet our team of experienced dental specialists at Nathanol Specialty Dental Center in Addis Ababa. Qualified professionals dedicated to your oral health.",
    keywords: "dentist Addis Ababa, dental specialists Ethiopia, orthodontist, dental surgeon",
  },
  reviews: {
    title: "Patient Reviews | Nathanol Specialty Dental Center - 4.8★ Rating",
    description: "Read what our patients say about Nathanol Specialty Dental Center. 4.8 stars on Google with 60+ reviews. Trusted dental care in Addis Ababa.",
    keywords: "dental reviews Addis Ababa, Nathanol dental testimonials, best rated dentist Ethiopia",
  },
  contact: {
    title: "Contact Us | Nathanol Specialty Dental Center - Addis Ababa",
    description: "Contact Nathanol Specialty Dental Center at 093 030 3333. Located at 2Q5Q+59P, Addis Ababa. Book your appointment today!",
    keywords: "dental clinic contact, Nathanol dental address, dentist phone number Addis Ababa",
  },
  booking: {
    title: "Book Appointment | Nathanol Specialty Dental Center - Addis Ababa",
    description: "Book your dental appointment online at Nathanol Specialty Dental Center. Easy scheduling for all dental services in Addis Ababa.",
    keywords: "book dental appointment, dental scheduling Addis Ababa, online booking dentist",
  },
  faq: {
    title: "FAQ | Nathanol Specialty Dental Center - Common Questions",
    description: "Find answers to frequently asked questions about dental care at Nathanol Specialty Dental Center in Addis Ababa.",
    keywords: "dental FAQ, dentist questions, dental care information",
  },
  privacy: {
    title: "Privacy Policy | Nathanol Specialty Dental Center",
    description: "Privacy policy for Nathanol Specialty Dental Center. Learn how we protect your personal information.",
    keywords: "dental privacy policy, patient data protection",
  },
  terms: {
    title: "Terms of Service | Nathanol Specialty Dental Center",
    description: "Terms of service for Nathanol Specialty Dental Center website and services.",
    keywords: "dental terms of service, clinic policies",
  },
} as const;

// Services placeholder data
export const SERVICES_DATA = [
  {
    id: "general-dentistry",
    name: "General Dentistry",
    icon: "Stethoscope",
    shortDescription: "Comprehensive dental check-ups, cleanings, and preventive care for the whole family.",
    description: "Our general dentistry services include routine examinations, professional cleanings, cavity fillings, and preventive care to maintain your oral health.",
    whatToExpect: "A thorough examination, X-rays if needed, professional cleaning, and personalized oral health recommendations.",
    duration: "30-60 minutes",
    isPlaceholder: true,
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    icon: "Smile",
    shortDescription: "Braces and aligners to straighten teeth and correct bite issues for a perfect smile.",
    description: "We offer traditional braces, clear aligners, and other orthodontic treatments to help you achieve a beautifully aligned smile.",
    whatToExpect: "Initial consultation, treatment planning, fitting of braces or aligners, and regular adjustment appointments.",
    duration: "Varies by treatment",
    isPlaceholder: true,
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    icon: "CircleDot",
    shortDescription: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    description: "Dental implants provide a long-lasting solution for missing teeth, restoring both function and aesthetics.",
    whatToExpect: "Consultation, imaging, implant placement surgery, healing period, and crown placement.",
    duration: "Multiple appointments over 3-6 months",
    isPlaceholder: true,
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    icon: "Activity",
    shortDescription: "Save infected or damaged teeth with our gentle and effective root canal therapy.",
    description: "Root canal treatment removes infected pulp tissue, relieves pain, and saves your natural tooth from extraction.",
    whatToExpect: "Local anesthesia, removal of infected tissue, cleaning and sealing of the root canals, and crown placement.",
    duration: "1-2 hours per appointment",
    isPlaceholder: true,
  },
  {
    id: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    icon: "Baby",
    shortDescription: "Gentle, child-friendly dental care to build healthy habits from an early age.",
    description: "Our pediatric dental services are designed to make children feel comfortable while receiving essential dental care.",
    whatToExpect: "A friendly, child-centered environment, gentle examinations, cleanings, and education on oral hygiene.",
    duration: "30-45 minutes",
    isPlaceholder: true,
  },
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    icon: "Sparkles",
    shortDescription: "Enhance your smile with teeth whitening, veneers, and aesthetic treatments.",
    description: "Transform your smile with our cosmetic dental services including professional whitening, veneers, and smile makeovers.",
    whatToExpect: "Consultation to discuss your goals, treatment planning, and procedures tailored to achieve your desired results.",
    duration: "Varies by procedure",
    isPlaceholder: true,
  },
] as const;

// Why Choose Us points
export const WHY_CHOOSE_US = [
  {
    title: "Patient-Centered Care",
    description: "Your comfort and well-being are our top priorities. We listen to your concerns and create personalized treatment plans.",
    icon: "Heart",
  },
  {
    title: "Hygiene & Safety Focus",
    description: "We maintain the highest standards of sterilization and infection control for your peace of mind.",
    icon: "ShieldCheck",
  },
  {
    title: "Convenient Location",
    description: "Easily accessible clinic in Addis Ababa with comfortable facilities and ample parking.",
    icon: "MapPin",
  },
  {
    title: "Clear Communication",
    description: "We explain every procedure clearly and answer all your questions before treatment begins.",
    icon: "MessageCircle",
  },
  {
    title: "Specialty Services",
    description: "Access to a range of dental specialties under one roof for comprehensive care.",
    icon: "Award",
  },
  {
    title: "Modern Equipment",
    description: "We utilize contemporary dental technology to provide efficient and effective treatments.",
    icon: "Zap",
  },
] as const;

// FAQ Data
export const FAQ_DATA = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every 6 months for regular check-ups and cleanings. However, your dentist may suggest more frequent visits based on your individual oral health needs.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Contact our clinic immediately at 093 030 3333. For severe pain, bleeding, or trauma, seek care as soon as possible. Keep any knocked-out teeth moist and bring them with you.",
  },
  {
    question: "How do I prepare for my first appointment?",
    answer: "Bring any previous dental records if available, a list of current medications, and your identification. Arrive 10-15 minutes early to complete paperwork.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Please contact our office to discuss payment options and any available plans that may suit your needs.",
  },
  {
    question: "What age should children start seeing a dentist?",
    answer: "Children should have their first dental visit by their first birthday or within 6 months of their first tooth appearing. Early visits help establish good oral health habits.",
  },
  {
    question: "How can I maintain good oral health at home?",
    answer: "Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and don't smoke. Regular dental visits complement your home care routine.",
  },
] as const;

// Team placeholders
export const TEAM_DATA = [
  {
    id: 1,
    name: "[Doctor Name - To Be Confirmed]",
    title: "Lead Dentist",
    specialization: "General Dentistry",
    languages: ["English", "Amharic"],
    bio: "Experienced dental professional dedicated to providing excellent patient care.",
    image: null,
    isPlaceholder: true,
  },
  {
    id: 2,
    name: "[Specialist Name - To Be Confirmed]",
    title: "Orthodontist",
    specialization: "Orthodontics",
    languages: ["English", "Amharic"],
    bio: "Specialist in teeth alignment and bite correction treatments.",
    image: null,
    isPlaceholder: true,
  },
  {
    id: 3,
    name: "[Specialist Name - To Be Confirmed]",
    title: "Oral Surgeon",
    specialization: "Oral Surgery & Implants",
    languages: ["English", "Amharic"],
    bio: "Experienced in surgical procedures and dental implant placement.",
    image: null,
    isPlaceholder: true,
  },
] as const;
