'use strict';
// const util = require('util');
  
class Node {
  constructor(data,next= null){
    this.data = data ;
    this.next = next ;
  }
}
  
class Link {
  constructor(){
    this.head = null;
    this.size = 0;
  }
  insert(data){
    this.head = new Node(data,this.head);
    this.size = this.size + 1;
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
  added_before(new_vlaue,target){
    let current;
    if(this.head == null){
      this.head = new Node(new_vlaue);
    }else{
      let flag = true;
      current = this.head;
      while(current.next && flag){
        if(current.data === target){
          current = new Node(new_vlaue,current);
          flag = false;
        }
        if(current.next.data == target){
          // console.log("hi",current.next.data)
          current.next = new Node(new_vlaue,current.next);
          flag = false;
        }else{
          // console.log('test',current.next)
          current = current.next;
        }
      }
      this.size++;
    }
  }
  added_after(new_value,target){
    let current;
    if(this.head == null){
      this.head = new Node(new_value);
    }else{
      let flag = true;
      current = this.head; 
      while(current.next && flag){
        if(current.next.data === target){
          current.next.next = new Node(new_value,current.next.next);
          flag = false;
        }else{
          current = current.next;
        }
      }
      this.size++;
    }
  }
}

// let ll = new Link();
// ll.insert(2)
// ll.insert(1)
// ll.added_before(0,1)
// // ll.append(300);
// // ll.insert(500);
// // ll.insert(600);
// // console.log(Object.keys())
// console.log(util.inspect(ll, {showHidden: false, depth: null}))
// // let output = ll
// // console.log(output.head.next.next.next.next)

module.exports = {Node,Link};

