export default function updateUniqueItems(mapOfgroceries) {
  if (!(mapOfgroceries instanceof Map)) {
    throw Error('Cannot process');
  }

  mapOfgroceries.forEach((val, key) => {
    if (val === 1) {
      mapOfgroceries.set(key, 100);
    }
  });

  return mapOfgroceries;
}
