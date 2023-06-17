function rotate(array){

const rotations= Number(array.pop());

for(let i =0; i<array.length; i++){

    if(i+1 <= rotations){
    
    let element =array.shift();
    array.push(element) 
}
}
    console.log(array)
}
rotate(['1', '2', '3', '4', '2'])
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])