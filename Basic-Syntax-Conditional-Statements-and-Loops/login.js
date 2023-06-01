function login(input) {
    const username = input[0];
    const password = username.split('').reverse().join('');
    let attempts = 0;
  
    for (let i = 1; i < input.length; i++) {
      if (input[i] === password) {
        console.log(`User ${username} logged in.`);
        return;
      } else {
        attempts++;
        console.log('Incorrect password. Try again.');
        if (attempts === 3) {
          console.log(`User ${username} blocked!`);
          return;
        };
      };
    };
  };

login(['sunny', 'yhnus', 'sunnn', 'pass', 'logos', 'oops']);
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','notsunny']);
