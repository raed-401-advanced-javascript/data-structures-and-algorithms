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
  include(data){
    // console.log(this.head);
    while(this.size){
      console.log(this.head.data);
      if(data === this.head.data){
        return true;
      }
      this.head = this.head.next;
      this.size = this.size - 1;
    }
    return false;
  }
  convert_to_string(){
    let string_version = '';
    while(this.head ){
    //   console.log(this.head.data)
      string_version = string_version + `{${this.head.data}}` + ` -> `;
      this.head = this.head.next;
    }
    string_version = string_version + `NULL`;
    return string_version;
  }
  
}



module.exports = {Node,Link};
// console.log(ll.convert_to_string());