function arrays(arrays1, arrays2) {
    if (arrays1.length !== arrays2.length) {
      console.log('Arrays are not identical. They have different lengths.');
      return;
    }
  
    let sum = 0;
    let areEqual = true;
  
    for (let i = 0; i < arrays1.length; i++) {
      arrays1[i] = Number(arrays1[i]);
      arrays2[i] = Number(arrays2[i]);
      sum += arrays1[i];
  
      if (arrays1[i] !== arrays2[i]) {
        console.log(`Arrays are not identical. Found difference at index ${i}.`);
        areEqual = false;
        break;
      }
    }
  
    if (areEqual) {
      console.log(`Arrays are identical. Sum: ${sum}`);
    }
  }
  
  arrays(['10', '20', '30'], ['10', '20', '30']);
  arrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
  arrays(['1'], ['10']);
  