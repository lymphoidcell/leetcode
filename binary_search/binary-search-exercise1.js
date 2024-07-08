// explanation by Kylie Ying on YouTube (but make it JavaScript)
// Binary Search vs Linear Search (or naive search)

// The list [1, 3, 6, 7, 9, 12, 13] (the list variable will be named 'L',
// and the target which is 12 will be named as 'target')

// Implement naive search
function naiveSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // we will return -1 if the target is not found
}

// Implement binary search
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (high < low) {
    // if the target is not found
    return -1;
  }

  const midpoint = Math.floor((low + high) / 2); // floor division

  if (arr[midpoint] === target) {
    return midpoint; // target found
  } else if (target < arr[midpoint]) {
    return binarySearch(arr, target, low, midpoint - 1); // use recursion
  } else {
    return binarySearch(arr, target, midpoint + 1, high); // use recursion
  }
}

// Example usage
const arr = [1, 3, 6, 7, 9, 12, 13];
const target = 12;
console.log(naiveSearch(arr, target)); // Output: 5
console.log(binarySearch(arr, target)); // Output: 5

// Performance test
const length = 10000;
const sortedList = new Set(); // using Set to avoid duplicate numbers
while (sortedList.size < length) {
  sortedList.add(Math.floor(Math.random() * (6 * length + 1)) - 3 * length);
}
const sortedArray = Array.from(sortedList).sort((a, b) => a - b);

const targetList = Array.from(
  { length },
  () => Math.floor(Math.random() * (6 * length + 1)) - 3 * length
);

console.time("Naive search time");
for (const target of targetList) {
  naiveSearch(sortedArray, target);
}
console.timeEnd("Naive search time");
// result: 86.452ms

console.time("Binary search time");
for (const target of targetList) {
  binarySearch(sortedArray, target);
}
console.timeEnd("Binary search time");
// result: 6.085ms
