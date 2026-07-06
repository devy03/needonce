import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ComparisonResultRow({ icon: Icon, name, price, priceLabel, distance, availability, badge, tone = 'default', index = 0, onAction, actionLabel = 'View' }) {
  const toneStyles = {
    best: 'border-[#f5c451]/30 bg-gradient-to-r from-[#f5c451]/[0.08] to-transparent',
    free: 'border-emerald-400/25 bg-emerald-400/[0.05]',
    default: 'border-white/[0.08] bg-white/[0.02]',
    dim: 'border-white/[0.05] bg-white/[0.01] opacity-60',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`flex flex-col gap-3 rounded-2xl border px-5 py-4 transition-colors hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between ${toneStyles[tone]}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
          <Icon size={19} className="text-white/70" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold text-white">{name}</p>
            {badge}
          </div>
          <p className="mt-0.5 text-xs text-white/40">{distance} · {availability}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div className="text-right">
          <p className={`text-lg font-bold ${tone === 'free' ? 'text-emerald-300' : tone === 'best' ? 'text-[#f5c451]' : 'text-white'}`}>{price}</p>
          <p className="text-[11px] text-white/40">{priceLabel}</p>
        </div>
        <button
          onClick={onAction}
          className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/[0.1]"
        >
          {actionLabel} <ArrowRight size={13} />
        </button>
      </div>
    </motion.div>
  );
}
