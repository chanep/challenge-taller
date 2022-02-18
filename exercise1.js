const array = [-10, -5, 0, 5, 10];

function squaredSort(array) {
  return array.map(i => i * i).sort((a, b) => a - b);
}

const out = squaredSort(array);
console.log(out);