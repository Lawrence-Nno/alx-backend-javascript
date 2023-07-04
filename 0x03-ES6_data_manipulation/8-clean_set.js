// This func removes startString from a set of strings
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';

  try {
    return [...set]
      .filter((str) => typeof str === 'string' && str.startsWith(startString))
      .map((str) => str.replace(startString, ''))
      .join('-');
  } catch (ele) {
    return '';
  }
}
