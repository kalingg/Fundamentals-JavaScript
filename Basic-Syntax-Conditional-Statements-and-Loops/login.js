function login(input){

    let attepmts =0;
    let password = input[0];
    
    let reverse = ``;
    
    for(let i=1; i<=input.length; i ++){
        
        for(let j=input[i].length-1; j>=0; j--){
            reverse= input[i][j];
        }
       
        
        if(i==password || reverse==password){
            console.log(`User ${password} logged in.`)
        }else{
            console.log(`Incorect password. Try again.`);
            attepmts++;
        }
        if(attepmts ==3){
            console.log(`User ${password} blocked!`)
            
        }
    }
}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','notsunny']);