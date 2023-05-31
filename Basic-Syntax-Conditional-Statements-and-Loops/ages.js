function person(age){

        if (age>=0 && age<=2){
            console.log(`Baby`);

        }else if (age>=3 && age<=13){
            console.log(`Child`);

        }else if(age>=14 && age<=19){
            console.log(`Teenager`);

        } else if(age>=20 && age<=65){
            console.log(`Adult`);

        }else if(age>=66){
            console.log(`Elder`);
        
        }else {
            console.log(`Out of Bounds`);
            
    }
};

person(20);
person(1);
person(100);