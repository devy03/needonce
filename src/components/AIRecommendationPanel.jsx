import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AIRecommendationPanel({ task, items }) {
  if (!items?.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.06] p-5"
    >
      <div className="glow-circle absolute -right-10 -top-10" style={{ width: 180, height: 180, background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)' }} />
      <div className="relative flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20">
          <Sparkles size={15} className="text-violet-300" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AI suggested bundle for "{task}"</p>
          <p className="text-xs text-white/40">Based on what people usually need for this task</p>
        </div>
      </div>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/80">
            {it}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
