import {
  ShieldCheck, Camera, QrCode, AlertTriangle, Ban, FileWarning, Lock,
} from 'lucide-react';
import { BANNED_KEYWORDS } from '../data/admin';

const SAFETY_FEATURES = [
  { icon: Camera, title: 'Before & after photos', text: 'Every rental captures condition photos at pickup and return to prevent disputes.' },
  { icon: QrCode, title: 'QR pickup & return confirmation', text: 'Both borrower and owner confirm handoff with a unique code — no he-said-she-said.' },
  { icon: Lock, title: 'Deposit protection', text: 'Refundable deposits are held (not charged) until the item is returned in good condition.' },
  { icon: FileWarning, title: 'Damage & dispute flow', text: 'Report damage with photos, and our team helps mediate a fair resolution.' },
];

const TRUST_LEVELS = [
  'Verified email', 'Verified phone', 'ID verification (optional)', 'Profile photo required',
  'Ratings & reviews after every rental', 'Response rate & cancellation rate tracked',
];

export default function Safety() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-14 lg:px-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">Trust & safety</span>
      <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Built for peace of mind on both sides of every rental</h1>
      <p className="mt-4 text-white/50">BorrowIt is designed so borrowers and owners can trust every handoff, every deposit, and every listing.</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SAFETY_FEATURES.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
            <f.icon size={20} className="text-emerald-300" />
            <h3 className="mt-3 text-base font-semibold text-white">{f.title}</h3>
            <p className="mt-1.5 text-sm text-white/50">{f.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
        <h3 className="flex items-center gap-2 text-base font-semibold text-white"><ShieldCheck size={18} className="text-violet-300" /> Trust levels</h3>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {TRUST_LEVELS.map((t) => (
            <div key={t} className="rounded-xl bg-white/[0.03] px-4 py-2.5 text-sm text-white/60">{t}</div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] p-6">
        <h3 className="flex items-center gap-2 text-base font-semibold text-rose-300"><Ban size={18} /> Prohibited items</h3>
        <p className="mt-2 text-sm text-white/50">We do not allow listings for firearms, weapons, drugs, alcohol, prescription medication, hazardous chemicals, stolen goods, surveillance/spyware devices, or anything illegal or unsafe.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {BANNED_KEYWORDS.map((k) => (
            <span key={k} className="rounded-full bg-rose-400/10 px-3 py-1 text-xs text-rose-300">{k}</span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-300" />
        <p className="text-sm text-white/60">Power tools and other dangerous equipment always include a safety notes section — read it before every rental.</p>
      </div>
    </div>
  );
}
