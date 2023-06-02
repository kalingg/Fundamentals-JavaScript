function  numbers(num1, num2, num3){

    let sum = num1 + num2+ num3;

    sum %1 ===0 ? sum += ` - Intiger` : sum += ` - Float`;

    console.log(sum);

}
numbers (9, 100, 1.1);
numbers (100, 200, 303);