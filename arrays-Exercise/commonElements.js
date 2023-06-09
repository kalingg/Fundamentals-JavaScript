function common (firstArr, secondArr){

    for(let x=0; x<firstArr.length; x++){

        for(let y=0; y<secondArr.length; y++ ){
            if(firstArr[x] ===secondArr[y]){
                console.log(firstArr[x])
            }
        }
    }
}
common(['Hey', 'hello', 2, 4, 'Peter', 'e'],
        ['Petar', 10, 'hey', 4, 'hello', '2'])

common(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
        ['s', 'o', 'c', 'i', 'a', 'l'])