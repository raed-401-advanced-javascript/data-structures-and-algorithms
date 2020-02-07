'use strict';

class Node {
  constructor(data,next=null){
    this.data = data;
    this.next = next;
  }
}

// class Link{
//     constructor(){
//         this.head = null;
//         this,size = 0;
//     }
// }
class Stack {
  constructor(){
    this.top = null;
    this.head = null;
  }
  push(value){
    this.head = new Node(value,this.head);
    this.top = value;
  }
  pop(){
    this.head = this.head.next;
    if(this.head === null){
      this.top = null;
    }else{
      this.top = this.head.data;
            
    }
  }
  peek(){
    return this.top;
  }
  isEmpty(){
    let current = this.head;
    if(current){
      return false;
    }
    else{
      return true;
    } 
  }
}

class Qeue {
  constructor(){
    this.front = null;
    this.head = null; 
    this.rare = null;
  }
  enqueue(value){
    if(this.head === null){
      this.head = new Node(value);
      this.front = this.head.data;
      this.rare = this.head.data;
    }else{
      this.head = new Node(value,this.head);
      this.rare = value;
    }
  }
  dequeue(){
    let current = this.head;
    let flag = true;
    if(this.head.next === null){
      this.head = null;
      this.front = null;
      this.rare =  null;
    }else{
      while(flag && current){
        if(current.next.next == null){
          flag = false;
          this.front = current.data;
          current.next = null; 
        }else{
          current = current.next;
        }
      }

    }      
  }
  peek(){
    return this.front;
  }
  isEmpty(){
    if(!this.head){
      return true; 
    }else{
      return false;
    }
  }
}

// let st = new Stack();
// st.push(5)
// st.push(4)
// st.push(3)
// st.pop()
// console.log(st.isEmpty())
// console.log(JSON.stringify(st))
// console.log(st)
let qu = new Qeue();
qu.enqueue(5);
// qu.enqueue(4)
// qu.enqueue(3)
// qu.dequeue()
// qu.dequeue()
// console.log(qu)
// console.log(JSON.stringify(qu))
let stacks = new Stack();
stacks.push(5);
stacks.push(4);
stacks.pop();
console.log(stacks);
module.exports = {Node,Stack,Qeue};