import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';

export default function GroupCard({ group, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <Link
        to={`/group/${group.id}`}
        className="group block rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
      >
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-[11px] font-medium text-violet-300">{group.type}</span>
          <span className="flex items-center gap-1 text-xs text-white/40"><Users size={12} /> {group.members}</span>
        </div>
        <h3 className="mt-3 text-base font-semibold text-white">{group.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-white/50">{group.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="text-white/40">{group.activeItems} active items</span>
          <span className="flex items-center gap-1 font-medium text-white/70 group-hover:text-white">
            View group <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
