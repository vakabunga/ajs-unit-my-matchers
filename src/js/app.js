export default function sortArmy(army) {
  return army.sort((a, b) => a.health - b.health).reverse();
}
