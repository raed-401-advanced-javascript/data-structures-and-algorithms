'use strict';

class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class Link{
    constructor(){
        this.head = null;
        this,size = 0;
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.head = null
    }
    push(value){
        this.head = new Node(value,this.head)
        this.top = value
    }
    pop(){
        this.head = this.head.next
        this.top = this.head.data
    }
    peek(){
        return this.top
    }
    isEmpty(){
        let current = this.head
        if(current){
            return false
        }
        else{
            return true
        } 
    }
}

class Qeue {
    constructor(){
        this.front = null;
        this.head = null
    }
    enqueue(value){
        this.head = new Node(value,this.head)
        this.front = this.head.data  
    }
    dequeue(){
        this.head = this.head.next
        this.front = this.head.data
    }
    peek(){
        return this.head.data
    }
    isEmpty(){
        if(this.head){
            return true 
        }else{
            return false
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

let qu = new Qeue();
qu.enqueue(5)
qu.enqueue(4)
qu.enqueue(3)
qu.dequeue()
console.log(qu.isEmpty())
console.log(JSON.stringify(qu))