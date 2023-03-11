class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }

    appendNode(newNode){
        let node = this.head;
        if(node==null){
            //Means it's just empty list
            this.head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
    

    insertAt(index, newNode){
        let node = this.head;
        if(index==0) {
            newNode.next = node;
            this.head = newNode;
            return;
        }
        while(--index){
            if(node.next!==null)
                node = node.next;
            else
            console.log('tttttt')
                // throw Error("Index Out of Bound");
        }
        let tempVal = node.next;
        node.next = newNode;
        newNode.next = tempVal;
    }

    printList(){
        console.log("this.head -> ",this.head)
    }
    
    
    
    
}

export default LinkedList;
