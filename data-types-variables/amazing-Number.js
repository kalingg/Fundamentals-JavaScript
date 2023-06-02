function amazing(number){

    // let check = false;
    
    // let sum =0;
    // let string = number + `` 

    // for ( let i= 0; i<=string.length-1; i++){

    //     sum+= Number (string[i]);
    // }

    // if(sum ==9){
    //     check=true;

    //     console.log(`${number} Amazing? ${check}`)
    // }else{
    //     console.log(`${number} Amazing? ${check}`)
    // }


    // Alternative:

    number = number.toString();
    
    let sum =0;
    for(let i= 0; i<number.legth; i++){

        sum+= Number (number[i]);

    }
    let result = number.toString().includes(`9`);
    console.log(result
        ? `${number} Amazing?  False`
        : `${number} Amazing? True`);

}
amazing (1233);
amazing (999);

