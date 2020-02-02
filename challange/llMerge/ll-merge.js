'use strict';

// const util = require('util');
class Node {
  constructor(data,next=null){
    this.data = data;
    this.next = null;
  }
}

class Link {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  insert(data){
    this.head = new Node(data,this.head);
    this.size++;
  }
  append(value){
    let node = new Node(value);
    let current;
    if(this.head === null){
      this.head = node;
    }else{
      current = this.head;
      while(current.next){
        current = current.next;
      } 
      current.next = node;
      // console.log(current)
      this.size ++;
    }
  }
  merge(list_1,list_2){
    let current_1 = list_1.head;
    let current_2 = list_2.head;
    let ll = new Link();
    // console.log(current_1);
    // console.log(current_2);
    // let flag = true;
    while(list_2.size >=0 || list_1.size>=0){
    //   console.log('hi');
      if(current_1){
        ll.append(current_1.data);
        list_1.size = list_1.size - 1;
        current_1 = current_1.next;

      }
      if(current_2){
        ll.append(current_2.data);
        list_2.size = list_2.size - 1;
        current_2 = current_2.next;
      }
    }
    return ll;
  }
  print_output(list){
    let current = list.head;
    let output = [];
    while(current){
      output.push(current.data);
      current = current.next;
    }
    return output;
  }

}
let new_1 = new Link();
let new_2 = new Link();
new_1.append(0);
new_1.append(2);
new_1.append(4);
new_2.append(1);
new_2.append(3);
new_2.append(5);
// console.log('first',new_1);
// console.log('second',new_2);
// let new_link = new Link();
// console.log(util.inspect(new_link.print_output(new_link.merge(new_1,new_2)), {showHidden: false, depth: null}));
// console.log();

module.exports = {Node,Link};