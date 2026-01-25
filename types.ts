// Fix: Added missing React import to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
}

export interface MousePosition {
  x: number;
  y: number;
}