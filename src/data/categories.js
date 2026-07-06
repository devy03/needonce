import {
  Wrench, PartyPopper, Volleyball, Tent, Laptop, Sparkles,
  Truck, ChefHat, Camera, GraduationCap, Hammer,
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'tools', label: 'Tools', icon: Wrench, color: '#f5c451' },
  { id: 'party', label: 'Party Supplies', icon: PartyPopper, color: '#fb7185' },
  { id: 'sports', label: 'Sports Gear', icon: Volleyball, color: '#34d399' },
  { id: 'outdoor', label: 'Outdoor', icon: Tent, color: '#60a5fa' },
  { id: 'tech', label: 'Tech', icon: Laptop, color: '#a78bfa' },
  { id: 'cleaning', label: 'Cleaning', icon: Sparkles, color: '#38bdf8' },
  { id: 'moving', label: 'Moving', icon: Truck, color: '#f97316' },
  { id: 'kitchen', label: 'Kitchen', icon: ChefHat, color: '#facc15' },
  { id: 'camera', label: 'Camera Gear', icon: Camera, color: '#c084fc' },
  { id: 'camping', label: 'Camping', icon: Tent, color: '#4ade80' },
  { id: 'student', label: 'Student Items', icon: GraduationCap, color: '#818cf8' },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
