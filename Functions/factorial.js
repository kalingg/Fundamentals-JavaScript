function factorial(firstNumber, secondNumber){

    //Calculate the factorial of the two numbers (fristNumber , secondNumber);
    function calculateFirst( firstNumber){

        let firstResult= 1;
      

        for(let i= 1;i<=firstNumber; i++ ){
            firstResult*=i;

        }
    return firstResult;
}

    function calculateSecond (secondNumber){

        let secondResult = 1;

        for(let k= 1;k<=secondNumber; k++ ){
            secondResult*=k;
    }
        return secondResult
    }


    //Devide fisrtNumber to the secondNumber
    
    let calculatedFirst =    calculateFirst (firstNumber);
    let calculatedSecod =  calculateSecond(secondNumber)
    
    
    //Console the result
    
    if (calculatedSecod === 0) {
        console.log(`Cannot divide by zero.`);
      
    } else {
        let dividedNumber = calculatedFirst / calculatedSecod;
        console.log(dividedNumber);
      }

}
factorial (5,2)
factorial (6,2)