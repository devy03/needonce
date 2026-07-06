// Task-to-item AI mock: maps natural-language tasks to suggested item bundles.
export const TASK_BUNDLES = [
  {
    keywords: ['hang a tv', 'hang tv', 'mount tv', 'wall mount'],
    task: 'Hang a TV',
    items: ['Cordless Power Drill', 'Stud Finder', 'Level', 'Measuring Tape', 'Screwdriver Set'],
  },
  {
    keywords: ['clean my driveway', 'driveway', 'pressure wash'],
    task: 'Clean my driveway',
    items: ['Pressure Washer', 'Hose Extension', 'Outdoor Brush', 'Safety Glasses'],
  },
  {
    keywords: ['backyard party', 'throwing a party', 'party'],
    task: 'Backyard party',
    items: ['Folding Chairs', 'Folding Tables', 'Canopy Tent', 'Cooler', 'Bluetooth Speaker', 'Projector'],
  },
  {
    keywords: ['folding chairs'],
    task: 'Need folding chairs',
    items: ['Folding Chairs', 'Carrying Rack'],
  },
  {
    keywords: ['practice cricket', 'cricket'],
    task: 'Practice cricket',
    items: ['Cricket Kit', 'Batting Gloves', 'Stumps', 'Batting Pads'],
  },
  {
    keywords: ['move apartments', 'moving', 'move'],
    task: 'Move apartments',
    items: ['Dolly', 'Hand Truck', 'Moving Blankets', 'Furniture Sliders', 'Ratchet Straps'],
  },
  {
    keywords: ['cut wood', 'cutting wood'],
    task: 'Cut wood',
    items: ['Circular Saw', 'Safety Glasses', 'Clamps', 'Measuring Tape'],
  },
  {
    keywords: ['camping trip', 'camping'],
    task: 'Camping trip',
    items: ['Tent', 'Sleeping Bag', 'Hiking Backpack', 'Portable Stove', 'Camping Chairs'],
  },
];

export function findTaskBundle(query) {
  const q = query.toLowerCase();
  return TASK_BUNDLES.find((b) => b.keywords.some((k) => q.includes(k)));
}

export const SEARCH_SUGGESTIONS = [
  'Clean my driveway',
  'Hang a TV',
  'Need folding chairs',
  'Practice cricket',
  'Move apartments',
  'Cut wood',
];
