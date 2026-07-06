import { money } from '../lib/format';

export default function PriceBreakdown({ rentalFee, serviceFee, deposit, protectionFee = 0, days = 1 }) {
  const totalToday = rentalFee * days + serviceFee + protectionFee;
  return (
    <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <h4 className="text-sm font-semibold text-white/80">Price breakdown</h4>
      <div className="space-y-2 text-sm">
        <Row label={`Rental fee (${days} ${days === 1 ? 'day' : 'days'})`} value={money(rentalFee * days)} />
        <Row label="Service fee" value={money(serviceFee)} sub />
        {protectionFee > 0 && <Row label="Protection fee (optional)" value={money(protectionFee)} sub />}
        <div className="border-t border-white/[0.08] pt-2">
          <Row label="Estimated total today" value={money(totalToday)} bold />
        </div>
        <Row label="Refundable deposit (held, not charged)" value={money(deposit)} sub />
        <div className="rounded-xl bg-emerald-400/[0.06] p-3 text-xs text-emerald-300">
          You'll get {money(deposit)} back after the item is returned in good condition.
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, sub, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className={sub ? 'text-white/40' : 'text-white/70'}>{label}</span>
      <span className={bold ? 'text-base font-bold text-white' : sub ? 'text-white/50' : 'font-medium text-white'}>{value}</span>
    </div>
  );
}
