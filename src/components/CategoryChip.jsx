import { motion } from 'framer-motion';

export default function CategoryChip({ category, active, onClick, index = 0 }) {
  const Icon = category.icon;
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      onClick={onClick}
      className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
        active
          ? 'border-white/20 bg-white/[0.1] text-white'
          : 'border-white/[0.08] bg-white/[0.02] text-white/60 hover:border-white/15 hover:bg-white/[0.06] hover:text-white'
      }`}
    >
      <Icon size={15} style={{ color: category.color }} />
      {category.label}
    </motion.button>
  );
}
