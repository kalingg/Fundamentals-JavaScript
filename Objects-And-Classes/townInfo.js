function town(townInfo){
    
    object= [];

    for(let i=0;i<townInfo.length; i++){
        let columns = townInfo[i].split(" | ")
        let town = columns[0]
        let latitude = parseFloat(columns[1]).toFixed(2);
        let longitude = parseFloat(columns[2]).toFixed(2);
       
        let obj ={
            town:town,
            latitude: parseFloat(latitude),
            longitude:parseFloat(longitude)
        }
        object.push(obj);
    }
    return object;
}
let townInfo =['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'];

let result = town(townInfo);
result.forEach(obj => console.log(obj))