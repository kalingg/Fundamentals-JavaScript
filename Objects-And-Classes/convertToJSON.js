function convert(name, surname, last){

    let person ={

    firstName: name ,
    secondName: surname ,
    lastName: last
}

for(let key in person){

    console.log(person[key])
}

}
convert ('George',
        
        'Jones',
        
        'Brown')