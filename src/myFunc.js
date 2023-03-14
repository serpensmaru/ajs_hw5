export function getStatusHealth(ojbStatus) {
  const { health } = ojbStatus;
  if (health > 50) {
    return 'healthy';
  }
  return health < 15 ? 'critical' : 'wounded';
}

export function sortedListHeroes(listParams) {
  return listParams.sort((a, b) => parseFloat(b.health) - parseFloat(a.health));
}
