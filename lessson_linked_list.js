import LinkedList from './LinkedList.js';
import ListNode from './ListNode.js';
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)
let list2 = new LinkedList()


// console.log(list.head.next.data) //returns 5
console.log(list.getFirst()) //returns 5


let myList = new LinkedList();
let node = new ListNode(5);

myList.appendNode(node);
myList.appendNode(new ListNode(11));
myList.appendNode(new ListNode(7));

myList.insertAt(0, new ListNode(19));
myList.printList();

myList.insertAt(3, new ListNode(21));
myList.printList();

myList.insertAt(6, new ListNode(32));
myList.printList();

