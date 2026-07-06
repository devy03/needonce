import { useState } from 'react';
import { Send } from 'lucide-react';
import { QUICK_REPLIES } from '../data/messages';
import { USERS } from '../data/users';

export default function MessageThread({ conversation, onSend }) {
  const [draft, setDraft] = useState('');
  const otherUser = USERS.find((u) => u.id === conversation.otherUserId);

  function send(text) {
    const message = text ?? draft;
    if (!message.trim()) return;
    onSend?.(message);
    setDraft('');
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-white/[0.08] px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">
          {otherUser?.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{otherUser?.name}</p>
          <p className="text-xs text-white/40">{conversation.itemTitle}</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
        {conversation.messages.map((m) => (
          <div key={m.id} className={m.system ? 'flex justify-center' : `flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            {m.system ? (
              <span className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] text-white/40">{m.text}</span>
            ) : (
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.sender === 'me'
                    ? 'bg-gradient-to-br from-violet-500 to-blue-500 text-white'
                    : 'bg-white/[0.06] text-white/85'
                }`}
              >
                {m.text}
                <div className={`mt-1 text-[10px] ${m.sender === 'me' ? 'text-white/70' : 'text-white/30'}`}>{m.time}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.08] p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {QUICK_REPLIES.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 hover:bg-white/[0.08] hover:text-white"
            >
              {q}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Write a message..."
            className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none placeholder-white/30 focus:border-violet-400/40"
          />
          <button
            onClick={() => send()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
