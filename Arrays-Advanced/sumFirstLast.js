function sum(array){

    let firstSum = Number (array[0]);
    let secondSum = Number (array[array.length-1]);

    let sum = firstSum + secondSum;

    console.log(sum);
};
sum (['20', '30', '40']);
sum (['5', '10']);
