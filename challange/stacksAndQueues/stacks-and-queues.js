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
        if(!this.head){
            // console.log('this.head',)
            this.head = new Node(value);
            this.top = this.head.data
            // console.log('hi')
        }else{
            let current = this.head
            // console.log('hi')
            // console.log('this head',current)
            while(current){
                if(current.next == null){
                    current.next = new Node(value)
                    // this.head = current
                    this.top = new Node(value)
                    return current
                }else{
                    console.log(current.data)
                    current = current.next
                }
            }
        }
    }
    pop(){
        let current = this.head
        while(current){
            if(current.next.next == null && current.next.next == undefined){
                this.top = current
                current.next = null
                return current.data;
            }else{
                current = current.next;
            }
        }
    }
    peek(){
        return this.top.data
    }
    isEmpty(){
        let current = this.head
        if(current){
            return true
        }
        else{
            return false
        } 
    }
}

let st = new Stack();
st.push(5)
st.push(4)
st.push(3)
console.log(JSON.stringify(st))