import { Star } from 'lucide-react';

export default function UserRating({ rating, reviews, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm text-white/70">
      <Star size={size} className="fill-[#f5c451] text-[#f5c451]" />
      <span className="font-semibold text-white">{rating}</span>
      {reviews != null && <span className="text-white/40">({reviews})</span>}
    </span>
  );
}
