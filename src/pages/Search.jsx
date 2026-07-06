import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  List, Map as MapIcon, Columns3, SlidersHorizontal, Library, Store, Users,
  Sparkles, Zap, Gift, ShieldCheck, ChevronDown,
} from 'lucide-react';
import PremiumSearchBar from '../components/PremiumSearchBar';
import CategoryChip from '../components/CategoryChip';
import ComparisonResultRow from '../components/ComparisonResultRow';
import ItemCardPremium from '../components/ItemCardPremium';
import SourceBadge from '../components/SourceBadge';
import AIRecommendationPanel from '../components/AIRecommendationPanel';
import SavingsCalculator from '../components/SavingsCalculator';
import MapMock from '../components/MapMock';
import { CATEGORIES } from '../data/categories';
import { searchItems, ITEMS } from '../data/items';
import { EXTERNAL_SOURCES } from '../data/sources';
import { findTaskBundle } from '../data/taskBundles';
import { getItemIcon } from '../data/itemIcons';
import { money } from '../lib/format';

const LIBRARY_TYPES = ['Tool library', 'Public library Library of Things', 'University equipment checkout', 'Makerspace', 'Community center'];

const FILTERS = ['Free only', 'Available today', 'Deposit required', 'Verified owner', 'Pickup/delivery'];
const VIEWS = [
  { id: 'list', label: 'List', icon: List },
  { id: 'map', label: 'Map', icon: MapIcon },
  { id: 'compare', label: 'Compare', icon: Columns3 },
];

