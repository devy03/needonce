import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, ShieldCheck, CheckCircle2, MessageCircle, Heart, AlertTriangle,
  Camera, PackageCheck, ArrowRight, Star,
} from 'lucide-react';
import { getItemById, ITEMS } from '../data/items';
import { USERS } from '../data/users';
import { getReviewsForItem } from '../data/rentals';
import { getItemIcon } from '../data/itemIcons';
import { getSourcesByCategory } from '../data/sources';
import UserRating from '../components/UserRating';
import TrustBadge from '../components/TrustBadge';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import SavingsCalculator from '../components/SavingsCalculator';
import ItemCardPremium from '../components/ItemCardPremium';
import RentalRequestModal from '../components/RentalRequestModal';
import { money } from '../lib/format';

const CONDITION_CHECKLIST = [
  { label: 'Works properly', icon: CheckCircle2 },
  { label: 'Cleaned before pickup', icon: CheckCircle2 },
  { label: 'Accessories included', icon: PackageCheck },
  { label: 'Owner verified', icon: ShieldCheck },
  { label: 'Photo verified', icon: Camera },
];

export default function ItemDetail() {
  const { id } = useParams();
  const item = getItemById(id) || ITEMS[0];
  const owner = USERS.find((u) => u.id === item.ownerId);
  const reviews = getReviewsForItem(item.id);
  const Icon = getItemIcon(item.images?.[0]);
  const [showModal, setShowModal] = useState(false);
  const [saved, setSaved] = useState(false);

  const similar = ITEMS.filter((i) => i.category === item.category && i.id !== item.id).slice(0, 4);
  const storeAlt = getSourcesByCategory(item.category)[0];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-8 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          {/* Gallery */}
          <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent sm:h-96">
            <div className="glow-circle" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)' }} />
            <Icon size={80} className="relative text-white/60" strokeWidth={1.2} />
            {item.verified && (
              <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur">
                <ShieldCheck size={13} /> Verified listing
              </span>
            )}
            <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur">{item.availability}</span>
          </div>

          <div className="mt-6 flex items-start justify-between gap-4">
            <div>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium capitalize text-white/50">{item.category}</span>
              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{item.title}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/50">
                <span className="flex items-center gap-1"><MapPin size={13} /> {item.distance} mi away</span>
                <UserRating rating={item.rating} reviews={item.reviewCount} />
              </div>
            </div>
            <button onClick={() => setSaved((v) => !v)} className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${saved ? 'border-rose-400/40 bg-rose-400/10' : 'border-white/10 bg-white/[0.04]'}`}>
              <Heart size={18} className={saved ? 'fill-rose-400 text-rose-400' : 'text-white/60'} />
            </button>
          </div>

          <p className="mt-5 leading-relaxed text-white/60">{item.description}</p>

          {/* Condition checklist */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CONDITION_CHECKLIST.map((c) => (
              <div key={c.label} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 text-xs text-white/70">
                <c.icon size={14} className="text-emerald-300" /> {c.label}
              </div>
            ))}
          </div>

          {/* Included accessories */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-white/80">Included accessories</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.includedAccessories.map((a) => (
                <span key={a} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70">{a}</span>
              ))}
            </div>
          </div>

          {/* Rules / Safety */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold text-white/80">Pickup & rules</h3>
              <p className="mt-2 text-sm text-white/50">{item.rules}</p>
              <p className="mt-3 text-xs text-white/40">Late fee: {money(item.lateFee)}/day · Replacement cost: {money(item.replacementCost)}</p>
            </div>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5">
              <h3 className="flex items-center gap-1.5 text-sm font-semibold text-amber-300"><AlertTriangle size={14} /> Safety notes</h3>
              <p className="mt-2 text-sm text-white/50">{item.safetyNotes}</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-white/80">Reviews ({reviews.length})</h3>
            <div className="mt-4 space-y-4">
              {reviews.length ? reviews.map((r) => {
                const reviewer = USERS.find((u) => u.id === r.reviewerId);
                return (
                  <div key={r.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">{reviewer?.avatar}</div>
                        <span className="text-sm font-medium text-white">{reviewer?.name}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-white/40"><Star size={12} className="fill-[#f5c451] text-[#f5c451]" /> {r.rating}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/60">{r.comment}</p>
                  </div>
                );
              }) : <p className="text-sm text-white/40">No reviews yet — be the first to rent this item.</p>}
            </div>
          </div>

          {/* Similar cheaper options */}
          {similar.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-white/80">Similar cheaper options</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {similar.map((s, i) => <ItemCardPremium key={s.id} item={s} index={i} />)}
              </div>
            </div>
          )}

          {storeAlt && (
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold text-white/80">Compare with store option</h3>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">{storeAlt.sourceName}</p>
                  <p className="text-xs text-white/40">{storeAlt.distance} mi · {storeAlt.rentalPeriod}</p>
                </div>
                <span className="text-lg font-bold text-white">{money(storeAlt.estimatedPrice)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-2xl font-bold text-white">{money(item.priceDay)}</span>
                <span className="text-sm text-white/40">/day</span>
              </div>
              <div className="text-right text-xs text-white/40">
                <p>{money(item.priceWeekend)}/weekend</p>
                <p>{money(item.priceWeek)}/week</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-white/50">
              <span>Refundable deposit</span>
              <span className="font-semibold text-white">{money(item.deposit)}</span>
            </div>

            <button onClick={() => setShowModal(true)} className="mt-5 w-full rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.02]">
              Request to rent
            </button>
            <Link to="/messages" className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-white hover:bg-white/[0.07]">
              <MessageCircle size={15} /> Ask a question
            </Link>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-bold text-white">{owner?.avatar}</div>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white">{owner?.name} {owner?.verifiedId && <ShieldCheck size={13} className="text-emerald-300" />}</p>
                <UserRating rating={owner?.rating} reviews={owner?.reviews} size={12} />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {owner?.badges.map((b) => <TrustBadge key={b} label={b} size="sm" />)}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/40">
              <span>Response rate: <b className="text-white/70">{owner?.responseRate}%</b></span>
              <span>Lends: <b className="text-white/70">{owner?.successfulLends}</b></span>
            </div>
          </div>

          <AvailabilityCalendar />
          <SavingsCalculator buyPrice={item.estimatedValue} rentalPricePerDay={item.priceDay} />
        </div>
      </div>

      {showModal && <RentalRequestModal item={item} onClose={() => setShowModal(false)} />}
    </div>
  );
}
