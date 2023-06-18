function negativePositive(array){

    let  newArray = [];

    for(let i= 0; i<array.length; i++){

        if( array[i]>= 0){

            newArray.push(array[i])
        }else{
            newArray.unshift(array[i])
        }

    }
console.log(newArray)
}
negativePositive ([7, -2, 8, 9])
negativePositive ([3, -2, 0, -1])