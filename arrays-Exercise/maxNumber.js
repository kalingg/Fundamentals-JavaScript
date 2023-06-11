function numbers(array){

let newArrays =[];

for (let i=0; i<array.length; i++){

    let before = Number (array[i]);
    let after = Number (array[i+1]);

    if(before <= after){
        newArrays.push(after)    
}
}
console.log(newArrays)
}
numbers ([1, 4, 3, 2])
numbers ([14, 24, 3, 19, 15, 17])
numbers ([41, 41, 34, 20])
numbers ([27, 19, 42, 2, 13, 45, 48])