import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { money } from '../lib/format';

const PIN_COLORS = {
  free: '#34d399',
  community: '#60a5fa',
  store: '#a78bfa',
  best: '#f5c451',
  unavailable: '#fb7185',
};

// Deterministic pseudo-positions so the mock map looks consistent between renders.
function posFor(seed) {
  const x = ((seed * 137) % 80) + 8;
  const y = ((seed * 89) % 70) + 10;
  return { left: `${x}%`, top: `${y}%` };
}

export default function MapMock({ pins }) {
  const [active, setActive] = useState(null);

  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0b14]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="glow-circle absolute left-1/4 top-1/3" style={{ width: 260, height: 260, background: 'radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)' }} />

      {pins.map((pin, i) => {
        const pos = posFor(i + 1);
        const color = PIN_COLORS[pin.type];
        return (
          <motion.button
            key={pin.id}
            style={{ left: pos.left, top: pos.top }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            onClick={() => setActive(pin)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05, type: 'spring' }}
            whileHover={{ scale: 1.2 }}
          >
            <span
              className="block h-4 w-4 rounded-full ring-4"
              style={{ background: color, boxShadow: `0 0 16px ${color}`, '--tw-ring-color': `${color}22` }}
            />
          </motion.button>
        );
      })}

      <div className="absolute bottom-3 left-3 flex flex-wrap gap-3 rounded-xl bg-black/50 px-3 py-2 text-[11px] text-white/70 backdrop-blur">
        {Object.entries(PIN_COLORS).map(([key, color]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: color }} />
            {key === 'free' ? 'Free/library' : key === 'community' ? 'Community' : key === 'store' ? 'Store' : key === 'best' ? 'Best deal' : 'Unavailable'}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass-strong absolute right-4 top-4 w-64 rounded-2xl p-4"
          >
            <button onClick={() => setActive(null)} className="absolute right-3 top-3 text-white/40 hover:text-white">
              <X size={14} />
            </button>
            <p className="pr-4 text-sm font-semibold text-white">{active.name}</p>
            <p className="mt-1 text-xs text-white/40">{active.distance} mi · {active.availability}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-base font-bold text-white">{typeof active.price === 'number' ? money(active.price) : active.price}</span>
              <button className="flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-1.5 text-xs font-semibold text-white">
                View <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
