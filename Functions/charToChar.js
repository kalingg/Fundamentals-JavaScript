function ascii (x, y){

let startChar=  x.charCodeAt(0);
let endChar = y.charCodeAt(0);

let result=[];

for(let code= startChar; code< endChar; code++){

    let char = String.fromCharCode(code);
    result+=char + ` `
    


}
console.log(result);
}
ascii ('a','d')
ascii ('#',':')
ascii ('C','#')