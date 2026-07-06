import { motion } from 'framer-motion';

export default function AdminStatsCard({ icon: Icon, label, value, tone = 'default', index = 0 }) {
  const toneColor = {
    default: 'text-white',
    good: 'text-emerald-300',
    warn: 'text-amber-300',
    bad: 'text-rose-300',
  }[tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-white/40">{label}</span>
        {Icon && <Icon size={16} className="text-white/30" />}
      </div>
      <p className={`mt-3 text-2xl font-bold ${toneColor}`}>{value}</p>
    </motion.div>
  );
}
