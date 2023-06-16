function password(word){

    function numberOfChar(word){

        let number = 0;
        
        for(let i= 0; i<word.length;i++){
            number++;
        }
        
        if (number>=6 && number<=10){
            return true;
        }
        else{
            console.log(`Password must be between 6 and 10 characters`);
        }
    }


    function checkLettersAndDigits(word){

        let letters = /[a-zA-Z]/.test(word);
        let digits = /\d/.test(word);

        if(digits && letters){
            return true
        }else{
            console.log(`Password must consist only of letters and digits`)
        }
    }

    function checkNumber (word){

        let counter =0;

        for(let i= 0; i < word.length; i++){

            let digits = /\d/.test(word[i])
                
            if (digits ===true){
                counter++
            }
            if(counter <=2){
                return true;
            
            }else{
                console.log(`Password must have at least 2 digits`);
            }
        }
    }
if(
        numberOfChar(word) ===true &&
        checkLettersAndDigits(word) ===true&&
        checkNumber(word) == true){

    console.log(`Password is valid`)
}
}
password (`IngIn`)
password (`MyPass123`)
password (`Pa$s$s`)