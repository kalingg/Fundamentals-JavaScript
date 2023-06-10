function merge(firstArr, secondArr){

//create new array
let newArrays= [];

for(let x=0; x<firstArr.length, x<secondArr.length; x++){

    //if the index is even, add into the new array the sum of the 2 arrays.

if(x %2===0){

    newArrays+= (Number(firstArr[x]) + Number(secondArr[x])) + ` - `

}else{
//if the index is odd, concatenate both numbers
newArrays+= firstArr[x]  + secondArr[x]+` - `;

}

}

//console.log the new array
console.log(newArrays)


}
merge (['5', '15', '23', '56', '35'],
        ['17', '22', '87', '36', '11'])

merge (['13', '12312', '5', '77', '4'],
        ['22', '333', '5', '122', '44'])