
import { Testimonial, FAQ, ServiceDetail, BlogPost } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "LSBA’s ethics guidance provides clarity in complex professional situations. It remains the definitive authority for Louisiana attorneys.",
    author: "J. Landry",
    role: "Civil Litigation Attorney"
  },
  {
    text: "The Lawyer Referral Service helped me find a qualified attorney quickly and confidently.",
    author: "M. Dupre",
    role: "Baton Rouge"
  },
  {
    text: "CLE compliance tools are clear, reliable, and essential for maintaining professional standing.",
    author: "R. Thompson",
    role: "Corporate Counsel"
  },
  {
    text: "LSBA provides clarity and structure essential to ethical legal practice.",
    author: "A. Broussard",
    role: "Criminal Defense Attorney"
  },
  {
    text: "Professional oversight strengthens public trust.",
    author: "M. Carter",
    role: "Corporate Counsel"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Is LSBA membership mandatory?",
    answer: "Yes. All attorneys licensed to practice law in Louisiana must maintain active LSBA membership."
  },
  {
    question: "How can I verify an attorney’s license?",
    answer: "Attorney status can be verified through the official LSBA directory."
  },
  {
    question: "How do I file a complaint against an attorney?",
    answer: "Complaints may be submitted through the LSBA disciplinary process portal."
  },
  {
    question: "Does LSBA provide legal advice?",
    answer: "No. LSBA provides referrals and public legal information, not legal advice."
  },
  {
    question: "Are CLE requirements mandatory?",
    answer: "Yes. Attorneys must meet annual CLE requirements to remain in good standing."
  },
  {
    question: "Who oversees lawyer discipline?",
    answer: "LSBA administers discipline in coordination with Louisiana’s judicial system."
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "licensing",
    title: "Attorney Regulation & Licensing",
    description: "LSBA administers mandatory membership, licensing compliance, and professional standing for all Louisiana attorneys.",
    benefits: ["Verified attorney registry", "Clear compliance requirements", "Centralized regulatory oversight"],
    process: ["Admission to practice", "Annual registration and dues", "Ongoing compliance monitoring"],
    pricing: "State-regulated membership dues",
    cta: "Attorney Registration Portal"
  },
  {
    id: "cle",
    title: "Continuing Legal Education (CLE)",
    description: "LSBA sets and enforces CLE standards to ensure ongoing professional competence.",
    benefits: ["Accredited CLE programs", "Compliance tracking tools", "Ethics-focused education"],
    process: ["Course selection", "Attendance verification", "Annual reporting"],
    pricing: "Varies by provider",
    cta: "View CLE Requirements"
  },
  {
    id: "ethics",
    title: "Ethics Guidance & Discipline",
    description: "LSBA oversees professional responsibility and lawyer discipline to protect public trust.",
    benefits: ["Ethics opinions", "Complaint investigation", "Fair disciplinary processes"],
    process: ["Inquiry or complaint submission", "Review and investigation", "Resolution or discipline"],
    pricing: "No cost to public",
    cta: "Ethics & Discipline Resources"
  },
  {
    id: "referral",
    title: "Lawyer Referral & Public Services",
    description: "LSBA connects the public with licensed attorneys and reliable legal information.",
    benefits: ["Verified lawyer referrals", "Public legal education", "Access-to-justice initiatives"],
    process: ["Submit inquiry", "Match with qualified attorney", "Initial consultation"],
    pricing: "Referral fees may apply",
    cta: "Find a Lawyer"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Understanding Louisiana Attorney Licensing",
    excerpt: "A comprehensive guide to the regulatory framework governing legal practice in Louisiana.",
    category: "Regulation",
    date: "May 15, 2024"
  },
  {
    title: "How Lawyer Discipline Protects the Public",
    excerpt: "Analyzing the mechanisms used by the LSBA to maintain professional accountability.",
    category: "Public Interest",
    date: "May 10, 2024"
  },
  {
    title: "CLE Requirements Explained",
    excerpt: "Everything you need to know about maintaining your standing through continuing education.",
    category: "Compliance",
    date: "May 5, 2024"
  },
  {
    title: "How to Verify a Louisiana Attorney",
    excerpt: "Using the LSBA official directory to confirm the licensing status of legal professionals.",
    category: "Public Service",
    date: "April 28, 2024"
  }
];
