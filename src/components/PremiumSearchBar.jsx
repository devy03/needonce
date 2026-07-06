import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { SEARCH_SUGGESTIONS } from '../data/taskBundles';

export default function PremiumSearchBar({ initialValue = '', large = true, autoFocus = false }) {
  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (value) return;
    const t = setInterval(() => setPlaceholderIdx((i) => (i + 1) % SEARCH_SUGGESTIONS.length), 2600);
    return () => clearInterval(t);
  }, [value]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  function handleSubmit(e, q) {
    e?.preventDefault();
    const query = q ?? value;
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <motion.div
        animate={{
          boxShadow: focused
            ? '0 0 0 1px rgba(139,92,246,0.4), 0 20px 60px -10px rgba(139,92,246,0.35)'
            : '0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px -20px rgba(0,0,0,0.6)',
        }}
        className={`glass-strong relative flex items-center gap-3 rounded-2xl px-5 transition-all ${
          large ? 'py-2' : 'py-1'
        }`}
      >
        <Search size={large ? 22 : 18} className="shrink-0 text-white/50" />
        <div className="relative flex-1">
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder=" "
            className={`w-full bg-transparent text-white outline-none placeholder-transparent ${
              large ? 'py-4 text-lg' : 'py-2.5 text-sm'
            }`}
          />
          {!value && (
            <div className={`pointer-events-none absolute inset-0 flex items-center overflow-hidden ${large ? 'text-lg' : 'text-sm'}`}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIdx}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-white/35"
                >
                  Try "{SEARCH_SUGGESTIONS[placeholderIdx]}"
                </motion.span>
              </AnimatePresence>
            </div>
          )}
        </div>
        <button
          type="submit"
          className={`flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03] active:scale-95 ${
            large ? 'px-5 py-3.5' : 'px-4 py-2'
          }`}
        >
          Compare <ArrowRight size={16} />
        </button>
      </motion.div>
    </form>
  );
}
