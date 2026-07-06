import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package, ListChecks, Inbox, Heart, MessageCircle, CreditCard, Star,
  ShieldCheck, Users, TrendingUp, Calendar, Wrench, DollarSign,
} from 'lucide-react';
import { MY_RENTALS, MY_LISTINGS_REQUESTS, EARNINGS_SUMMARY } from '../data/rentals';
import { getItemById, ITEMS } from '../data/items';
import { CURRENT_USER } from '../data/users';
import { GROUPS } from '../data/groups';
import StatusPill from '../components/StatusPill';
import DepositStatusCard from '../components/DepositStatusCard';
import TrustBadge from '../components/TrustBadge';
import UserRating from '../components/UserRating';
import GroupCard from '../components/GroupCard';
import { money } from '../lib/format';

const TABS = [
  { id: 'rentals', label: 'My rentals', icon: Package },
  { id: 'listings', label: 'My listed items', icon: ListChecks },
  { id: 'requests', label: 'Requests', icon: Inbox },
  { id: 'saved', label: 'Saved items', icon: Heart },
  { id: 'messages', label: 'Messages', icon: MessageCircle },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'trust', label: 'Trust profile', icon: ShieldCheck },
  { id: 'groups', label: 'Groups', icon: Users },
];

export default function Dashboard() {
  const [tab, setTab] = useState('rentals');
  const myListings = ITEMS.filter((i) => ['i1', 'i9', 'i5'].includes(i.id));

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Welcome back, {CURRENT_USER.name}</h1>
          <p className="mt-1 text-sm text-white/40">Here's what's happening with your rentals and listings.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">{CURRENT_USER.avatar}</div>
          <UserRating rating={CURRENT_USER.rating} reviews={CURRENT_USER.reviews} size={12} />
        </div>
      </div>

      {/* Quick stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <QuickStat icon={TrendingUp} label="Earnings this month" value={money(EARNINGS_SUMMARY.thisMonth)} tone="text-emerald-300" />
        <QuickStat icon={DollarSign} label="Pending payout" value={money(EARNINGS_SUMMARY.pendingPayout)} tone="text-[#f5c451]" />
        <QuickStat icon={Package} label="Items rented out" value={EARNINGS_SUMMARY.itemsRentedOut} tone="text-blue-300" />
        <QuickStat icon={Inbox} label="Pending requests" value={EARNINGS_SUMMARY.pendingRequests} tone="text-violet-300" />
      </div>

      <div className="mt-10 flex gap-2 overflow-x-auto border-b border-white/[0.08] pb-px">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex shrink-0 items-center gap-1.5 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              tab === t.id ? 'border-violet-400 text-white' : 'border-transparent text-white/40 hover:text-white/70'
            }`}
          >
            <t.icon size={14} /> {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === 'rentals' && (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Upcoming rentals & return reminders</p>
            {MY_RENTALS.map((r) => {
              const item = getItemById(r.itemId);
              return (
                <div key={r.id} className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">{r.itemTitle}</p>
                      <StatusPill status={r.status} />
                    </div>
                    <p className="mt-1 flex items-center gap-1 text-xs text-white/40"><Calendar size={12} /> {r.startDate} → {r.endDate} · {r.pickupMethod}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <DepositStatusCard amount={r.deposit} status={r.depositStatus} />
                    <Link to={`/item/${item?.id}`} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white hover:bg-white/[0.1]">View</Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab === 'listings' && (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Items you've listed</p>
            {myListings.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06]"><Wrench size={18} className="text-white/60" /></div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/40">{money(item.priceDay)}/day · {item.availability}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span>This item pays for itself after {Math.ceil(item.estimatedValue / item.priceDay)} rentals</span>
                  <Link to={`/item/${item.id}`} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-semibold text-white hover:bg-white/[0.1]">Manage</Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'requests' && (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Requests on your listed items</p>
            {MY_LISTINGS_REQUESTS.map((r) => (
              <div key={r.id} className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">{r.itemTitle}</p>
                    <StatusPill status={r.status} />
                  </div>
                  <p className="mt-1 text-xs text-white/40">{r.startDate} → {r.endDate} · Total due: {money(r.totalDue)}</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-full bg-emerald-400/15 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-400/25">Accept</button>
                  <button className="rounded-full bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/60 hover:bg-white/[0.1]">Decline</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'saved' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.slice(4, 8).map((item) => (
              <Link key={item.id} to={`/item/${item.id}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 hover:bg-white/[0.05]">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-white/40">{money(item.priceDay)}/day · {item.distance} mi</p>
              </Link>
            ))}
          </div>
        )}

        {tab === 'messages' && (
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center text-white/50">
            View and reply to conversations in the <Link to="/messages" className="text-violet-300 underline">Messages</Link> center.
          </div>
        )}

        {tab === 'payments' && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Lifetime earnings</p>
              <p className="mt-2 text-3xl font-bold text-white">{money(EARNINGS_SUMMARY.totalLifetime)}</p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Pending payout</p>
              <p className="mt-2 text-3xl font-bold text-[#f5c451]">{money(EARNINGS_SUMMARY.pendingPayout)}</p>
            </div>
            {MY_RENTALS.map((r) => (
              <div key={r.id} className="col-span-full flex items-center justify-between rounded-xl bg-white/[0.03] p-3.5 text-sm">
                <span className="text-white/60">{r.itemTitle}</span>
                <span className="text-white/40">{r.paymentStatus}</span>
                <span className="font-semibold text-white">{money(r.totalDue)}</span>
              </div>
            ))}
          </div>
        )}

        {tab === 'reviews' && (
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center text-white/50">
            You have {CURRENT_USER.reviews} reviews with an average rating of {CURRENT_USER.rating}★.
          </div>
        )}

        {tab === 'trust' && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Verification</p>
              <div className="mt-3 space-y-2 text-sm text-white/60">
                <p>Email verified: {CURRENT_USER.verifiedEmail ? 'Yes' : 'No'}</p>
                <p>Phone verified: {CURRENT_USER.verifiedPhone ? 'Yes' : 'No'}</p>
                <p>ID verified: {CURRENT_USER.verifiedId ? 'Yes' : 'Not yet'}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Badges</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {CURRENT_USER.badges.map((b) => <TrustBadge key={b} label={b} />)}
              </div>
              <p className="mt-3 text-xs text-white/40">Response rate {CURRENT_USER.responseRate}% · Cancellation rate {CURRENT_USER.cancellationRate}%</p>
            </div>
          </div>
        )}

        {tab === 'groups' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GROUPS.slice(0, 3).map((g, i) => <GroupCard key={g.id} group={g} index={i} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function QuickStat({ icon: Icon, label, value, tone }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
      <Icon size={16} className={tone} />
      <p className={`mt-2 text-xl font-bold ${tone}`}>{value}</p>
      <p className="text-xs text-white/40">{label}</p>
    </div>
  );
}
