function addRemove(array){

    let newArray = [];

    for( let i = 0; i<array.length; i++){

        if(array[i] === `add`){
            newArray+=(i+1) + ` `
        }
    }
    
        console.log(newArray)
    
}
addRemove(['add', 'add', 'add', 'add'])
addRemove(['add', 'add', 'remove', 'add', 'add'])
addRemove(['remove', 'remove', 'remove'])