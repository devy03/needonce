import { motion } from 'framer-motion';
import { Sparkles, Home, Library, Store, ShoppingBag, Drill, HardHat, Projector, Volleyball, Camera, Sofa, SprayCan } from 'lucide-react';

const ROWS = [
  { icon: Home, label: 'Neighbor rental', price: '$8/day', dist: '0.7 mi away', tone: 'text-blue-300', tag: null },
  { icon: Library, label: 'Tool library', price: 'Free', dist: '2.4 mi away', tone: 'text-emerald-300', tag: 'best' },
  { icon: Store, label: 'Home improvement store', price: '$38/day', dist: '4.1 mi away', tone: 'text-violet-300', tag: null },
  { icon: ShoppingBag, label: 'Buy new', price: '$129', dist: 'not recommended', tone: 'text-white/40', tag: 'avoid' },
];

const FLOATERS = [
  { icon: Drill, top: '4%', left: '6%', delay: 0 },
  { icon: HardHat, top: '12%', right: '4%', delay: 0.6 },
  { icon: Projector, bottom: '18%', left: '2%', delay: 1.1 },
  { icon: Volleyball, bottom: '6%', right: '10%', delay: 1.6 },
  { icon: Camera, top: '48%', right: '-2%', delay: 2 },
  { icon: Sofa, top: '55%', left: '-4%', delay: 0.3 },
  { icon: SprayCan, bottom: '40%', right: '2%', delay: 1.4 },
];

export default function AnimatedHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {FLOATERS.map((f, i) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={i}
            className="absolute hidden h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md lg:flex"
            style={{ top: f.top, left: f.left, right: f.right, bottom: f.bottom }}
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
          >
            <Icon size={18} className="text-white/50" />
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-6 shadow-2xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
          className="absolute -right-3 -top-3 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f5c451] to-[#e8a63c] px-3.5 py-1.5 text-xs font-bold text-black shadow-[0_0_24px_rgba(245,196,81,0.5)]"
        >
          <Sparkles size={13} /> Best Deal Found
        </motion.div>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-white/80">Comparing "Pressure washer"</span>
          <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[11px] text-white/40">Live comparison</span>
        </div>

        <div className="space-y-2.5">
          {ROWS.map((row, i) => {
            const Icon = row.icon;
            return (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className={`flex items-center justify-between rounded-xl border px-3.5 py-3 ${
                  row.tag === 'best'
                    ? 'border-emerald-400/30 bg-emerald-400/[0.07]'
                    : row.tag === 'avoid'
                    ? 'border-white/[0.06] bg-white/[0.015] opacity-60'
                    : 'border-white/[0.07] bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Icon size={15} className={row.tone} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">{row.label}</p>
                    <p className="text-xs text-white/40">{row.dist}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${row.tag === 'best' ? 'text-emerald-300' : row.tag === 'avoid' ? 'text-white/40' : 'text-white'}`}>
                  {row.price}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
