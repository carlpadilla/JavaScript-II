// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function firstItem(arr, cb) {
  cb(items[0]);
}

firstItem(items, (first) => {
  console.log(first);
}); // logs Pencil

// Callback 2
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(items.length);
}

getLength(items, (length) => {
  console.log(length); //logs 4
});

// Callback 3
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(items.length - 1);
}

last(items, (lastItem) => {
  console.log(lastItem);
}); // Returns 3

// Callback 4
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

sumNums(2, 4, (sum) => {
  console.log(sum);
}); // returns 6

// Callback 4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

multiplyNums(10, 10, (multiply) => {
  console.log(multiply);
}); // returns 100.



// Callback 4
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}

contains('Notebook', items, (check) => {


  if (check === true) {
    console.log(true);
  } else {
    console.log(false);
  }
}); // Returns true is item is found in the array, returns false is not

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
