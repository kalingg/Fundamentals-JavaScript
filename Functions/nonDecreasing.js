function nonDecreasing(array){

    let currentBiggest = array[0];
    const result = [currentBiggest];

    for(let i= 1; i<array.length; i++){
            
            if(array[i]>= currentBiggest){
                currentBiggest =array[i];
                result.push(array[i])
                
    };
};
console.log(result)
};
nonDecreasing ([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasing ([ 1, 2, 3, 4])
nonDecreasing ([ 20, 3, 2, 15, 6, 1])