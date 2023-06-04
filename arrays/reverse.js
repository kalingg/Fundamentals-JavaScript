function reverse(endOfElements, elements){

//Storing
    let result = ``;

//Cheking all the elements:
for(let i=0; i<=elements.length; i++){

    if(i<=endOfElements){
    result.push(i)
    }
}
//Taking only the needed:

//Console the result:
console.log(result)
}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);