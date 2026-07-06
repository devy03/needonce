import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Deterministic mock unavailability based on day-of-month, so it looks realistic without a backend.
function isUnavailable(day) {
  return day % 7 === 3 || day % 11 === 0;
}

export default function AvailabilityCalendar({ selectedRange, onSelectRange }) {
  const [monthOffset, setMonthOffset] = useState(0);
  const today = new Date();
  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const monthLabel = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const firstDay = viewDate.getDay();
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  function handleClick(day) {
    if (isUnavailable(day)) return;
    if (!start || (start && end)) {
      setStart(day);
      setEnd(null);
      onSelectRange?.({ start: day, end: null });
    } else if (day >= start) {
      setEnd(day);
      onSelectRange?.({ start, end: day });
    } else {
      setStart(day);
      setEnd(null);
    }
  }

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white/80">Availability</h4>
        <div className="flex items-center gap-2">
          <button onClick={() => setMonthOffset((m) => m - 1)} className="rounded-lg p-1 text-white/40 hover:bg-white/[0.06] hover:text-white">
            <ChevronLeft size={16} />
          </button>
          <span className="w-28 text-center text-xs text-white/60">{monthLabel}</span>
          <button onClick={() => setMonthOffset((m) => m + 1)} className="rounded-lg p-1 text-white/40 hover:bg-white/[0.06] hover:text-white">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] text-white/30">
        {DAYS.map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const unavailable = isUnavailable(day);
          const selected = start && (day === start || (end && day >= start && day <= end));
          return (
            <button
              key={day}
              disabled={unavailable}
              onClick={() => handleClick(day)}
              className={`aspect-square rounded-lg text-xs font-medium transition-colors ${
                unavailable
                  ? 'cursor-not-allowed text-white/15 line-through'
                  : selected
                  ? 'bg-gradient-to-br from-violet-500 to-blue-500 text-white'
                  : 'text-white/70 hover:bg-white/[0.08]'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-4 text-[11px] text-white/40">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-white/20" /> Available</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-white/10 line-through" /> Booked</span>
      </div>
    </div>
  );
}
