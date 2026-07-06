export const USERS = [
  {
    id: 'u1', name: 'Maria Chen', avatar: 'MC', rating: 4.9, reviews: 47,
    successfulRentals: 63, successfulLends: 82, responseRate: 98, cancellationRate: 1,
    verifiedEmail: true, verifiedPhone: true, verifiedId: true, memberSince: '2022',
    location: 'Lincoln Park, Chicago',
    badges: ['Trusted Neighbor', 'Top Lender', 'Fast Responder'],
  },
  {
    id: 'u2', name: 'Devon Park', avatar: 'DP', rating: 4.8, reviews: 31,
    successfulRentals: 40, successfulLends: 22, responseRate: 95, cancellationRate: 2,
    verifiedEmail: true, verifiedPhone: true, verifiedId: false, memberSince: '2023',
    location: 'Wicker Park, Chicago',
    badges: ['Fast Responder', 'Clean Returner'],
  },
  {
    id: 'u3', name: 'Aisha Rahman', avatar: 'AR', rating: 5.0, reviews: 58,
    successfulRentals: 12, successfulLends: 91, responseRate: 100, cancellationRate: 0,
    verifiedEmail: true, verifiedPhone: true, verifiedId: true, memberSince: '2021',
    location: 'Devon Ave, Chicago',
    badges: ['Trusted Neighbor', 'Top Lender', 'Clean Returner'],
  },
  {
    id: 'u4', name: 'Jordan Lee', avatar: 'JL', rating: 4.6, reviews: 19,
    successfulRentals: 25, successfulLends: 8, responseRate: 88, cancellationRate: 4,
    verifiedEmail: true, verifiedPhone: false, verifiedId: false, memberSince: '2024',
    location: 'Logan Square, Chicago',
    badges: ['Fast Responder'],
  },
  {
    id: 'me', name: 'You', avatar: 'YO', rating: 4.7, reviews: 14,
    successfulRentals: 18, successfulLends: 6, responseRate: 92, cancellationRate: 0,
    verifiedEmail: true, verifiedPhone: true, verifiedId: false, memberSince: '2024',
    location: 'West Loop, Chicago',
    badges: ['Clean Returner'],
  },
];

export const CURRENT_USER = USERS.find((u) => u.id === 'me');
