function houseParty(arr) {
    let guests = [];
  
    for (let i = 0; i < arr.length; i++) {
      let tokens = arr[i].split(" ");
      let name = tokens[0];
      let action = tokens[2];
  
      if (action === "going!") {
        if (guests.includes(name)) {
          console.log(`${name} is already in the list!`);
        } else {
          guests.push(name);
        }
      } else if (action === "not") {
        if (guests.includes(name)) {
          guests = guests.filter((guest) => guest !== name);
        } else {
          console.log(`${name} is not in the list!`);
        }
      }
    }
  
    console.log(guests.join("\n"));
  }
houseParty (['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])

houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])