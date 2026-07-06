import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, PlusCircle, MessageCircle, LayoutDashboard, Users } from 'lucide-react';

const NAV_LINKS = [
  { to: '/search', label: 'Search', icon: Search },
  { to: '/how-it-works', label: 'How it works', icon: null },
  { to: '/groups', label: 'Groups', icon: Users },
  { to: '/pricing', label: 'Pricing', icon: null },
  { to: '/safety', label: 'Safety', icon: null },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/[0.06] bg-[#05050a]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20 transition-transform group-hover:scale-105">
              <div className="h-3.5 w-3.5 rounded-full bg-white/90" />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-white">NeedOnce</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-white/[0.08] text-white'
                    : 'text-white/60 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/messages"
              className="rounded-full p-2.5 text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <MessageCircle size={18} />
            </Link>
            <Link
              to="/add-item"
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.09]"
            >
              <PlusCircle size={16} /> List an item
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03]"
            >
              <LayoutDashboard size={16} /> Dashboard
            </Link>
          </div>

          <button
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-white/[0.06] bg-[#05050a]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {[...NAV_LINKS, { to: '/messages', label: 'Messages' }, { to: '/add-item', label: 'List an item' }, { to: '/dashboard', label: 'Dashboard' }, { to: '/admin', label: 'Admin' }].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/[0.06]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
