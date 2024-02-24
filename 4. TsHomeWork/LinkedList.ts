class CustomNode<T> {
    data: T;
    next: CustomNode<T> | null;

    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }

  class CustomLinkedList<T> {
    head: CustomNode<T> | null;
    tail: CustomNode<T> | null;
    length: number;
    
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    add(data: T) {
      const newNode = new CustomNode<T>(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    addAtPosition(data:T, position: number) {
      let newNode = new CustomNode<T>(data);
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
  
    change(newData: T, position: number): void {
      if (!this.head) {
        return;
      }
      if (position === 1) {
        this.head.data = newData;
        return;
      }
      let current: CustomNode<T> | null = this.head;
      let i = 1;
      while (i < position && current) {
        current = current.next ?? null;
        i++;
      }
      if (current) {
        current.data = newData;
      }
    }
  
    remove(data: T) {
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
  
    find(data: T): CustomNode<T> {
      let i = 0;
      let current = this.head;
      while (i <= this.length && current) {
        if (current.data === data) {
          return current;
        }
        current = current.next;
        i++;
      }
      
      throw new Error(`Data: ${data} was not found.`);
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