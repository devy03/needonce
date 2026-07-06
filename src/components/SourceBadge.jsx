import { Sparkles, Gift, Zap, ShieldCheck, Wallet, Clock } from 'lucide-react';

const BADGES = {
  best_deal: { label: 'Best Deal', icon: Sparkles, className: 'bg-gradient-to-r from-[#f5c451] to-[#e8a63c] text-black shadow-[0_0_18px_rgba(245,196,81,0.4)]' },
  free: { label: 'Free Library Option', icon: Gift, className: 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/30' },
  fastest: { label: 'Available Today', icon: Zap, className: 'bg-blue-500/15 text-blue-300 border border-blue-400/30' },
  verified: { label: 'Verified Owner', icon: ShieldCheck, className: 'bg-violet-500/15 text-violet-300 border border-violet-400/30' },
  deposit: { label: 'Deposit Protected', icon: Wallet, className: 'bg-white/[0.06] text-white/70 border border-white/15' },
  reliable: { label: 'Reliable', icon: Clock, className: 'bg-white/[0.06] text-white/70 border border-white/15' },
};

export default function SourceBadge({ type, label }) {
  const badge = BADGES[type];
  if (!badge) return null;
  const Icon = badge.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}>
      <Icon size={12} strokeWidth={2.5} />
      {label || badge.label}
    </span>
  );
}
