import { useParams, Link } from 'react-router-dom';
import { Users, Trophy, ShieldCheck, Activity, Copy } from 'lucide-react';
import { getGroupById, GROUPS } from '../data/groups';
import { ITEMS } from '../data/items';
import ItemCardPremium from '../components/ItemCardPremium';
import { USERS } from '../data/users';

export default function GroupDetail() {
  const { id } = useParams();
  const group = getGroupById(id) || GROUPS[0];
  const admin = USERS.find((u) => u.id === group.adminId);
  const groupItems = ITEMS.filter((i) => i.groupId === group.id);
  const leaderboard = [...USERS].sort((a, b) => b.successfulLends - a.successfulLends).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-8">
      <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-[11px] font-medium text-violet-300">{group.type}</span>
      <h1 className="mt-3 text-3xl font-bold text-white">{group.name}</h1>
      <p className="mt-2 max-w-2xl text-white/50">{group.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/70"><Users size={14} /> {group.members} members</span>
        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/70"><ShieldCheck size={14} className="text-emerald-300" /> Trust score {group.trustScore}</span>
        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/70 font-mono">
          <Copy size={13} /> {group.inviteCode}
        </span>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40">Group-only items</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(groupItems.length ? groupItems : ITEMS.slice(0, 3)).map((item, i) => (
              <ItemCardPremium key={item.id} item={item} index={i} />
            ))}
          </div>

          <h2 className="mt-12 text-sm font-semibold uppercase tracking-wider text-white/40">Activity feed</h2>
          <div className="mt-4 space-y-3">
            {group.activity.map((a) => (
              <div key={a.id} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                <Activity size={15} className="mt-0.5 shrink-0 text-violet-300" />
                <div>
                  <p className="text-sm text-white/70">{a.text}</p>
                  <p className="mt-0.5 text-xs text-white/30">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Group rules</p>
            <p className="mt-2 text-sm text-white/60">{group.rules}</p>
            <p className="mt-3 text-xs text-white/40">Admin: {admin?.name}</p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/40"><Trophy size={13} className="text-[#f5c451]" /> Leaderboard</p>
            <div className="mt-3 space-y-2.5">
              {leaderboard.map((u, i) => (
                <div key={u.id} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-white/70"><span className="text-white/30">#{i + 1}</span> {u.name}</span>
                  <span className="font-semibold text-white">{u.successfulLends} lends</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/groups" className="text-sm text-violet-300 underline">← Back to all groups</Link>
      </div>
    </div>
  );
}
