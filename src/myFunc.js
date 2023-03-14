export function getStatusHealth(ojbStatus) {
    const health = ojbStatus.health;
    if (health > 50) {
        return "healthy"
    } else {
        return health < 15 ? "critical": "wounded"
     }
}

export function sortedListHeroes(listParams) {
    return listParams.sort(function(a, b) {
        return parseFloat(b.health) - parseFloat(a.health);
    });
}
