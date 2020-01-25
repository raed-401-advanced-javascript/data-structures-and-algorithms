'use strict';

let fib = function(target){
    let first = 0 ;
    let seconed = 1 ;
    let counter = 1
    let sumation = 0
    while(counter<target){
        sumation = first + seconed;
        first = seconed;
        seconed = sumation;
        counter ++
    }
    return sumation

}
// console.log(fib(8))

let sumation = function(arr){
    for(let i=0;i<arr.length;i++){
        let sumation = 0;
        // console.log(arr[i])
        for(let w=0;w<arr[i].length;w++){
            sumation = sumation + arr[i][w]
        }
        arr[i] = sumation
    }
    return arr
}

module.exports = {fib,sumation}
// console.log(sumation([[1,2,3],[4,5,6]]))