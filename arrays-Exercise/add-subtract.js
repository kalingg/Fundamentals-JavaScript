function addSubtract(input){

//sum the numbers from the original arr:

let sumOrigin = 0;

for(let i=0; i<=input.length-1; i ++){

    sumOrigin+=Number (input[i]);
}

//change the arr:
let newArr=0

for(let i=0; i<=input.length-1; i ++){

    if(input[i] % 2 ===0){
        
        input[i]+=i;
    
    }else{

        input[i]-=i;

    }
    newArr+=input[i];
}

console.log(input)
console.log(sumOrigin)
console.log(newArr)
}
addSubtract ([5, 15, 23, 56, 35])
addSubtract ([-5, 11, 3, 0, 2])