import { useState } from 'react';
import {
  Users, Package, PiggyBank, Recycle, DollarSign, AlertTriangle, Flag,
  TrendingUp, Star, Ban,
} from 'lucide-react';
import { ADMIN_STATS, ADMIN_DISPUTES, ADMIN_REPORTED_LISTINGS, BANNED_KEYWORDS } from '../data/admin';
import { ITEMS } from '../data/items';
import { USERS } from '../data/users';
import AdminStatsCard from '../components/AdminStatsCard';
import { money } from '../lib/format';

const TABS = ['Overview', 'Users', 'Listings', 'Disputes', 'Sources', 'Categories'];

export default function Admin() {
  const [tab, setTab] = useState('Overview');

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">Admin</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Platform control center</h1>

      <div className="mt-8 flex gap-2 overflow-x-auto border-b border-white/[0.08] pb-px">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium ${tab === t ? 'border-violet-400 text-white' : 'border-transparent text-white/40 hover:text-white/70'}`}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Overview' && (
        <div className="mt-8 space-y-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AdminStatsCard icon={Users} label="Total users" value={ADMIN_STATS.totalUsers.toLocaleString()} index={0} />
            <AdminStatsCard icon={Package} label="Active rentals" value={ADMIN_STATS.activeRentals} index={1} />
            <AdminStatsCard icon={PiggyBank} label="Total saved by users" value={money(ADMIN_STATS.totalSavedByUsers)} tone="good" index={2} />
            <AdminStatsCard icon={Recycle} label="Waste avoided (lbs)" value={ADMIN_STATS.wasteAvoidedLbs.toLocaleString()} tone="good" index={3} />
            <AdminStatsCard icon={DollarSign} label="Platform fees this month" value={money(ADMIN_STATS.platformFeesThisMonth)} index={4} />
            <AdminStatsCard icon={AlertTriangle} label="High-risk listings" value={ADMIN_STATS.highRiskListings} tone="warn" index={5} />
            <AdminStatsCard icon={Flag} label="Open disputes" value={ADMIN_STATS.openDisputes} tone="bad" index={6} />
            <AdminStatsCard icon={TrendingUp} label="Most rented category" value={ADMIN_STATS.mostRentedCategories[0]} index={7} />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Most searched items</p>
              <div className="mt-3 space-y-2">
                {ADMIN_STATS.mostSearched.map((s, i) => (
                  <div key={s} className="flex items-center justify-between text-sm text-white/70">
                    <span>{i + 1}. {s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Most rented categories</p>
              <div className="mt-3 space-y-2">
                {ADMIN_STATS.mostRentedCategories.map((s, i) => (
                  <div key={s} className="flex items-center justify-between text-sm text-white/70">
                    <span>{i + 1}. {s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'Users' && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
              <tr><th className="p-4">Name</th><th className="p-4">Rating</th><th className="p-4">Lends</th><th className="p-4">Rentals</th><th className="p-4">Badges</th></tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {USERS.map((u) => (
                <tr key={u.id}>
                  <td className="p-4 font-medium text-white">{u.name}</td>
                  <td className="p-4 text-white/60"><span className="flex items-center gap-1"><Star size={12} className="fill-[#f5c451] text-[#f5c451]" /> {u.rating}</span></td>
                  <td className="p-4 text-white/60">{u.successfulLends}</td>
                  <td className="p-4 text-white/60">{u.successfulRentals}</td>
                  <td className="p-4 text-white/40">{u.badges.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'Listings' && (
        <div className="mt-8 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.04] text-left text-xs uppercase tracking-wider text-white/40">
                <tr><th className="p-4">Item</th><th className="p-4">Category</th><th className="p-4">Price/day</th><th className="p-4">Status</th><th className="p-4"></th></tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {ITEMS.slice(0, 8).map((item) => (
                  <tr key={item.id}>
                    <td className="p-4 font-medium text-white">{item.title}</td>
                    <td className="p-4 capitalize text-white/60">{item.category}</td>
                    <td className="p-4 text-white/60">{money(item.priceDay)}</td>
                    <td className="p-4"><span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-xs text-emerald-300">Approved</span></td>
                    <td className="p-4"><button className="text-xs text-rose-300 hover:underline">Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-amber-300"><Flag size={14} /> Reported listings</p>
            <div className="mt-3 space-y-2">
              {ADMIN_REPORTED_LISTINGS.map((l) => (
                <div key={l.id} className="flex items-center justify-between text-sm">
                  <span className="text-white/70">{l.title}</span>
                  <span className="text-xs text-white/40">{l.reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'Disputes' && (
        <div className="mt-8 space-y-4">
          {ADMIN_DISPUTES.map((d) => (
            <div key={d.id} className="flex items-center justify-between rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] p-5">
              <div>
                <p className="font-medium text-white">{d.reason}</p>
                <p className="mt-1 text-xs text-white/40">Opened by {d.openedBy} · Rental {d.rentalId}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">{money(d.amountClaimed)}</p>
                <p className="text-xs text-amber-300">{d.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'Sources' && (
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-white/60">
          <p>Manage manually-added library, tool library, and store rental sources from the <a href="/source-suggest" className="text-violet-300 underline">Suggest a source</a> submissions queue.</p>
        </div>
      )}

      {tab === 'Categories' && (
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-white/80"><Ban size={14} className="text-rose-300" /> Banned item keywords</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {BANNED_KEYWORDS.map((k) => (
              <span key={k} className="rounded-full bg-rose-400/10 px-3 py-1 text-xs text-rose-300">{k}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
