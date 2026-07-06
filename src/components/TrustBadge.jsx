import { Shield, Award, Zap, Sparkle } from 'lucide-react';

const ICONS = {
  'Trusted Neighbor': Shield,
  'Top Lender': Award,
  'Fast Responder': Zap,
  'Clean Returner': Sparkle,
};

export default function TrustBadge({ label, size = 'md' }) {
  const Icon = ICONS[label] || Shield;
  const sizes = size === 'sm' ? 'px-2 py-0.5 text-[10px] gap-1' : 'px-2.5 py-1 text-xs gap-1.5';
  return (
    <span className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] font-medium text-white/70 ${sizes}`}>
      <Icon size={size === 'sm' ? 10 : 12} className="text-violet-300" />
      {label}
    </span>
  );
}
