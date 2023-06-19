function firstLastNumber(input) {
    const k = input[0];
    const array = input.slice(1);
  
    if (k >= array.length) {
      console.log(array.join(' '));
    } else {
      const firstKElements = array.slice(0, k);
      const lastKElements = array.slice(-k);
      console.log(firstKElements.join(' '));
      console.log(lastKElements.join(' '));
    }
  }
firstLastNumber ([2,7, 8, 9])
firstLastNumber ([3,6, 7, 8, 9])