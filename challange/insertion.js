'use strict';

function insertion(arr){
  for(let i=1;i<arr.length;i++){
    let key = arr[i];
    let limit = i-1;
    while(limit>=0 && key<arr[limit]){
      arr[limit + 1] = arr[limit];
      limit = limit -1;
    }
    arr[limit + 1]  = key;  
  }
  return arr;
}

console.log(insertion([5,1,7,2,9,3]));