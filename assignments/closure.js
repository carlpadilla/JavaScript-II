// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myFunction = () => {
  const message = 'This is my message'
  const printMessage = () => {
    console.log(message)
  }
  return printMessage
}
const myPrintMessage = myFunction()
myPrintMessage()
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0
  return () => ++count //anonymous function
};

const newCounter = counter()
console.log(newCounter())
console.log(newCounter())



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }

};

const newCount = counterFactory()
newCount.increment()
newCount.decrement()
newCount.decrement()
console.log(newCount.get())
