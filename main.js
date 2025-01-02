const Node = (Data = null)=>{
    let data = Data;
    let next = null

    return{data, next};
}

function LinkedLIst (Head) {
    let head = Head
    function size(){
        let countNum = 0; 
        let node = head;
        while (node) {
            countNum++;
            node = node.next
        }
        return countNum;
    }
    let append = (value) => {
        let node = head
        while(node.next != null){
            node = node.next
        }
        node.next = Node(value);
    }
    let prepend = (value) =>{
        let newHead = Node(value);
        newHead.next = head
        head = newHead;
    }
    function at(index){
        let count = 0; 
        let node = head;
        while (node) {
            if(count == index){
                return node;
            }
            count++;
            node = node.next
        }
        return 'index out of range'
    }
    function tail(){
        let node = head;
        let data;
        while (node) {
            data = node
            node = node.next
        }
        return data
    }

    let contain = (value)=>{
        let count = 0; 
        let node = head;
        while (node) {
            if(value == node.data){
                return true;
            }
            count++;
            node = node.next
        }
        return false
    }

    let find = (value) =>{
        let count = 0; 
        let node = head;
        while (node) {
            if(value == node.data){
                return count;
            }
            count++;
            node = node.next
        }
        return null
    }

    function pop(){
        let node = head;
        let data;
        while (node) {
            if(node.next == null){
                break;
            }
            data = node
            node = node.next
        }
        console.log(data)
        data.next = null
    }
    function toString(){
        let text = '';
        let node = head;
        while (node) {
            text += node.data;
            if(node.next == null){
                break;
            }
            text += ' -> '
            node = node.next
        }
        return text
    }
    return {head, size, append, prepend, at, tail, pop, toString, find, contain}
}

let s = LinkedLIst(Node('s'))
s.append('j')
s.append('r')
s.prepend('A')

let size = s.size()


console.log(s.head)
console.log(size)
console.log(s.toString())
console.log(s.find('A'))
console.log(s.tail());
console.log(s.at(3))
console.log(s.pop());
