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

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // overally O(1) ---> Constant Time