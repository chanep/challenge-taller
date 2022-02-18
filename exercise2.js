const inputs = [
  [5, 7, 1, 1, 2, 3, 22],
  [1, 1, 1, 1, 1],
  [1, 5, 1, 1, 1, 10, 15, 20, 100]
];

const outputs = [20, 6, 55];


for(let i = 0; i < inputs.length; i++){
  const out = solve(inputs[i]);
  const result = (out === outputs[i]) ? 'OK' : 'FAIL';
  console.log(`out: ${out} -> ${result}`);
}


function solve(coins){
  coins = coins.sort((a, b) => a - b);
  const max = coins.reduce((a, b) => a + b);
  let maxSum = 0;
  const maxi = 2 ** coins.length - 1;
  for(let i = 1; i <= maxi; i++){
    const sum = getNthSum(coins, i);
    if(sum > maxSum + 1){ //some value got skipped
      return maxSum + 1;
    } else { //keep going
      if(sum > maxSum) maxSum = sum;
      continue;
    }
  }
  return maxSum + 1;
}


//gets the nth minimun sum of items in the array (array must be sorted)
function getNthSum(array, n){
  const binary = n.toString(2);
  if(binary.length > array.length){
    return null;
  }
  let sum = 0;
  for(let i = 0; i < binary.length; i++){
    if(binary[binary.length - i - 1] === '1'){
      sum += array[i];
    }
  }
  return sum;
}
