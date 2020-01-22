'use strict';

let insertShiftArray  = function (arr,target){
    let half_array = Math.ceil(arr.length/2); // to slice array to the two half
    let new_array = new Array(arr.length+1);
    for(let i = 0;i<=half_array;i++){
        if(i === half_array){
            new_array[i] = target
        }if(i< half_array){
            new_array[i] = arr[i]
        }
    }for(let w = half_array ;w<new_array.length-1;w++){
        new_array[w+1] = arr[w];

    }
    return new_array
}   


// console.log(insertShiftArray([1,2,4,5],3))

module.exports = insertShiftArray