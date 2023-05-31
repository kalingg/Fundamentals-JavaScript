function rounding(input){

let index = Number (input[1]);
let number = Number (input[0]);

    console.log(number.toFixed(index));
}
rounding([3.1415926535897932384626433832795,2]);
rounding([10.5,3]);