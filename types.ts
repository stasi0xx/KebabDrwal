import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SlideData {
  id: number;
  title: string;
  highlight?: string; // Text to highlight (e.g. in red)
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  theme: 'dark' | 'light';
  buttons?: { label: string; href: string; variant: 'primary' | 'outline' }[];
}

export interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'red' | 'yellow' | 'green';
}

export interface MacroInfo {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price?: string;
  description: string;
  image?: string;
  tag?: string;
  macros?: MacroInfo; // Optional, for the "Fit" section style
}

export interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
}