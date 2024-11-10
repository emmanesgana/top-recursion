// Fibonaci sequence
function fibonnaci(n) {
    // Create an array that starts with 0 and 1
    let fib = [0, 1];

    /* 
    Create a for loop and start at the 3rd element 
    which is the sum of 0 and 1 since fibonacci sequence adds 
    the previous 2 elements as result. 
    The loop will stop at whatever value of n is.
    */
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // Return fib array here
    return fib;
}

console.log('Fibonacci Sequence:', fibonnaci(8));

//Fibonacci using recursion
function fibsRec(n, fib = [0, 1]) {
    // To check if how many times the function called itself
    console.log('This was printed recursively');

    /* 
    Create a variable that adds the two preceding numbers based
    on the length of the fib array.
   */
    let sum = fib[fib.length - 1] + fib[fib.length - 2];

    /* 
    A condition that checks n if it's less than or equal than the
    length of the fib array.
     */
    if (n <= fib.length) {
        return fib.slice(0, n);
    }

    // Push the variable to the fib array
    fib.push(sum);

    // Use recursion and call the function
    return fibsRec(n, fib);
}

console.log(fibsRec(8))

//merge sort
let mergeSortArr = [3, 2, 1, 13, 8, 5, 0, 1];

/* 
Create a function that takes an array as parameter that 
divides the array 
*/
function mergeSort(arr) {
    // A guard clause that returns the arr if there's only one item in it.
    if (arr.length < 2) return arr;

    /* 
    Mid counts what the arr is divisible by to determine where
    to divide the array to get the left Array and right Array.
    */
    const mid = Math.floor(arr.length / 2);
    /*
    Use slice method and use two parameters 0 and mid to tell the method
    where to start and stop. 
    */
    const leftArr = arr.slice(0, mid);
    /* 
    Use slice and use mid as parameter to get the rest 
    of the array starting from the middle.
    */
    const rightArr = arr.slice(mid);

    /* 
    Use recursion to pass the leftArr and rightArr as parameters
    for merge function.
    */
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Create a function that merges the left array and right array
function merge(leftArr, rightArr) {

    // Create a new array
    const sortedArr = [];

    /* 
    Use a while loop to continue looping through the leftArr and rightArr
    until it's empty.
    */
    while (leftArr.length && rightArr.length) {

        /* 
        Create a condition wherein if left value is greater 
        than or equal to the right vlaue, it will push the
        first element using shift to the end of the array.
        */
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    // Join the arrays using spread operator
    return [...sortedArr, ...leftArr, ...rightArr];
}

console.log('Merge Sort:', mergeSort(mergeSortArr));
