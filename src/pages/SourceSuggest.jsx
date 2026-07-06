import { useState } from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function SourceSuggest() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', item: '', price: '', location: '', link: '', notes: '' });

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-5 py-32 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15">
          <CheckCircle2 size={30} className="text-emerald-300" />
        </div>
        <h1 className="text-2xl font-bold text-white">Thanks for the suggestion!</h1>
        <p className="text-white/50">Our team will review "{form.name}" and add it to the comparison engine if it checks out.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 pb-24 pt-14 lg:px-8">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300"><MapPin size={13} /> Suggest a source</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Know a library, store, or lending program we're missing?</h1>
      <p className="mt-2 text-white/50">Help us grow the comparison database — tool libraries, community centers, and rental shops all welcome.</p>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-8 space-y-5">
        <Field label="Name of library / store / community center">
          <input value={form.name} onChange={(e) => update('name', e.target.value)} required className="input" />
        </Field>
        <Field label="Item(s) available">
          <input value={form.item} onChange={(e) => update('item', e.target.value)} className="input" placeholder="e.g. pressure washers, folding chairs" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Price (or 'Free')">
            <input value={form.price} onChange={(e) => update('price', e.target.value)} className="input" />
          </Field>
          <Field label="Location / general area">
            <input value={form.location} onChange={(e) => update('location', e.target.value)} className="input" />
          </Field>
        </div>
        <Field label="Website or link (optional)">
          <input value={form.link} onChange={(e) => update('link', e.target.value)} className="input" />
        </Field>
        <Field label="Notes">
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={3} className="input" />
        </Field>
        <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25">
          Submit suggestion
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
