import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-[#05050a]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500">
                <div className="h-3 w-3 rounded-full bg-white/90" />
              </div>
              <span className="text-base font-bold text-white">BorrowIt</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              Need it once? Don't buy it. Compare neighbors, rental stores, tool libraries, and community lenders in one search.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link to="/search" className="hover:text-white">Search</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/add-item" className="hover:text-white">List an item</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Community</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link to="/groups" className="hover:text-white">Groups</Link></li>
              <li><Link to="/safety" className="hover:text-white">Trust & safety</Link></li>
              <li><Link to="/source-suggest" className="hover:text-white">Suggest a source</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link to="/admin" className="hover:text-white">Admin</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/30 md:flex-row">
          <span>© 2026 BorrowIt. All rights reserved.</span>
          <span>Your community already owns what you need.</span>
        </div>
      </div>
    </footer>
  );
}
