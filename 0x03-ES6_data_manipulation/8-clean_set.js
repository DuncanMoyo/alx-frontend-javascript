export default function cleanSet(set, startString) {
  if (
    !(set instanceof Set)
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  const list = Array.from(set)
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return list.join('-');
}
