'use strict';

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
  from_the_end(position){
    // console.log(this.size)
    let current = this.head;
    this.size = this.size - 1;
    while(current){
      if(this.size == position){
        console.log('hi',this.size,current.data);
        return current.data;
      }else{
        current = current.next;
        this.size = this.size - 1;
      }
    }
    return 'excpetion';
  }
  
}
// let ll = new Link()
// ll.insert(5)
// ll.insert(4)
// ll.insert(3)
// ll.insert(2)
// ll.insert(1)
// console.log(ll.from_the_end(-5))


module.exports = {Node,Link};
// console.log(ll.convert_to_string());