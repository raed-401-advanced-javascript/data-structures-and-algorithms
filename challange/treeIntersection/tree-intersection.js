'use strict';
class Node {
  constructor(val,right=null,left=null){
    this.val = val;
    this.right = right; 
    this.left = left;
  }
}
class Node_link{
  constructor(val,next=null){
    this.val = val; 
    this.next = next;
  }
}
class HashTable{
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }
  hash(key){
    return key.split('').reduce((ccr,elemnt)=>{
      return ccr = ccr + elemnt.charCodeAt(0);
    },0)*19 % this.size;
  }
  set(key,value){
    let hased_value = this.hash(key);
    if(this.map[hased_value]){
      return null;
    }else{
      this.map[hased_value]  = new Node_link([value]);
    }
  }
}
class Tree {
  constructor(){
    this.root = null;
  }
  preorder(node_1,node_2){
    let output = [];
    let storage = new HashTable(1024);
    let placeHolder = [node_1,node_2];
    for(let i=0;i<placeHolder.length;i++){
      if(!storage.map[storage.hash(node_1.val)]){
        output.push(node_1.val);
      }
      if(node_1.left){
        return preorder(node_1.left);
      }
      if(node_1.right){
        return preorder(node_1.right);
      }
    }
    return output;
  }
  
}
let treee = new Tree();
treee.preorder();