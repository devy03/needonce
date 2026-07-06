import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, CheckCircle2, Upload } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

function mockAISuggest(text) {
  const t = text.toLowerCase();
  if (t.includes('drill')) {
    return {
      title: 'Cordless Power Drill with Charger',
      category: 'tools',
      price: 6,
      deposit: 25,
      description: 'Good for basic home projects, wall mounting, furniture assembly, and light drilling.',
      safety: 'Wear eye protection when drilling overhead or into masonry.',
    };
  }
  if (t.includes('chair')) {
    return {
      title: 'Folding Chairs (Set)',
      category: 'party',
      price: 10,
      deposit: 15,
      description: 'Sturdy folding chairs, great for backyard parties, weddings, or overflow seating.',
      safety: 'Do not stack more than 6 high when carrying.',
    };
  }
  if (t.includes('camera')) {
    return {
      title: 'DSLR Camera Kit',
      category: 'camera',
      price: 30,
      deposit: 120,
      description: 'Great for events, portraits, and short films. Recently serviced and cleaned.',
      safety: 'Use provided strap at all times, avoid extreme weather.',
    };
  }
  return {
    title: text ? text.charAt(0).toUpperCase() + text.slice(1) : 'Untitled Item',
    category: 'tools',
    price: 8,
    deposit: 20,
    description: 'A well-maintained item, ready to lend to someone nearby who only needs it once.',
    safety: 'Handle with care and inspect before each use.',
  };
}

export default function AddItem() {
  const [rawInput, setRawInput] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: '', category: 'tools', description: '', condition: 'Excellent',
    estimatedValue: '', priceDay: '', priceWeekend: '', priceWeek: '',
    deposit: '', lateFee: '', pickupArea: '', delivery: false,
    rules: '', accessories: '', safety: '', replacementCost: '',
    groupOnly: false, freeToBorrow: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function runAI() {
    if (!rawInput.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const s = mockAISuggest(rawInput);
      setAiSuggestion(s);
      setForm((f) => ({
        ...f,
        title: s.title,
        category: s.category,
        priceDay: s.price,
        priceWeekend: Math.round(s.price * 2.2),
        priceWeek: Math.round(s.price * 3.8),
        deposit: s.deposit,
        description: s.description,
        safety: s.safety,
      }));
      setLoading(false);
    }, 900);
  }

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-5 py-32 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15">
          <CheckCircle2 size={30} className="text-emerald-300" />
        </div>
        <h1 className="text-2xl font-bold text-white">Your item is live!</h1>
        <p className="text-white/50">"{form.title}" is now listed and visible to nearby neighbors and your groups.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-10 lg:px-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">List an item</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Turn unused stuff into extra income</h1>
      <p className="mt-2 text-white/50">Describe your item below, or type something messy — our AI listing helper will clean it up.</p>

      {/* AI Helper */}
      <div className="mt-8 rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] to-transparent p-5">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-violet-300" />
          <h3 className="text-sm font-semibold text-white">AI listing helper</h3>
        </div>
        <p className="mt-1 text-xs text-white/40">Type messy info like "yellow drill with charger" and we'll suggest a full listing.</p>
        <div className="mt-3 flex gap-2">
          <input
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder="e.g. yellow drill with charger"
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white outline-none placeholder-white/30 focus:border-violet-400/40"
          />
          <button onClick={runAI} className="rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white">
            {loading ? 'Thinking...' : 'Suggest'}
          </button>
        </div>
        {aiSuggestion && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-white/[0.04] p-4 text-sm text-white/70">
            Suggested: <b className="text-white">{aiSuggestion.title}</b> · {aiSuggestion.category} · ${aiSuggestion.price}/day · ${aiSuggestion.deposit} deposit — applied to the form below.
          </motion.div>
        )}
      </div>

      {/* Photo upload mock */}
      <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-white/40">
        <Upload size={20} />
        <span className="text-sm">Drop photos here or click to upload (mock — no upload backend yet)</span>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        className="mt-8 space-y-6"
      >
        <Field label="Item name">
          <input value={form.title} onChange={(e) => update('title', e.target.value)} className="input" required />
        </Field>

        <Field label="Category">
          <select value={form.category} onChange={(e) => update('category', e.target.value)} className="input">
            {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </Field>

        <Field label="Description">
          <textarea value={form.description} onChange={(e) => update('description', e.target.value)} rows={3} className="input" />
        </Field>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <Field label="Condition">
            <select value={form.condition} onChange={(e) => update('condition', e.target.value)} className="input">
              {['Excellent', 'Good', 'Fair'].map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Estimated value ($)"><input type="number" value={form.estimatedValue} onChange={(e) => update('estimatedValue', e.target.value)} className="input" /></Field>
          <Field label="Replacement cost ($)"><input type="number" value={form.replacementCost} onChange={(e) => update('replacementCost', e.target.value)} className="input" /></Field>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Field label="Price/day ($)"><input type="number" value={form.priceDay} onChange={(e) => update('priceDay', e.target.value)} className="input" /></Field>
          <Field label="Price/weekend ($)"><input type="number" value={form.priceWeekend} onChange={(e) => update('priceWeekend', e.target.value)} className="input" /></Field>
          <Field label="Price/week ($)"><input type="number" value={form.priceWeek} onChange={(e) => update('priceWeek', e.target.value)} className="input" /></Field>
          <Field label="Deposit ($)"><input type="number" value={form.deposit} onChange={(e) => update('deposit', e.target.value)} className="input" /></Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Late fee ($/day)"><input type="number" value={form.lateFee} onChange={(e) => update('lateFee', e.target.value)} className="input" /></Field>
          <Field label="Pickup area"><input value={form.pickupArea} onChange={(e) => update('pickupArea', e.target.value)} placeholder="e.g. Lincoln Park" className="input" /></Field>
        </div>

        <Field label="Included accessories (comma separated)">
          <input value={form.accessories} onChange={(e) => update('accessories', e.target.value)} className="input" placeholder="Charger, extra battery, case" />
        </Field>

        <Field label="Rules">
          <textarea value={form.rules} onChange={(e) => update('rules', e.target.value)} rows={2} className="input" />
        </Field>

        <Field label="Safety instructions">
          <textarea value={form.safety} onChange={(e) => update('safety', e.target.value)} rows={2} className="input" />
        </Field>

        <div className="flex flex-wrap gap-6">
          <Toggle label="Delivery available" checked={form.delivery} onChange={(v) => update('delivery', v)} />
          <Toggle label="Private group only" checked={form.groupOnly} onChange={(v) => update('groupOnly', v)} />
          <Toggle label="Free to borrow (instead of paid rental)" checked={form.freeToBorrow} onChange={(v) => update('freeToBorrow', v)} />
        </div>

        <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25">
          Publish listing
        </button>
      </form>

      <style>{`.input { width: 100%; border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); padding: 0.65rem 1rem; font-size: 0.875rem; color: white; outline: none; } .input:focus { border-color: rgba(167,139,250,0.5); }`}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/50">{label}</span>
      {children}
    </label>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-white/70">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition-colors ${checked ? 'bg-violet-500' : 'bg-white/[0.12]'}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
      {label}
    </label>
  );
}
