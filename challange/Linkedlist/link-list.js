  
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
    append(value){
      let flag = true  
      while( this.size && flag ){
        if(this.head.next === null){
          // this.head = this.head.next
          console.log(this.head.next)
          this.head.next = new Node(value)
          flag = false
        }else{
          console.log(this.head.data)  
          this.head = this.head.next
          // console.log(this.head)
          this.size = this.size - 1 
        }       
      }
    }
  }

let ll = new Link();
ll.insert(100);
ll.insert(200);
ll.append(500);
console.log(ll)