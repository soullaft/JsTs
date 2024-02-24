class CustomList<T> {
    items:T[];
    size: number;

    constructor() {
      this.items = [];
      this.size = 0;
    }
  
    add(item: T) {
      this.items[this.size] = item;
      this.size++;
    }
  
    remove(data: T): void {
      let index = this.items.indexOf(data);
      if (index <= -1) {
        return;
      }
      this.items.splice(index, 1);
      this.size--;
    }
  
    change(data: T, newData: T) : void {
      let index = this.items.indexOf(data);
      if (index === -1) {
        return;
      }
      this.items[index] = newData;
    }
  
    find(data: T) {
      let index = this.items.indexOf(data);
      if (index === -1) {
        return null;
      }
      return this.items[index];
    }
  
    printAll() {
      this.items.forEach((element) => {
        console.log(element);
      });
    }
  }
  

  let lst = new CustomList<string>();
  lst.add("kek");
  console.log(lst.find("kek"));