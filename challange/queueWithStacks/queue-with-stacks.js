'use strict';

class Node {
  constructor(value,next=null){
    this.value = value;
    this.next = next;
  }
}

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
    let output = this.head.value;
    this.head = this.head.next;
    if(this.head === null){
      this.top = null;
    }else{
      this.top = this.head.value;         
    }
    return output;
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

class PseudoQueue {
  constructor(){
    this.Stack_2 = new Stack();
    this.Stack_1 = new Stack();
  }
  enqueue(value){
    // this.Stack_2.push(value) 
    this.Stack_1.push(value); 
  }
  dequeue(){
    let flag = true;
    while(flag){
      if(!this.Stack_1.isEmpty()){
        this.Stack_2.push(this.Stack_1.pop());
      }else{
        flag = false;
        this.Stack_2.pop();
        return this.Stack_2;
      }
    }
  }

}

module.exports = {Node,Stack,PseudoQueue};

let Qeue = new PseudoQueue();

Qeue.enqueue(5);
Qeue.enqueue(4);
Qeue.enqueue(3);
Qeue.dequeue(); 
Qeue.dequeue(); 
// console.log(Qeue.dequeue())


console.log(JSON.stringify(Qeue));