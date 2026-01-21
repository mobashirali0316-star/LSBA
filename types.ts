
export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  process: string[];
  pricing: string;
  cta: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
}
