function theatre(input) {
    let day = input[0];
    let age = Number(input[1]);
  
    if (day == "Weekday") {
      switch (true) {
        case age >= 0 && age <= 18:
          console.log("12$");
          break;
  
        case age > 18 && age <= 64:
          console.log("18$");
          break;
  
        case age > 64 && age <= 122:
          console.log("12$");
          break;
      }
    } else if (day == "Weekend") {
      switch (true) {
        case age >= 0 && age <= 18:
          console.log("15$");
          break;
  
        case age > 18 && age <= 64:
          console.log("20$");
          break;
  
        case age > 64 && age <= 122:
          console.log("15$");
          break;
      }
    } else if (day == "Holiday") {
      switch (true) {
        case age >= 0 && age <= 18:
          console.log("5$");
          break;
  
        case age > 18 && age <= 64:
          console.log("12$");
          break;
  
        case age > 64 && age <= 122:
          console.log("10$");
          break;
      };
    };
  };
  
  theatre(["Weekday", 42]);
  theatre(["Holiday", -12]);
  theatre(["Holiday", 15]);
  