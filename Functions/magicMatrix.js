function magicMatrix(matrix){

    let firstMatrix = []
    let firstMatrixSum=0
    
    let secondMtrix = []
    let secondMtrixSum =0
    
    let thirdMatrix = []
    let thirdMatrixSum=0

    for (let i=0; i< matrix.length; i ++){

        for (let k=0; k<matrix[i].length;k++){
            
            if(i == 0){
                firstMatrix.push(matrix[i][k])
                firstMatrixSum+= Number (matrix[i][k])
            
            }else if(i==1){
                secondMtrix.push(matrix[i][k])
                secondMtrixSum+= Number (matrix[i][k])
            
            }else if(i ==2){
                thirdMatrix.push(matrix[i][k])
                thirdMatrixSum+= Number (matrix[i][k])
            
            }else{
                console.log(`Please check the data that you are providing`)
            }
        }
    }
            if(firstMatrixSum == secondMtrixSum && secondMtrixSum == thirdMatrixSum){
                console.log(true)

            }else{
                console.log(false)
}
}
magicMatrix ([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);
magicMatrix ([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrix ([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);