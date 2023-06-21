function personInfo(info){

    let name= {
        firstName: info[0],
        secondName: info[1],
        age: info[2]
    }

    console.log(name.firstName, name.secondName, name.age)

    }
personInfo (["Peter","Pan","20"])
