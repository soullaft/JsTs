class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  addAtPosition(data, position) {
    let newNode = new Node(data);
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let i = 1;
    while (i < position - 1 && current) {
      current = current.next;
      i++;
    }
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  change(newData, position) {
    if (!this.head) {
      return null;
    }
    if (position === 1) {
      this.head.data = newData;
      return;
    }
    let current = this.head;
    let i = 1;
    while (i < position && current) {
      current = current.next;
      i++;
    }
    if (current) {
      current.data = newData;
    }
  }

  remove(data) {
    if (!this.head) {
      return null;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.length--;
        return this;
      }
      current = current.next;
    }
    return null;
  }

  find(data) {
    let i = 0;
    let current = this.head;
    while (i <= this.length && current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
      i++;
    }
  }

  getSize() {
    return this.length;
  }

  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
