function subtraction(arr){
    let odd = 0;
    let even = 0;

for(let i=0;i< arr.length; i++){

    arr[i]=Number (arr[i]);
    }
    
    for(let num of arr){
        
        if(num %2==0){
            even+=num;
        
        }else{
            odd+=num;

        }
}   

    if(odd- even <0){

        console.log(even - odd)
    
    }else{
    
        console.log(odd- even)
}

}
subtraction([`1`,`2`,`3`,`4`,`5`,`6`])
subtraction([`3`,`5`,`7`,`9`])
subtraction([`2`,`4`,`6`,`8`,`10`])