export function money(n) {
  if (n === 0) return 'Free';
  const fixed = n % 1 === 0 ? 0 : 2;
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: fixed, maximumFractionDigits: fixed })}`;
}

export function miles(n) {
  return `${n} mi away`;
}
