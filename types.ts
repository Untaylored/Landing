import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Plan {
  name: string;
  price: number; // Monthly price
  description: string;
  features: string[];
  articlesPerMonth: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestCase {
  clientType: string;
  metric: string;
  quote: string;
}