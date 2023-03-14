import {_, sortedListHeroes} from "../src/myFunc";

const listParamsNoSort  = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
const amountSorted  = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10}
  ]
const result = sortedListHeroes(listParamsNoSort)
console.log(result)