import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { money } from '../lib/format';

const STATUS_META = {
  Held: { icon: Lock, color: 'text-amber-300', bg: 'bg-amber-400/10' },
  Released: { icon: CheckCircle2, color: 'text-emerald-300', bg: 'bg-emerald-400/10' },
  'Not paid': { icon: ShieldCheck, color: 'text-white/40', bg: 'bg-white/[0.04]' },
  'Partially captured': { icon: Lock, color: 'text-orange-300', bg: 'bg-orange-400/10' },
};

export default function DepositStatusCard({ amount, status = 'Held' }) {
  const meta = STATUS_META[status] || STATUS_META['Not paid'];
  const Icon = meta.icon;
  return (
    <div className={`flex items-center justify-between rounded-xl p-3.5 ${meta.bg}`}>
      <div className="flex items-center gap-2.5">
        <Icon size={16} className={meta.color} />
        <div>
          <p className="text-sm font-medium text-white">Deposit {status.toLowerCase()}</p>
          <p className="text-xs text-white/40">Refundable security deposit</p>
        </div>
      </div>
      <span className="text-sm font-bold text-white">{money(amount)}</span>
    </div>
  );
}
