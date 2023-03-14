export function getStatusHealth(ojbStatus) {
  const { health } = ojbStatus;
  if (health > 50) {
    return 'healthy';
  }
  if (health < 15) {
    return 'critical';
  }
  return 'wounded';
}

export function sortedListHeroes(listParams) {
  return listParams.sort((a, b) => b.health - a.health);
}
