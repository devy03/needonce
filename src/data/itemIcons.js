import {
  Drill, HardHat, SprayCan, PartyPopper, Projector, Volleyball, Camera,
  Tent, Truck, ChefHat, Sofa, Fan, Ruler, Speaker, Umbrella, Calculator,
  Axe, Wind, ShieldCheck,
} from 'lucide-react';

export const ITEM_ICONS = {
  drill: Drill,
  ladder: HardHat,
  'pressure-washer': SprayCan,
  chairs: Sofa,
  projector: Projector,
  cricket: Volleyball,
  camera: Camera,
  tent: Tent,
  dolly: Truck,
  'carpet-cleaner': Fan,
  speaker: Speaker,
  canopy: Umbrella,
  calculator: Calculator,
  tripod: Ruler,
  saw: Axe,
  mixer: ChefHat,
  default: PartyPopper,
};

export function getItemIcon(key) {
  return ITEM_ICONS[key] || ITEM_ICONS.default;
}

export { Wind, ShieldCheck };
