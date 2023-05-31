function vacantion(input){

let totalPrice = 0;

let groupNumber = Number (input[0])
let groupType = input[1];
let day = input[2];

    if (groupType == `Students`){
        switch(day){
            case `Friday`:
                totalPrice=groupNumber* 8.45;
                    break;

            case `Saturday`:
                totalPrice=groupNumber* 9.80;
                    break;

            case `Sunday`:
                totalPrice=groupNumber* 10.46;
                    break;
        }
    }else if (groupType == `Business`){
        switch(day){
            case `Friday`:
                totalPrice=groupNumber* 10.90;
                    break;

            case `Saturday`:
                totalPrice=groupNumber* 15.60;
                    break;

            case `Sunday`:
                totalPrice=groupNumber* 16.00;
                    break;
        }
    }if (groupType == `Regular`){
        switch(day){
            case `Friday`:
                totalPrice=groupNumber* 15;
                    break;

            case `Saturday`:
                totalPrice=groupNumber* 20.00;
                    break;

            case `Sunday`:
                totalPrice=groupNumber* 22.50;
                    break;
        }
    }

    if(groupNumber>= 30 && groupType ==`Students`){
        console.log(`Total price: ${totalPrice*0.85}`);
    
    }else if(groupNumber>=100 && groupType== `Business`){
        
        switch(day){
            case `Friday`:
                console.log(`Total price: ${totalPrice-(10 * 10.90)}`);
                break;
            
            case `Saturday`:
                console.log(`Total price: ${totalPrice-(10 * 15.60)}`);
                break;
        
            case `Sunday`:
                console.log(`Total price: ${totalPrice-(10 * 16)}`);
                break;
            };
    
    }else if(groupNumber >=10 && groupType == `Regular`){
        console.log(`Total price: ${totalPrice*0.95}`);
    
    }else{
        console.log(`Total price: ${totalPrice}`);
    };
};
vacantion ([30,"Students","Sunday"]);
vacantion ([40,"Regular","Saturday"]);
vacantion ([100, `Business`, `Sunday`]);