export default function groceriesList() {
  const groce = new Map();
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  items.map((keyValue) => groce.set(keyValue[0], keyValue[1]));
  return groce;
}
