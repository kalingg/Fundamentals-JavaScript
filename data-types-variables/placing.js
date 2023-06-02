function str(word, symbol, check){

    let newWord= word.replace(`_`, symbol)

    let output =newWord ===check? `Matched` : `Not Matched`;

        console.log(output)


}
str ('Str_ng', 'I', 'Strong')
str ('Str_ng', 'i', 'String')