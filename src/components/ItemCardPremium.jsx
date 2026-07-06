import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck } from 'lucide-react';
import { getItemIcon } from '../data/itemIcons';
import { USERS } from '../data/users';
import UserRating from './UserRating';
import { money } from '../lib/format';

export default function ItemCardPremium({ item, index = 0 }) {
  const Icon = getItemIcon(item.images?.[0]);
  const owner = USERS.find((u) => u.id === item.ownerId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        to={`/item/${item.id}`}
        className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-violet-500/10"
      >
        <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent">
          <div className="glow-circle" style={{ width: 160, height: 160, background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)' }} />
          <Icon size={40} className="relative text-white/70 transition-transform group-hover:scale-110" strokeWidth={1.4} />
          {item.verified && (
            <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium text-emerald-300 backdrop-blur">
              <ShieldCheck size={11} /> Verified
            </span>
          )}
          <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium text-white/70 backdrop-blur">
            {item.availability}
          </span>
        </div>
        <div className="p-4">
          <h3 className="line-clamp-1 text-sm font-semibold text-white">{item.title}</h3>
          <div className="mt-1.5 flex items-center gap-2 text-xs text-white/40">
            <MapPin size={11} /> {item.distance} mi · {owner?.name}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-white">{money(item.priceDay)}</span>
              <span className="text-xs text-white/40">/day</span>
            </div>
            <UserRating rating={item.rating} reviews={item.reviewCount} size={12} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
