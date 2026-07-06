const STATUS_STYLES = {
  Requested: 'bg-blue-500/15 text-blue-300 border-blue-400/25',
  Accepted: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
  Reserved: 'bg-violet-500/15 text-violet-300 border-violet-400/25',
  'Picked Up': 'bg-amber-500/15 text-amber-300 border-amber-400/25',
  'Due Soon': 'bg-orange-500/15 text-orange-300 border-orange-400/25',
  Overdue: 'bg-rose-500/15 text-rose-300 border-rose-400/25',
  Returned: 'bg-teal-500/15 text-teal-300 border-teal-400/25',
  Completed: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
  Disputed: 'bg-rose-500/15 text-rose-300 border-rose-400/25',
  Cancelled: 'bg-white/10 text-white/50 border-white/15',
};

export default function StatusPill({ status }) {
  const style = STATUS_STYLES[status] || 'bg-white/10 text-white/60 border-white/15';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${style}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
