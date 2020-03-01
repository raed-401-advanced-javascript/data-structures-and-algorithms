class Node {
    constructor(val,next=null){
        this.val = val 
        this.next = next 
    }

}

class linked {
    constructor(){
        this.head = null 
    }
    add(data){
        if(!this.head){
            this.head = new Node(data)
        }else{
            this.head = new Node (data,this.head) 
        }
        return this.head
    }
    read(){
        if(!this.head){
            return 'no items in list '
        }
        else{
            let current = this.head 
            while (current){
                console.log(current.data)
                current = current.next
            }
        }
    }
}
class Hashtable {
    constructor(size){
        this.size = size
        this.map = new Array(size);
    }
    hash(key){
        let output = 0
        key.split('').forEach(element => {
            output = output + element.charCodeAt(0) 
        });
        return output * 11 % this.size
    }
    set(key,value){
        let hashed_val = this.hash(key)
        if(this.map[hashed_val]){
            this.map[hashed_val].add([key,value])
        }else{
            let ll = new linked()
            ll.add([key,value])
            this.map[hashed_val] = ll
        }
    }
    get(key){
        let hashed_key = this.hash(key)
        if(this.map[hashed_key]){
            return this.map[hashed_key].head.val[1]
        }else{
            return 'does not exsist'
        }
    }
    contain(key){
        let hashed_key = this.hash(key)
        if(this.map[hashed_key]){
            return true 
        }else{
            return false
        }
    }

}
let h_t = new Hashtable(1024)
h_t.set('name','ahmad')
h_t.set('name','raed')
h_t.set('name','khalid')
h_t.set('age','25')
console.log('what i want',h_t.contain('name'))