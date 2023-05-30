function printOddNumbers(n) {
    let count = 0;
    let sum = 0;
    let number = 1;
  
    while (count < n) {
      console.log(number);
      sum += number;
      number += 2;
      count++;
    }
  
    console.log("Sum:", sum);
  }
  
  printOddNumbers(5);