function bus(distance, passengers, priceLiter){


    let increasesFuel= passengers*0.100;
    
    let fuel = (distance/100) *(7 +increasesFuel);
    
    console.log (`Needed money for that trip is ${(fuel *priceLiter).toFixed(2)} lv`);

};
bus(260, 9, 2.49);
bus(90, 14, 2.88);