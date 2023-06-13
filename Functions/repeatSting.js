function solve(string, times){

    let array = [];

    for(let i= 0; i<times; i++){

        array+=string + ` `
    }
        return(array);
}

console.log (solve (`abc` ,3))
console.log (solve(`String`,2))