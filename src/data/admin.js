export const ADMIN_STATS = {
  totalUsers: 4218,
  activeRentals: 312,
  totalSavedByUsers: 187_430,
  wasteAvoidedLbs: 26_900,
  platformFeesThisMonth: 3_842,
  mostSearched: ['Pressure washer', 'Folding chairs', 'Cordless drill', 'Projector', 'Cricket kit'],
  mostRentedCategories: ['Tools', 'Party Supplies', 'Sports Gear', 'Cleaning', 'Camera Gear'],
  highRiskListings: 3,
  openDisputes: 2,
};

export const ADMIN_DISPUTES = [
  { id: 'd1', rentalId: 'rr9', openedBy: 'Jordan Lee', reason: 'Item returned with minor scratch', status: 'Under review', amountClaimed: 20 },
  { id: 'd2', rentalId: 'rr14', openedBy: 'Maria Chen', reason: 'Late return, 2 days overdue', status: 'Awaiting response', amountClaimed: 16 },
];

export const ADMIN_REPORTED_LISTINGS = [
  { id: 'l1', title: 'Old propane heater (unlisted safety tag)', reason: 'Missing safety documentation', reportedBy: 'system scan' },
  { id: 'l2', title: '"Free" nail gun with no deposit', reason: 'High-risk item, no deposit set', reportedBy: 'user report' },
  { id: 'l3', title: 'Generic power tool bundle', reason: 'Stock photo suspected', reportedBy: 'user report' },
];

export const BANNED_KEYWORDS = [
  'firearm', 'gun', 'weapon', 'ammo', 'drug', 'alcohol', 'prescription',
  'hazardous chemical', 'stolen', 'spyware', 'surveillance device',
];