export default function Search() {
  const [params] = useSearchParams();
  const query = params.get('q') || params.get('category') || 'Pressure washer';
  const [view, setView] = useState('list');
  const [activeFilters, setActiveFilters] = useState([]);
  const [category, setCategory] = useState(params.get('category') || null);

  const communityItems = useMemo(() => {
    let items = searchItems(query);
    if (category) items = items.filter((i) => i.category === category);
    if (activeFilters.includes('Free only')) items = items.filter((i) => i.freeToBorrow);
    if (activeFilters.includes('Available today')) items = items.filter((i) => i.availability === 'Available today');
    if (activeFilters.includes('Deposit required')) items = items.filter((i) => i.deposit > 0);
    if (activeFilters.includes('Verified owner')) items = items.filter((i) => i.verified);
    if (activeFilters.includes('Pickup/delivery')) items = items.filter((i) => i.delivery);
    return items.length ? items : ITEMS.slice(0, 4);
  }, [query, category, activeFilters]);

  const relevantCategory = communityItems[0]?.category || 'tools';
  const storeSources = EXTERNAL_SOURCES.filter((s) => s.category === relevantCategory && !LIBRARY_TYPES.includes(s.sourceType));
  const librarySources = EXTERNAL_SOURCES.filter((s) => s.category === relevantCategory && LIBRARY_TYPES.includes(s.sourceType));
  const bundle = findTaskBundle(query);

  const cheapestCommunity = [...communityItems].sort((a, b) => a.priceDay - b.priceDay)[0];
  const cheapestFree = librarySources[0];
  const fastest = communityItems.find((i) => i.availability === 'Available today') || communityItems[0];
  const mostReliable = [...communityItems].sort((a, b) => b.rating - a.rating)[0];

  const mapPins = [
    ...communityItems.map((i) => ({ id: i.id, type: 'community', name: i.title, price: i.priceDay, distance: i.distance, availability: i.availability })),
    ...storeSources.map((s) => ({ id: s.id, type: 'store', name: s.sourceName, price: s.estimatedPrice, distance: s.distance, availability: s.availability })),
    ...librarySources.map((s) => ({ id: s.id, type: 'free', name: s.sourceName, price: 'Free', distance: s.distance, availability: s.availability })),
  ];
  if (mapPins.length) mapPins[0] = { ...mapPins[0], type: 'best' };

  function toggleFilter(f) {
    setActiveFilters((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  return (
    <div className="pb-24">
      {/* Sticky search header */}
      <div className="sticky top-[65px] z-30 border-b border-white/[0.06] bg-[#05050a]/90 px-5 py-4 backdrop-blur-xl lg:px-8">
        <div className="mx-auto max-w-7xl space-y-4">
          <PremiumSearchBar initialValue={params.get('q') || ''} large={false} />
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1">
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    view === v.id ? 'bg-white/[0.12] text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  <v.icon size={13} /> {v.label}
                </button>
              ))}
            </div>
            <div className="h-5 w-px shrink-0 bg-white/10" />
            {CATEGORIES.slice(0, 6).map((c, i) => (
              <CategoryChip key={c.id} category={c} index={i} active={category === c.id} onClick={() => setCategory(category === c.id ? null : c.id)} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1 text-xs text-white/40"><SlidersHorizontal size={12} /> Filters:</span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => toggleFilter(f)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  activeFilters.includes(f)
                    ? 'border-violet-400/40 bg-violet-500/15 text-violet-200'
                    : 'border-white/10 bg-white/[0.02] text-white/50 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <p className="text-sm text-white/40">Showing results for</p>
        <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">"{query}"</h1>

        {bundle && (
          <div className="mt-6">
            <AIRecommendationPanel task={bundle.task} items={bundle.items} />
          </div>
        )}

        {view === 'map' ? (
          <div className="mt-8">
            <MapMock pins={mapPins} />
          </div>
        ) : (
          <>
            {/* Best Match Summary */}
            <section className="mt-8">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Best match summary</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SummaryCard icon={Sparkles} tone="gold" label="Best value" name={mostReliable?.title} sub={`${money(mostReliable?.priceDay)}/day · ${mostReliable?.rating}★`} />
                <SummaryCard icon={Gift} tone="emerald" label="Free option" name={cheapestFree?.sourceName || 'No free option nearby'} sub={cheapestFree ? `${cheapestFree.distance} mi away` : 'Try a hardware store instead'} />
                <SummaryCard icon={Zap} tone="blue" label="Fastest option" name={fastest?.title} sub={fastest?.availability} />
                <SummaryCard icon={ShieldCheck} tone="violet" label="Cheapest" name={cheapestCommunity?.title} sub={`${money(cheapestCommunity?.priceDay)}/day`} />
              </div>
            </section>

            {/* Comparison rows */}
            <section className="mt-12">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Compare every option</h2>
              <div className="space-y-3">
                {librarySources[0] && (
                  <ComparisonResultRow
                    icon={Library}
                    name={librarySources[0].sourceName}
                    price="Free"
                    priceLabel={librarySources[0].rentalPeriod}
                    distance={`${librarySources[0].distance} mi`}
                    availability={librarySources[0].availability}
                    tone="free"
                    badge={<SourceBadge type="free" />}
                    actionLabel="How to borrow"
                  />
                )}
                {fastest && (
                  <ComparisonResultRow
                    icon={Users}
                    name={fastest.title}
                    price={money(fastest.priceDay)}
                    priceLabel="per day · neighbor rental"
                    distance={`${fastest.distance} mi`}
                    availability={fastest.availability}
                    tone="best"
                    badge={<SourceBadge type="best_deal" />}
                    actionLabel="View item"
                  />
                )}
                {storeSources[0] && (
                  <ComparisonResultRow
                    icon={Store}
                    name={storeSources[0].sourceName}
                    price={money(storeSources[0].estimatedPrice)}
                    priceLabel={`per ${storeSources[0].rentalPeriod} · reliable store`}
                    distance={`${storeSources[0].distance} mi`}
                    availability={storeSources[0].availability}
                    tone="default"
                    badge={<SourceBadge type="reliable" />}
                    actionLabel="View source"
                  />
                )}
                <ComparisonResultRow
                  icon={Store}
                  name={`Buy used ${cheapestCommunity?.title || ''}`}
                  price={money(Math.round((cheapestCommunity?.estimatedValue || 150) * 0.55))}
                  priceLabel="only if needed long-term"
                  distance="Marketplace"
                  availability="Varies"
                  tone="dim"
                  actionLabel="View listings"
                />
                <ComparisonResultRow
                  icon={Store}
                  name={`Buy new ${cheapestCommunity?.title || ''}`}
                  price={money(cheapestCommunity?.estimatedValue || 149)}
                  priceLabel="not recommended for one-time use"
                  distance="Online / retail"
                  availability="In stock"
                  tone="dim"
                  actionLabel="View"
                />
              </div>
            </section>

            {/* Community Rentals */}
            <SectionBlock title="Community rentals" subtitle="Listed by verified neighbors near you" icon={Users}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {communityItems.map((item, i) => (
                  <ItemCardPremium key={item.id} item={item} index={i} />
                ))}
              </div>
            </SectionBlock>

            {/* Store Rentals */}
            <SectionBlock title="Store rentals" subtitle="Hardware stores and local rental shops" icon={Store}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(storeSources.length ? storeSources : EXTERNAL_SOURCES.filter((s) => !LIBRARY_TYPES.includes(s.sourceType)).slice(0, 3)).map((s, i) => (
                  <StoreCard key={s.id} source={s} index={i} />
                ))}
              </div>
            </SectionBlock>

            {/* Library / Free */}
            <SectionBlock title="Library & free borrowing options" subtitle="Tool libraries, Library of Things, makerspaces, and campus checkout" icon={Library}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(librarySources.length ? librarySources : EXTERNAL_SOURCES.filter((s) => LIBRARY_TYPES.includes(s.sourceType)).slice(0, 3)).map((s, i) => (
                  <LibraryCard key={s.id} source={s} index={i} />
                ))}
              </div>
            </SectionBlock>

            {/* Buy vs Rent Calculator */}
            <section className="mt-16">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">Buy vs. rent calculator</h2>
              <SavingsCalculator buyPrice={cheapestCommunity?.estimatedValue || 150} rentalPricePerDay={cheapestCommunity?.priceDay || 10} />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

function SummaryCard({ icon: Icon, tone, label, name, sub }) {
  const tones = {
    gold: 'from-[#f5c451]/15 to-transparent border-[#f5c451]/25 text-[#f5c451]',
    emerald: 'from-emerald-400/15 to-transparent border-emerald-400/25 text-emerald-300',
    blue: 'from-blue-400/15 to-transparent border-blue-400/25 text-blue-300',
    violet: 'from-violet-400/15 to-transparent border-violet-400/25 text-violet-300',
  }[tone];
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`rounded-2xl border bg-gradient-to-b p-5 ${tones}`}>
      <Icon size={17} />
      <p className="mt-3 text-xs font-medium uppercase tracking-wider text-white/40">{label}</p>
      <p className="mt-1 line-clamp-1 text-sm font-semibold text-white">{name || '—'}</p>
      <p className="mt-0.5 text-xs text-white/40">{sub}</p>
    </motion.div>
  );
}

function SectionBlock({ title, subtitle, icon: Icon, children }) {
  return (
    <section className="mt-16">
      <div className="mb-5 flex items-center gap-2.5">
        <Icon size={16} className="text-white/40" />
        <div>
          <h2 className="text-base font-bold text-white">{title}</h2>
          <p className="text-xs text-white/40">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function StoreCard({ source, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-white">{source.sourceName}</p>
          <p className="text-xs text-white/40">{source.sourceType} · {source.distance} mi</p>
        </div>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${source.availability === 'In stock' || source.availability.includes('today') ? 'bg-emerald-400/15 text-emerald-300' : 'bg-amber-400/15 text-amber-300'}`}>
          {source.availability}
        </span>
      </div>
      <p className="mt-3 text-sm text-white/50">{source.itemName}</p>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <span className="text-lg font-bold text-white">{money(source.estimatedPrice)}</span>
          <span className="text-xs text-white/40"> / {source.rentalPeriod}</span>
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-white/[0.1]">View source</button>
      </div>
      <p className="mt-2 text-[11px] text-white/30">{source.hours}</p>
    </motion.div>
  );
}

function LibraryCard({ source, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
      <div className="flex items-start justify-between">
        <p className="font-semibold text-white">{source.sourceName}</p>
        <SourceBadge type="free" label={source.estimatedPrice === 0 ? 'Free' : `$${source.estimatedPrice}`} />
      </div>
      <p className="mt-2 text-xs text-white/40">{source.sourceType} · {source.distance} mi</p>
      <p className="mt-3 text-sm text-white/50">{source.itemName}</p>
      <div className="mt-3 space-y-1 text-xs text-white/40">
        <p>Checkout period: {source.rentalPeriod}</p>
        <p>{source.libraryCardRequired ? 'Library card required' : source.membershipRequired ? 'Membership required' : 'No membership needed'}</p>
      </div>
      <button className="mt-4 w-full rounded-full bg-emerald-400/15 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-400/25">How to borrow</button>
    </motion.div>
  );
}
