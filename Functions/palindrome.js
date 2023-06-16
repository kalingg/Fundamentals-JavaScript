function palindrome(input){
;

    for(let i=0 ; i< input.length; i++){

        let numberToString = input[i].toString();
        let reverseCurrent = numberToString.split(``).reverse().join(``);

        if(numberToString  === reverseCurrent){

            console.log(`true`);
        }else{

            console.log(`false`);
        };

    };
};

palindrome([123,323,421,121]); 
palindrome([32,2,323,1010]);