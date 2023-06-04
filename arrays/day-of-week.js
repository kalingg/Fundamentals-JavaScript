function week (input){

// days of the week:

let days = [`Monday`, `Tuesday`, `Wendnesday`, 
            `Thurday`, `Friday`, `Saturday`, `Sunday`];

//Console the day:
            if(input>=1 && input<=7){

                console.log(days[input-1]);

//Console incorrect input:
            }else{
                
                console.log(`Please input a valide number (1-7)`);
            };
};
week(3)
week(7)
week(11)