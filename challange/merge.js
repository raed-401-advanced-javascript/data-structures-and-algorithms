'use strict';

function sort(left,right){
    let output = [];
    let i = 0;
    let w = 0;
    let right_length = right.length;
    let left_length = left.length
    while(i<left_length && w < right_length){
        if(left[i]<right[w]){
            output.push(left[i])
            i++
        }else{
            output.push(right[w])
            w++
        }
    }
    return output.concat(left.slice(i)).concat(right.slice(w))  
}

function devide(arr){
    if(arr.length<2){
        return arr
    }
    let middle  = Math.floor(arr.length/2)
    console.log(middle)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return sort(devide(left),devide(right))
}
console.log(devide([2,6,3,9,5,8,1,0]))

