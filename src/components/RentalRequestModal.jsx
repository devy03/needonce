import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Truck, Home, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import AvailabilityCalendar from './AvailabilityCalendar';
import PriceBreakdown from './PriceBreakdown';
import QRConfirmCard from './QRConfirmCard';
import { money } from '../lib/format';

const STEPS = ['Dates', 'Pickup', 'Review'];

export default function RentalRequestModal({ item, onClose }) {
  const [step, setStep] = useState(0);
  const [range, setRange] = useState({ start: null, end: null });
  const [pickupMethod, setPickupMethod] = useState('pickup');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const days = range.start && range.end ? Math.max(1, range.end - range.start) : 1;
  const serviceFee = +(item.priceDay * days * 0.1).toFixed(2);
  const protectionFee = 3;

  function next() {
    if (step === STEPS.length - 1) {
      setSent(true);
      return;
    }
    setStep((s) => s + 1);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.08] bg-[#0d0e18]/90 px-6 py-4 backdrop-blur">
          <div>
            <p className="text-sm font-semibold text-white">{sent ? 'Request sent' : `Request to rent`}</p>
            <p className="text-xs text-white/40">{item.title}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-1.5 text-white/40 hover:bg-white/[0.08] hover:text-white">
            <X size={18} />
          </button>
        </div>

        {!sent && (
          <div className="flex items-center gap-2 px-6 pt-4">
            {STEPS.map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-2">
                <div className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-gradient-to-r from-violet-500 to-blue-500' : 'bg-white/[0.08]'}`} />
              </div>
            ))}
          </div>
        )}

        <div className="p-6">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-5 py-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15">
                  <CheckCircle2 size={30} className="text-emerald-300" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Your request was sent!</p>
                  <p className="mt-1 text-sm text-white/50">The owner usually responds within a few hours. You'll get a notification once it's accepted.</p>
                </div>
                <QRConfirmCard label="Pickup code (ready after acceptance)" />
                <button onClick={onClose} className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 py-3 text-sm font-semibold text-white">
                  Done
                </button>
              </motion.div>
            ) : step === 0 ? (
              <motion.div key="dates" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/80"><Calendar size={15} /> Select rental dates</h3>
                <AvailabilityCalendar onSelectRange={setRange} />
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="pickup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
                <h3 className="mb-1 text-sm font-semibold text-white/80">Choose pickup or delivery</h3>
                <button
                  onClick={() => setPickupMethod('pickup')}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left ${pickupMethod === 'pickup' ? 'border-violet-400/40 bg-violet-500/10' : 'border-white/[0.08] bg-white/[0.02]'}`}
                >
                  <Home size={18} className="text-white/70" />
                  <div>
                    <p className="text-sm font-medium text-white">Pick up in person</p>
                    <p className="text-xs text-white/40">{item.distance} mi away — free</p>
                  </div>
                </button>
                {item.delivery && (
                  <button
                    onClick={() => setPickupMethod('delivery')}
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left ${pickupMethod === 'delivery' ? 'border-violet-400/40 bg-violet-500/10' : 'border-white/[0.08] bg-white/[0.02]'}`}
                  >
                    <Truck size={18} className="text-white/70" />
                    <div>
                      <p className="text-sm font-medium text-white">Delivery</p>
                      <p className="text-xs text-white/40">+$8 delivery fee</p>
                    </div>
                  </button>
                )}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Optional message to the owner..."
                  rows={3}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white outline-none placeholder-white/30 focus:border-violet-400/40"
                />
              </motion.div>
            ) : step === 2 ? (
              <motion.div key="review" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="mb-3 text-sm font-semibold text-white/80">Review & confirm</h3>
                <PriceBreakdown rentalFee={item.priceDay} serviceFee={serviceFee} deposit={item.deposit} protectionFee={protectionFee} days={days} />
                <label className="mt-4 flex items-start gap-2 text-xs text-white/50">
                  <input type="checkbox" defaultChecked className="mt-0.5 accent-violet-500" />
                  I agree to the rental agreement, item rules, and late fee policy of {money(item.lateFee)}/day.
                </label>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {!sent && (
          <div className="flex items-center justify-between border-t border-white/[0.08] p-6">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-white/50 disabled:opacity-0"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <button
              onClick={next}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25"
            >
              {step === 2 ? 'Send request' : 'Continue'} <ArrowRight size={14} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
