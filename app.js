console.log('run...');
// Good code should be 1. readable 2. scalable
// Big O is a way to measure the time complexity and/or the number of operations and space complexity of a program, inorder to assess
// code scalability and algorithmic efficiency
//

//#1 -- For loop in Javascript.
// const nemo = ['nemo'];
// const large = new Array(200).fill('nemo');

// function findNemo1(array) {
//   // let t0 = performance.now(), t1;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }

//   // t1 = performance.now();
//   // console.log(`Call to find Nemo took ${t1 - t0} ms.`);
// }

// findNemo1(nemo);
// findNemo1(large); // O(n) ---> Linear Time

const boxes = [1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }

//logFirstTwoBoxes(boxes); // overally O(1) ---> Constant Time

// Big O Rules
// 1. Worst case
// 2. Drop constants
// 3. Different terms for inputs
// 4. Drop non dominants

// function logAllPairsOfArray(boxes) {
// 	for (let i = 0; i < boxes.length; i++) {
// 		for (let j = 0; j < boxes.length; j++) {
// 			console.log(`${boxes[i]},${boxes[j]}`);
// 		}
// 	}
// }

// logAllPairsOfArray(boxes); // O(n^2) ---> Quadratic Time

// function printAllNumbersThenAllPairSums(numbers) {
//   console.log("these are the numbers:");// O(1)
//   numbers.forEach(function(number) {
//     console.log(number);
//   });// O(n)

//   console.log("and these are their sums:");
//   numbers.forEach(function(firstNumber) {
//     numbers.forEach(function(secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });// O(n^2)
// }

// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2) by dropping non-dominants

function nFacRuntimeFunc(n) {
  for(let i = 0; i < n; i++) {
    nFacRuntimeFunc(n-1);
  }
}// O(n!) ---> Factorial Time (not ideal) It means we're adding a nested loop for every input we have

// Good code must be
// 1. Readable
// 2. Scalable
//      a. Time Complexity
//           i.Execution speed
//           ii. Number of operations
//      b. Space Complexity
//           1. Efficient usage of memory
// Sometimes there are trade-offs were improving time complexity may
// compromise space complexity and vice-versa

