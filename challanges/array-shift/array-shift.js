'use strict';

let insertShiftArray  = function (arr,target){
    let length_of_arr = Math.ceil(arr.length/2)
    let new_version = arr 
    console.log(length_of_arr,'length')
    for(let i=0;i>arr.length;i++){
        console.log(i,'i')
        if(i==length_of_arr){
            let check = arr[i]
            arr[i] = target
            arr[i+1] = check
        }if(i>length_of_arr){
            let output= arr[i]
            arr[i+1] = new_version[i]
        }else{
            arr[i] = arr[i]
        }
    }
    return arr
    
}   


// console.log(insertShiftArray([1,2,4,5],3))

module.exports = insertShiftArray