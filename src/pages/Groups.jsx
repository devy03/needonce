import { useState } from 'react';
import { Plus, Users } from 'lucide-react';
import { GROUPS } from '../data/groups';
import GroupCard from '../components/GroupCard';

export default function Groups() {
  const [showInvite, setShowInvite] = useState(false);
  const [code, setCode] = useState('');

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">Community groups</span>
          <h1 className="mt-2 text-3xl font-bold text-white">Private lending circles</h1>
          <p className="mt-2 max-w-xl text-white/50">Apartment buildings, college campuses, temples, neighborhoods, sports teams, clubs, and Discord communities — all with their own trust score and shared shelf.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowInvite(true)} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white hover:bg-white/[0.08]">
            <Users size={15} /> Join with code
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25">
            <Plus size={15} /> Create group
          </button>
        </div>
      </div>

      {showInvite && (
        <div className="mt-6 flex max-w-md items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3">
          <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter invite code" className="flex-1 rounded-lg bg-transparent px-3 py-2 text-sm text-white outline-none placeholder-white/30" />
          <button className="rounded-lg bg-violet-500 px-4 py-2 text-xs font-semibold text-white">Join</button>
        </div>
      )}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => <GroupCard key={g.id} group={g} index={i} />)}
      </div>
    </div>
  );
}
