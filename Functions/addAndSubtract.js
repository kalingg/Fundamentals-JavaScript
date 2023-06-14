function addSubtract(first, second,third){


    function sum(first,second){
        
        return first + second;
    
    }

    let result  = (third ,sum) => sum(first, second) - third;
    

    console.log(result(third,sum));   
};
addSubtract (23,6,10);
addSubtract (1,17,30);
addSubtract (42,58,100);