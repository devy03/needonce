export const GROUPS = [
  {
    id: 'g1', name: 'UIC Student Borrow Circle', type: 'College campus',
    description: 'Textbooks, calculators, camera gear, and dorm essentials shared among UIC students.',
    members: 342, inviteCode: 'UIC-BORROW-24', adminId: 'u4', trustScore: 4.7,
    rules: 'UIC email required to join. Be on time for pickups during finals week.',
    location: 'UIC Campus', activeItems: 28,
    activity: [
      { id: 'a1', text: 'Devon Park listed "Graphing Calculator (TI-84 Plus)"', time: '2h ago' },
      { id: 'a2', text: 'Priya S. returned "Statistics Textbook Bundle" — Clean Returner badge earned', time: '5h ago' },
      { id: 'a3', text: 'New member: Chris T. joined the group', time: '1d ago' },
    ],
  },
  {
    id: 'g2', name: 'BBQ 11 Cricket Gear', type: 'Sports team',
    description: 'Shared cricket kits, stumps, and practice gear for the BBQ 11 weekend league.',
    members: 26, inviteCode: 'BBQ11-CRICKET', adminId: 'u3', trustScore: 4.9,
    rules: 'Return kit cleaned. Report any damaged equipment immediately.',
    location: 'Marquette Park', activeItems: 9,
    activity: [
      { id: 'a4', text: 'Aisha R. added 2 new sets of batting gloves', time: '1h ago' },
      { id: 'a5', text: 'Sunday practice: bowling machine reserved by Sam K.', time: '1d ago' },
    ],
  },
  {
    id: 'g3', name: 'Devon Ave Community', type: 'Neighborhood',
    description: 'A neighborhood lending circle for tools, party supplies, and household equipment.',
    members: 178, inviteCode: 'DEVON-NBHD', adminId: 'u3', trustScore: 4.8,
    rules: 'Verified address required. Be respectful of pickup times.',
    location: 'Devon Ave, Chicago', activeItems: 54,
    activity: [
      { id: 'a6', text: 'Maria C. listed "Stand Mixer (Professional)"', time: '3h ago' },
      { id: 'a7', text: 'Community leaderboard updated — Aisha R. is Top Lender this month', time: '1d ago' },
    ],
  },
  {
    id: 'g4', name: 'Apartment 4B Tool Shelf', type: 'Apartment building',
    description: 'Shared tool shelf in the basement storage room for residents of Building 4B.',
    members: 14, inviteCode: 'BLDG4B-SHELF', adminId: 'u1', trustScore: 5.0,
    rules: 'Sign the shared log book. Return tools to the labeled shelf slot.',
    location: '4B Building Basement', activeItems: 11,
    activity: [
      { id: 'a8', text: 'New rule added: no power tool use after 9pm in shared areas', time: '6h ago' },
    ],
  },
  {
    id: 'g5', name: 'Temple Event Supplies', type: 'Temple/community center',
    description: 'Chairs, tables, chafing dishes, and sound equipment for community events.',
    members: 89, inviteCode: 'TEMPLE-EVENTS', adminId: 'u1', trustScore: 4.9,
    rules: 'Priority given to temple-organized events. Reserve 1 week in advance.',
    location: 'West Rogers Park', activeItems: 33,
    activity: [
      { id: 'a9', text: 'Chafing dish set fully booked for Saturday event', time: '4h ago' },
    ],
  },
];

export function getGroupById(id) {
  return GROUPS.find((g) => g.id === id);
}
