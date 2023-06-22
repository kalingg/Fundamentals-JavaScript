function convert(jsonStr){

    let person = JSON.parse(jsonStr);

    for (let key in person){

        if(person.hasOwnProperty(key)){

            console.log(key + `: ` + person[key]);
        
        }
    }
}
convert ('{"name": "George", "age": 40, "town": "Sofia"}')
