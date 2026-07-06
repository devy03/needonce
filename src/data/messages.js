export const CONVERSATIONS = [
  {
    id: 'c1', otherUserId: 'u3', itemTitle: 'Gas Pressure Washer 3000 PSI', rentalId: 'rr1',
    lastMessage: 'Sounds good, see you at 10am!', lastTime: '2h ago', unread: 0,
    messages: [
      { id: 'm1', sender: 'me', text: 'Is this still available for tomorrow?', time: '9:02 AM', system: false },
      { id: 'm2', sender: 'system', text: 'Request sent to Aisha Rahman', time: '9:02 AM', system: true },
      { id: 'm3', sender: 'u3', text: 'Yep! Works great, just used it this morning.', time: '9:14 AM', system: false },
      { id: 'm4', sender: 'system', text: 'Aisha accepted your request', time: '9:15 AM', system: true },
      { id: 'm5', sender: 'me', text: 'Can I pick up today around 10am?', time: '9:16 AM', system: false },
      { id: 'm6', sender: 'u3', text: 'Sounds good, see you at 10am!', time: '9:20 AM', system: false },
    ],
  },
  {
    id: 'c2', otherUserId: 'u1', itemTitle: 'Portable Projector 1080p + Screen', rentalId: 'rr3',
    lastMessage: 'Does it include the screen too?', lastTime: '1d ago', unread: 1,
    messages: [
      { id: 'm7', sender: 'me', text: 'Does it include accessories?', time: 'Yesterday, 4:12 PM', system: false },
      { id: 'm8', sender: 'u1', text: 'Yes — HDMI cable, tripod, and a 100in screen all included.', time: 'Yesterday, 4:30 PM', system: false },
      { id: 'm9', sender: 'me', text: 'Does it include the screen too?', time: 'Yesterday, 4:31 PM', system: false },
    ],
  },
  {
    id: 'c3', otherUserId: 'u4', itemTitle: 'Cordless Power Drill with Charger', rentalId: 'rr4',
    lastMessage: 'Request sent — awaiting response', lastTime: '3h ago', unread: 0,
    messages: [
      { id: 'm10', sender: 'system', text: 'Devon Park requested to rent your item', time: '3h ago', system: true },
      { id: 'm11', sender: 'u4', text: 'Can I extend the rental by a day if needed?', time: '3h ago', system: false },
    ],
  },
];

export const QUICK_REPLIES = [
  'Is this still available?',
  'Can I pick up today?',
  'Does it include accessories?',
  'Can I extend the rental?',
];
