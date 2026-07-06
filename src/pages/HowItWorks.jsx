import { Search, Handshake, PackageCheck, PiggyBank, ShieldCheck, Bot } from 'lucide-react';

const STEPS = [
  { icon: Search, title: 'Search an item or task', text: 'Type what you need, item or task-based — "hang a TV" works just like "cordless drill".' },
  { icon: Bot, title: 'AI suggests a bundle', text: 'Task-based searches trigger our AI bundle builder, which suggests every item you might need.' },
  { icon: Handshake, title: 'Compare every source', text: 'Neighbors, rental stores, tool libraries, and community groups appear side by side, ranked by price, speed, and reliability.' },
  { icon: PackageCheck, title: 'Reserve and confirm pickup', text: 'Book instantly, message the owner, and confirm pickup and return with a QR code.' },
  { icon: ShieldCheck, title: 'Stay protected', text: 'Deposits, condition photos, and reviews protect both borrowers and owners on every rental.' },
  { icon: PiggyBank, title: 'Track your savings', text: 'Your dashboard shows exactly how much you saved by renting or borrowing instead of buying.' },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-14 lg:px-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">How it works</span>
      <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Borrow from neighbors. Rent from stores. Check libraries. Compare everything.</h1>
      <p className="mt-4 text-white/50">BorrowIt combines every nearby way to access an item into one clean comparison — so you never overpay to buy something you'll only use once.</p>

      <div className="mt-12 space-y-5">
        {STEPS.map((s, i) => (
          <div key={s.title} className="flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20">
              <s.icon size={20} className="text-violet-300" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/30">Step {i + 1}</p>
              <h3 className="mt-0.5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm text-white/50">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
