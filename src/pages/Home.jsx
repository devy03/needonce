import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search, Handshake, PackageCheck, PiggyBank, Recycle, Users2, Library,
  ArrowRight, ShieldCheck, Star, Building2, GraduationCap, Home as HomeIcon,
} from 'lucide-react';
import PremiumSearchBar from '../components/PremiumSearchBar';
import CategoryChip from '../components/CategoryChip';
import AnimatedHeroVisual from '../components/AnimatedHeroVisual';
import ComparisonResultRow from '../components/ComparisonResultRow';
import { CATEGORIES } from '../data/categories';
import { getItemIcon } from '../data/itemIcons';
import { USERS } from '../data/users';
import { GROUPS } from '../data/groups';

const HOW_IT_WORKS = [
  { icon: Search, title: 'Tell us what you need', text: 'Search an item or describe a task — "hang a TV" or "clean my driveway" both work.' },
  { icon: Handshake, title: 'Compare every option nearby', text: 'Neighbors, rental stores, tool libraries, and community groups — all in one view.' },
  { icon: PackageCheck, title: 'Reserve, borrow, rent, or pick up', text: 'Book instantly, message the owner, and confirm pickup with a QR code.' },
  { icon: PiggyBank, title: 'Return it and save money', text: 'Get your deposit back and see exactly how much you saved by not buying.' },
];

const WHY_STATS = [
  { icon: PiggyBank, stat: '$74', label: 'Average saved per rental vs. buying new', tone: 'text-emerald-300' },
  { icon: Recycle, stat: '26,900 lbs', label: 'Waste avoided by our community this year', tone: 'text-blue-300' },
  { icon: Users2, stat: '4,218', label: 'Neighbors ready to lend nearby', tone: 'text-violet-300' },
  { icon: Library, stat: '38', label: 'Free library & tool-lending options mapped', tone: 'text-[#f5c451]' },
];

const POPULAR_NEEDS = [
  { icon: getItemIcon('chairs'), name: 'Folding chairs for backyard party', price: '$12/day', distance: '0.9 mi', availability: 'Available today', tag: 'default' },
  { icon: getItemIcon('pressure-washer'), name: 'Pressure washer for driveway', price: 'Free', distance: '2.4 mi', availability: 'Tool library', tag: 'free' },
  { icon: getItemIcon('drill'), name: 'Drill for wall mount', price: '$8/day', distance: '0.7 mi', availability: 'Available today', tag: 'best' },
  { icon: getItemIcon('projector'), name: 'Projector for event', price: '$20/day', distance: '1.1 mi', availability: 'Available today', tag: 'default' },
  { icon: getItemIcon('cricket'), name: 'Cricket kit for practice', price: '$10/day', distance: '1.8 mi', availability: 'Available today', tag: 'default' },
  { icon: getItemIcon('carpet-cleaner'), name: 'Carpet cleaner for apartment', price: '$16/day', distance: '1.6 mi', availability: 'Available today', tag: 'default' },
  { icon: getItemIcon('ladder'), name: 'Ladder for lights', price: '$15/day', distance: '1.4 mi', availability: 'Available tomorrow', tag: 'default' },
];

const COMMUNITY_TYPES = [
  { icon: Building2, label: 'Apartment buildings' },
  { icon: GraduationCap, label: 'College campuses' },
  { icon: HomeIcon, label: 'Neighborhoods' },
  { icon: Users2, label: 'Sports teams & clubs' },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/60"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live comparison across 4,200+ neighbors & 38 local sources
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Need it once? <span className="text-gradient">Don't buy it.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-5 max-w-lg text-lg leading-relaxed text-white/55"
              >
                Compare neighbors, rental stores, tool libraries, and community lenders to find the cheapest way to borrow or rent anything nearby.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <PremiumSearchBar />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {CATEGORIES.map((cat, i) => (
                  <CategoryChip
                    key={cat.id}
                    category={cat}
                    index={i}
                    onClick={() => (window.location.href = `/search?category=${cat.id}`)}
                  />
                ))}
              </motion.div>
            </div>

            <AnimatedHeroVisual />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How it works" title="Four steps to never buying a single-use item again" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]"
              >
                <span className="absolute right-5 top-5 text-4xl font-extrabold text-white/[0.06]">{i + 1}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20">
                  <step.icon size={20} className="text-violet-300" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/45">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUY SOMETHING YOU'LL USE ONCE */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why buy something you'll use once?" title="Your community already owns what you need" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6"
              >
                <s.icon size={20} className={s.tone} />
                <p className={`mt-4 text-3xl font-extrabold ${s.tone}`}>{s.stat}</p>
                <p className="mt-1.5 text-sm text-white/45">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR NEEDS */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Popular needs near you" title="Real comparisons, updated as neighbors list new items" center />
          <div className="mt-10 space-y-3">
            {POPULAR_NEEDS.map((row, i) => (
              <ComparisonResultRow
                key={row.name}
                icon={row.icon}
                name={row.name}
                price={row.price}
                priceLabel={row.tag === 'free' ? 'Free library option' : 'per day'}
                distance={row.distance}
                availability={row.availability}
                tone={row.tag}
                index={i}
                actionLabel="Compare"
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/search" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white hover:bg-white/[0.08]">
              See all comparisons <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUSTED COMMUNITY LENDING */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Trusted community lending" title="Real neighbors, verified and rated" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {USERS.slice(0, 3).map((u, i) => (
              <motion.div
                key={u.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-bold text-white">
                    {u.avatar}
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 font-semibold text-white">
                      {u.name} {u.verifiedId && <ShieldCheck size={14} className="text-emerald-300" />}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-white/40">
                      <Star size={11} className="fill-[#f5c451] text-[#f5c451]" /> {u.rating} · {u.successfulLends} lends
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {u.badges.map((b) => (
                    <span key={b} className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-white/60">{b}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR COMMUNITIES */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.06] p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">For communities</span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Private lending circles for the groups you already belong to</h2>
              <p className="mt-3 text-white/50">
                Apartment buildings, college campuses, temples, neighborhoods, sports teams, clubs, and Discord communities can create private groups with their own trust score, rules, and shared item shelf.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {COMMUNITY_TYPES.map((c) => (
                  <div key={c.label} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white/70">
                    <c.icon size={16} className="text-violet-300" /> {c.label}
                  </div>
                ))}
              </div>
              <Link to="/groups" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25">
                Explore groups <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-3">
              {GROUPS.slice(0, 3).map((g) => (
                <div key={g.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{g.name}</p>
                    <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[11px] text-white/50">{g.members} members</span>
                  </div>
                  <p className="mt-1 text-xs text-white/40">{g.activeItems} active items · {g.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 pt-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Stop buying things you only need once.</h2>
          <p className="mt-3 text-white/50">Find the cheapest way to get it today.</p>
          <div className="mt-7">
            <PremiumSearchBar large={false} />
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title, center }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">{eyebrow}</span>
      <h2 className="mt-2 max-w-2xl text-2xl font-bold text-white sm:text-3xl">{title}</h2>
    </div>
  );
}
