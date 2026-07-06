// External sources for comparison — hardware stores, rental shops, libraries, tool libraries, etc.
// Structured to map onto a future `external_sources` table.
export const EXTERNAL_SOURCES = [
  {
    id: 's1', sourceName: 'Home Depot — Tool Rental', sourceType: 'Hardware store rental',
    address: 'Elston Ave', distance: 4.1, category: 'tools', itemName: 'Cordless Power Drill',
    estimatedPrice: 38, priceUnit: 'day', rentalPeriod: '24 hours', depositRequired: true,
    membershipRequired: false, libraryCardRequired: false, availability: 'In stock',
    hours: 'Mon–Sat 6am–10pm, Sun 7am–8pm', reliability: 4.6,
    notes: 'National chain, consistent stock, requires ID and card on file.',
  },
  {
    id: 's2', sourceName: "Lowe's Rental Center", sourceType: 'Hardware store rental',
    address: 'Kedzie Ave', distance: 4.7, category: 'tools', itemName: 'Pressure Washer',
    estimatedPrice: 40, priceUnit: 'day', rentalPeriod: '24 hours', depositRequired: true,
    membershipRequired: false, libraryCardRequired: false, availability: 'Limited stock',
    hours: 'Mon–Sat 6am–9pm, Sun 8am–8pm', reliability: 4.4,
    notes: 'Reserve online 24 hours ahead for guaranteed availability.',
  },
  {
    id: 's3', sourceName: 'Chicago Tool Library', sourceType: 'Tool library',
    address: 'North Side Chicago', distance: 2.4, category: 'tools', itemName: 'Cordless Power Drill',
    estimatedPrice: 0, priceUnit: 'free', rentalPeriod: '7 days', depositRequired: false,
    membershipRequired: true, libraryCardRequired: false, availability: 'Available tomorrow',
    hours: 'Tue/Thu 4–7pm, Sat 10am–2pm', reliability: 4.8,
    notes: '$25/year membership covers unlimited tool checkouts.',
  },
  {
    id: 's4', sourceName: 'Chicago Public Library — Library of Things', sourceType: 'Public library Library of Things',
    address: 'Harold Washington Branch', distance: 3.2, category: 'party', itemName: 'Folding Chairs (Set of 6)',
    estimatedPrice: 0, priceUnit: 'free', rentalPeriod: '3 weeks', depositRequired: false,
    membershipRequired: false, libraryCardRequired: true, availability: 'Available tomorrow',
    hours: 'Mon–Sat 9am–8pm', reliability: 4.9,
    notes: 'Free with any Chicago Public Library card. Popular items may have a waitlist.',
  },
  {
    id: 's5', sourceName: 'UIC Equipment Checkout', sourceType: 'University equipment checkout',
    address: 'UIC Campus', distance: 1.5, category: 'camera', itemName: 'DSLR Camera Kit',
    estimatedPrice: 0, priceUnit: 'free', rentalPeriod: '3 days', depositRequired: false,
    membershipRequired: true, libraryCardRequired: false, availability: 'Available today',
    hours: 'Mon–Fri 9am–5pm', reliability: 4.7,
    notes: 'Requires active student ID. Priority given to coursework-related use.',
  },
  {
    id: 's6', sourceName: 'Pilsen Makerspace', sourceType: 'Makerspace',
    address: 'Pilsen', distance: 3.6, category: 'tools', itemName: 'Circular Saw',
    estimatedPrice: 5, priceUnit: 'day', rentalPeriod: 'per visit', depositRequired: false,
    membershipRequired: true, libraryCardRequired: false, availability: 'Available today',
    hours: 'Daily 10am–9pm', reliability: 4.5,
    notes: '$40/month membership includes access to full tool shop.',
  },
  {
    id: 's7', sourceName: 'Windy City Party Rentals', sourceType: 'Party rental company',
    address: 'River North', distance: 5.3, category: 'party', itemName: 'Canopy Tent 10x10',
    estimatedPrice: 65, priceUnit: 'day', rentalPeriod: '1 day', depositRequired: true,
    membershipRequired: false, libraryCardRequired: false, availability: 'Available today',
    hours: 'By appointment', reliability: 4.3,
    notes: 'Delivery and setup available for additional fee.',
  },
  {
    id: 's8', sourceName: 'Lakefront Outdoor Rental', sourceType: 'Outdoor gear rental',
    address: 'Lincoln Park', distance: 3.9, category: 'camping', itemName: '4-Person Tent',
    estimatedPrice: 25, priceUnit: 'day', rentalPeriod: '1 day', depositRequired: true,
    membershipRequired: false, libraryCardRequired: false, availability: 'Available today',
    hours: 'Daily 8am–7pm', reliability: 4.6,
    notes: 'Also rents sleeping bags, stoves, and hiking backpacks.',
  },
  {
    id: 's9', sourceName: 'ShutterHub Camera Rental', sourceType: 'Camera gear rental',
    address: 'West Loop', distance: 2.8, category: 'camera', itemName: 'DSLR + Lens Kit',
    estimatedPrice: 55, priceUnit: 'day', rentalPeriod: '1 day', depositRequired: true,
    membershipRequired: false, libraryCardRequired: false, availability: 'Available today',
    hours: 'Mon–Sat 10am–7pm', reliability: 4.7,
    notes: 'Professional-grade gear, insurance included in price.',
  },
  {
    id: 's10', sourceName: 'Southside Sports Rental', sourceType: 'Sports gear rental',
    address: 'Hyde Park', distance: 4.4, category: 'sports', itemName: 'Cricket Kit',
    estimatedPrice: 15, priceUnit: 'day', rentalPeriod: '1 day', depositRequired: true,
    membershipRequired: false, libraryCardRequired: false, availability: 'Limited stock',
    hours: 'Daily 9am–8pm', reliability: 4.2,
    notes: 'Cricket, soccer, and basketball equipment available.',
  },
  {
    id: 's11', sourceName: 'Avondale Community Center', sourceType: 'Community center',
    address: 'Avondale', distance: 2.9, category: 'cleaning', itemName: 'Carpet Cleaner',
    estimatedPrice: 10, priceUnit: 'day', rentalPeriod: '1 day', depositRequired: false,
    membershipRequired: true, libraryCardRequired: false, availability: 'Available tomorrow',
    hours: 'Mon–Fri 9am–6pm', reliability: 4.4,
    notes: '$15/year resident membership required.',
  },
  {
    id: 's12', sourceName: 'U-Haul Moving Center', sourceType: 'Local rental shop',
    address: 'Belmont Ave', distance: 3.3, category: 'moving', itemName: 'Furniture Dolly + Truck',
    estimatedPrice: 45, priceUnit: 'day', rentalPeriod: '1 day', depositRequired: true,
    membershipRequired: false, libraryCardRequired: false, availability: 'Available today',
    hours: 'Mon–Sun 7am–7pm', reliability: 4.5,
    notes: 'Trucks, dollies, and moving blankets all available together.',
  },
];

export function getSourcesByCategory(category) {
  return EXTERNAL_SOURCES.filter((s) => s.category === category);
}
