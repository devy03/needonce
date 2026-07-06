import { QrCode, CheckCircle2 } from 'lucide-react';

export default function QRConfirmCard({ code = 'NO-8842-KX', confirmed = false, label = 'Pickup confirmation' }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
      <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-white p-3">
        <QrCode size={90} className="text-black" strokeWidth={1} />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-0.5 font-mono text-xs tracking-widest text-white/50">{code}</p>
      </div>
      {confirmed ? (
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
          <CheckCircle2 size={13} /> Confirmed by both parties
        </span>
      ) : (
        <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300">
          Waiting for both parties to confirm
        </span>
      )}
    </div>
  );
}
