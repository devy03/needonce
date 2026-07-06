// Mock rental_requests + transactions, structured for a future relational backend.
export const REVIEWS = [
  { id: 'r1', itemId: 'i1', reviewerId: 'u2', rating: 5, comment: 'Worked perfectly for mounting our TV. Maria was super responsive!', itemCondition: 5, communication: 5, returnCondition: 5, date: '2026-05-14' },
  { id: 'r2', itemId: 'i1', reviewerId: 'u4', rating: 5, comment: 'Battery lasted the whole project. Clean and well-maintained.', itemCondition: 5, communication: 4, returnCondition: 5, date: '2026-04-02' },
  { id: 'r3', itemId: 'i3', reviewerId: 'u1', rating: 5, comment: 'Driveway looks brand new. Aisha included a surface cleaner attachment I didn’t expect.', itemCondition: 5, communication: 5, returnCondition: 5, date: '2026-06-01' },
  { id: 'r4', itemId: 'i6', reviewerId: 'u4', rating: 5, comment: 'Great kit for weekend nets, bat felt well balanced.', itemCondition: 4, communication: 5, returnCondition: 5, date: '2026-05-20' },
  { id: 'r5', itemId: 'i7', reviewerId: 'u3', rating: 5, comment: 'Camera was spotless, lenses in great shape. Would rent again for events.', itemCondition: 5, communication: 5, returnCondition: 5, date: '2026-03-11' },
];

export function getReviewsForItem(itemId) {
  return REVIEWS.filter((r) => r.itemId === itemId);
}

export const STATUS_FLOW = [
  'Requested', 'Accepted', 'Reserved', 'Picked Up', 'Due Soon', 'Overdue',
  'Returned', 'Completed', 'Disputed', 'Cancelled',
];

export const MY_RENTALS = [
  {
    id: 'rr1', itemId: 'i3', itemTitle: 'Gas Pressure Washer 3000 PSI', ownerId: 'u3', borrowerId: 'me',
    startDate: '2026-07-06', endDate: '2026-07-07', status: 'Reserved',
    rentalFee: 22, serviceFee: 2.2, deposit: 60, protectionFee: 4, totalDue: 28.2,
    pickupMethod: 'Pickup', paymentStatus: 'Authorized', depositStatus: 'Held',
  },
  {
    id: 'rr2', itemId: 'i9', itemTitle: 'Moving Dolly + Furniture Sliders', ownerId: 'u1', borrowerId: 'me',
    startDate: '2026-06-20', endDate: '2026-06-21', status: 'Returned',
    rentalFee: 9, serviceFee: 0.9, deposit: 15, protectionFee: 0, totalDue: 9.9,
    pickupMethod: 'Pickup', paymentStatus: 'Paid', depositStatus: 'Released',
  },
  {
    id: 'rr3', itemId: 'i5', itemTitle: 'Portable Projector 1080p + Screen', ownerId: 'u1', borrowerId: 'me',
    startDate: '2026-07-11', endDate: '2026-07-12', status: 'Requested',
    rentalFee: 20, serviceFee: 2, deposit: 40, protectionFee: 3, totalDue: 25,
    pickupMethod: 'Delivery', paymentStatus: 'Not paid', depositStatus: 'Not paid',
  },
];

export const MY_LISTINGS_REQUESTS = [
  {
    id: 'rr4', itemId: 'i1', itemTitle: 'Cordless Power Drill with Charger', ownerId: 'me', borrowerId: 'u4',
    startDate: '2026-07-08', endDate: '2026-07-09', status: 'Requested',
    rentalFee: 8, serviceFee: 0.8, deposit: 25, protectionFee: 0, totalDue: 8.8,
    pickupMethod: 'Pickup', paymentStatus: 'Not paid', depositStatus: 'Not paid',
  },
];

export const EARNINGS_SUMMARY = {
  thisMonth: 214.50,
  pendingPayout: 42.00,
  totalLifetime: 1380.25,
  itemsRentedOut: 3,
  pendingRequests: 1,
};
