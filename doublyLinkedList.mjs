import Node from "./node.mjs";
export default class doublyLikedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    } else {
      let value = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return value;
    }
  }

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    } else {
      let value = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return value;
    }
  }

  unshift(value) {
    if (!this.head) {
      this.push(value);
    } else {
      let node = new Node(value);
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  get(index) {
    if (index < 0 || index > this.length()) {
      throw new Error("Invalid index");
    } else {
      let pointer = this.head;
      for (let i = 0; i <= index - 1; i++) {
        pointer = pointer.next;
      }
      return pointer.value;
    }
  }

  set(index, value) {
    if (index < 0 || index > this.length()) {
      throw new Error("Invalid index");
    } else {
      let pointer = this.head;
      for (let i = 0; i <= index - 1; i++) {
        pointer = pointer.next;
      }
      pointer.value = value;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length()) {
      throw new Error("Invalid index");
    }

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (index === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else if (index === this.length()) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    } else {
      let pointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        pointer = pointer.next;
      }
      let nextNode = pointer.next;

      pointer.next = node;
      node.prev = pointer;

      node.next = nextNode;
      nextNode.prev = node;
    }
  }

  remove(index) {
    if (!this.head) {
      throw new Error("List is empty");
    }

    if (index < 0 || index >= this.length()) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length() - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let pointer = this.head;
      for (let i = 0; i < index; i++) {
        pointer = pointer.next;
      }
      let nextNode = pointer.next;
      let prevNode = pointer.prev;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
  }

  // util method
  length() {
    if (!this.head) {
      throw new Error("List is empty");
    } else if (this.head == this.tail) {
      return 1;
    } else {
      let count = 0;
      let pointer = this.head;
      while (pointer != this.tail) {
        count++;
        pointer = pointer.next;
      }
      return count;
    }
  }
  print() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    let current = this.head;
    let listValues = [];

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    console.log("Doubly Linked List:", listValues.join(" <-> "));
  }
}

// required methods:
// push(val), pop(), shift(), unshift(val), get(index), set(index, value), insert(index, val), remove(index)
