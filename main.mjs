import doublyLikedList from "./doublyLinkedList.mjs";
let list1 = new doublyLikedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);
list1.push(7);
list1.push(8);
list1.push(9);
list1.push(10);
list1.push(11);
list1.push(12);
list1.print();

// pop(),
console.log("pop method");
list1.pop();
list1.print();

// shift()
console.log("shift method");
list1.shift();
list1.print();

// unshift(val)
console.log("unshift method");
list1.unshift(11);
list1.print();

// get(index)
console.log("get method");
console.log(list1.get(4));

// set(index, value)
console.log("set method");
list1.set(4, 100);
list1.print();

// insert(index, val)
list1.insert(1, 200);
list1.print();

// remove(index)
list1.remove(0);
list1.print();
