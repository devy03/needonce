import { useState } from 'react';
import { CONVERSATIONS } from '../data/messages';
import { USERS } from '../data/users';
import MessageThread from '../components/MessageThread';

export default function Messages() {
  const [conversations, setConversations] = useState(CONVERSATIONS);
  const [activeId, setActiveId] = useState(CONVERSATIONS[0].id);
  const active = conversations.find((c) => c.id === activeId);

  function handleSend(text) {
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? { ...c, messages: [...c.messages, { id: `m${Date.now()}`, sender: 'me', text, time: 'Just now', system: false }], lastMessage: text, lastTime: 'Just now' }
          : c
      )
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-10 lg:px-8">
      <h1 className="text-2xl font-bold text-white sm:text-3xl">Messages</h1>
      <p className="mt-1 text-sm text-white/40">Coordinate pickup, ask questions, and track system updates.</p>

      <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/[0.08] lg:grid-cols-[320px_1fr]">
        <div className="divide-y divide-white/[0.06] border-b border-white/[0.06] lg:border-b-0 lg:border-r">
          {conversations.map((c) => {
            const user = USERS.find((u) => u.id === c.otherUserId);
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`flex w-full items-center gap-3 p-4 text-left transition-colors ${activeId === c.id ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">
                  {user?.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-white">{user?.name}</p>
                    <span className="shrink-0 text-[10px] text-white/30">{c.lastTime}</span>
                  </div>
                  <p className="truncate text-xs text-white/40">{c.itemTitle}</p>
                  <p className="truncate text-xs text-white/50">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && <span className="h-2 w-2 shrink-0 rounded-full bg-violet-400" />}
              </button>
            );
          })}
        </div>
        <div className="h-[560px] bg-white/[0.015]">
          <MessageThread conversation={active} onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
