//Creating numbers in an array

let numbers = [];

// Creating 10 random numbers (betweeen 0-1000)
// Math.floor to round down the largest number

for (let i = 0; i < 10; i++) {
  numbers[i] = Math.floor(Math.random() * 100);
}

// To calculate  the sum of numbers

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Calculating the average

let average = sum / numbers.length;

// To locate the Highest number

let highest = [0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > highest) {
    highest = numbers[i];
  }
}

// To locate the lowest number

let lowest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}
// sorting the number in ascending order
numbers.sort((a, b) => a - b);

// Calculatimg the median
let median;
if (numbers.length % 2 === 0) {
  median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
} else {
  median = numbers[Math.floor(numbers.length / 2)];
}

console.log("The Random Numbers are : " + numbers);
console.log("The Sum of the numbers are : " + sum);
console.log("The Highest number is : " + highest);
console.log("The Lowest number is : " + lowest);
console.log("The Average number is : " + average);
console.log("The median number is : " + median);
