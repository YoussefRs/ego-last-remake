export default function getRandomItems(
  items,
  numberOfItems = 4,
  idToIgnore = null
) {
  let filteredItems = items;

  // Filter out the item with the specified ID to ignore
  if (idToIgnore) {
    filteredItems = items.filter((item) => item.id !== idToIgnore);
  }

  const shuffledItems = filteredItems.sort(() => 0.5 - Math.random());
  const selectedItems = shuffledItems.slice(0, numberOfItems);

  return selectedItems;
}
