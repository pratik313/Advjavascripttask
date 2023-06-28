let array = [1,2,3,4,5,6,7,8,9,10];

console.log("9th index:", array[8]);
console.log("10th index:", array[9]);

array[5] = 100;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 100) {
    break;
  }
  console.log(array[i]);
}
// array = array.map((element) => element + 1);
// array.unshift();
// array.push();
// array.shift();
// array.pop();

const sumMapReduce = array.reduce((accumulator, element) => accumulator + element, 0);
console.log("Sum (map-reduce):", sumMapReduce);
//  ---------------------------------for loop
let sumForLoop = 0;
for (let i = 0; i < array.length; i++) {
  sumForLoop += array[i];
}
console.log("Sum (for-loop):", sumForLoop);


const ascendOrdr = array.slice().sort((a, b) => a - b);
console.log("Ascending order:", ascendOrdr);

const descendOrdr = array.slice().sort((a, b) => b - a);
console.log("Descending order:", descendOrdr);

const reversArrMethod = array.slice().reverse();
console.log("Reversed array (method):", reversArrMethod);

// for loop 
let reversArrLoop = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversArrLoop.push(array[i]);
}

console.log("Reversed array (for-loop):", reversArrLoop);

