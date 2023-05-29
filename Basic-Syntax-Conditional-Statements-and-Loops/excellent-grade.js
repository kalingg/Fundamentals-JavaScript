function grade(input){

    if(input<2.99){
        console.log(`Poor`);

    }else if(input>2.99 && input<= 3.49){
        console.log(`Migth be better`)

    }else if(input> 3.49 && input<=4.49){
        console.log(`Good`)

    }else if(input> 4.49 && input< 5.49){ 
        console.log(`Better `)

    }else if (input<=6){
        console.log(`EXCELLENT`)
    }
}

grade (5.50)
grade (4.35)