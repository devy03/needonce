import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { money } from '../lib/format';

export default function SavingsCalculator({ buyPrice, rentalPricePerDay }) {
  const [usesPerYear, setUsesPerYear] = useState(3);
  const breakEven = Math.max(1, Math.round(buyPrice / rentalPricePerDay));
  const rentCostAtUses = rentalPricePerDay * usesPerYear;
  const worthBuying = usesPerYear >= breakEven;

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="flex items-center gap-2">
        <Calculator size={16} className="text-violet-300" />
        <h4 className="text-sm font-semibold text-white/80">Buy vs. rent calculator</h4>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="rounded-xl bg-white/[0.03] p-3">
          <p className="text-white/40">Buy new</p>
          <p className="text-lg font-bold text-white">{money(buyPrice)}</p>
        </div>
        <div className="rounded-xl bg-white/[0.03] p-3">
          <p className="text-white/40">Rent per day</p>
          <p className="text-lg font-bold text-white">{money(rentalPricePerDay)}</p>
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-center justify-between text-xs text-white/50">
          <span>How many times per year would you use it?</span>
          <span className="font-semibold text-white">{usesPerYear}</span>
        </label>
        <input
          type="range"
          min={1}
          max={20}
          value={usesPerYear}
          onChange={(e) => setUsesPerYear(Number(e.target.value))}
          className="mt-2 w-full accent-violet-500"
        />
      </div>

      <div className={`mt-4 rounded-xl p-3.5 text-sm ${worthBuying ? 'bg-[#f5c451]/10 text-[#f5c451]' : 'bg-emerald-400/10 text-emerald-300'}`}>
        {worthBuying
          ? `Buying makes sense — at ${usesPerYear}x/year you'd spend ${money(rentCostAtUses)} renting, more than buying.`
          : `Renting is cheaper — if you use it fewer than ${breakEven} times per year, renting saves you money.`}
      </div>
    </div>
  );
}
