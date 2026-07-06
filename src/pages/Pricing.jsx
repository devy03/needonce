import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Borrower', price: 'Free', desc: 'For anyone searching and renting items nearby.',
    features: ['Unlimited search & comparisons', 'Message owners directly', '10% service fee only on paid rentals', 'Buy vs. rent calculator'],
  },
  {
    name: 'Premium Lender', price: '$9/mo', desc: 'For people listing multiple items regularly.', highlight: true,
    features: ['Unlimited listings', 'Featured placement in search', 'Lower service fee (7%)', 'Advanced pricing suggestions', 'Priority support'],
  },
  {
    name: 'Community Plan', price: 'Custom', desc: 'For apartment buildings, colleges, temples, and clubs.',
    features: ['Private group with invite codes', 'Group trust score & leaderboard', 'Admin moderation tools', 'Custom rules & branding'],
  },
];

const BUSINESS_MODEL = [
  '10% service fee on peer-to-peer rentals',
  'Optional $1–$3 booking fee for small rentals',
  'Featured listings for local stores',
  'Premium lender plan for people with many items',
  'Private community plan for apartment buildings, colleges, clubs, temples, sports teams, and neighborhoods',
  'Future referral partnerships with rental stores',
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-14 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">Pricing</span>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Simple, fair, and community-first</h1>
        <p className="mx-auto mt-4 max-w-lg text-white/50">Borrowing is always free to search. We only make money when a rental actually happens.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={`rounded-3xl border p-7 ${p.highlight ? 'border-violet-400/40 bg-gradient-to-b from-violet-500/[0.1] to-transparent' : 'border-white/[0.08] bg-white/[0.03]'}`}>
            {p.highlight && <span className="rounded-full bg-violet-500/20 px-2.5 py-1 text-[11px] font-semibold text-violet-300">Most popular</span>}
            <h3 className="mt-3 text-lg font-bold text-white">{p.name}</h3>
            <p className="mt-1 text-3xl font-extrabold text-white">{p.price}</p>
            <p className="mt-2 text-sm text-white/50">{p.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <Check size={15} className="mt-0.5 shrink-0 text-emerald-300" /> {f}
                </li>
              ))}
            </ul>
            <button className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold ${p.highlight ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/25' : 'border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]'}`}>
              Get started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7">
        <h3 className="text-base font-semibold text-white">How BorrowIt makes money</h3>
        <ul className="mt-4 space-y-2.5">
          {BUSINESS_MODEL.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-white/60">
              <Check size={14} className="mt-0.5 shrink-0 text-violet-300" /> {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
