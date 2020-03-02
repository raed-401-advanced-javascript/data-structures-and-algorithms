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
let first_repeate = function(str){
    let input_concat = '' 
    let hash = new Hashtable(1024)
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            // console.log(input_concat)
            if(hash.map[hash.hash(input_concat.toLowerCase())]){
                return input_concat.toLowerCase()
            }else{
                hash.set(input_concat.toLowerCase())
                input_concat = ''
            }
        }else{
            input_concat = input_concat + `${str[i]}`
        }
    }
    return 'sorry there is no duplicate'
} 
console.log(first_repeate("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."))
// let h_t = new Hashtable(1024)
// h_t.set('name','ahmad')
// h_t.set('name','raed')
// h_t.set('name','khalid')
// h_t.set('age','25')
// console.log('what i want',h_t.get('name'))

module.exports = {Node ,linked,Hashtable,first_repeate}