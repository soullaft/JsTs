class List {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  add(item) {
    this.items[this.size] = item;
    this.size++;
  }

  remove(data) {
    let index = this.items.indexOf(data);
    if (index <= -1) {
      return null;
    }
    this.items.splice(index, 1);
    this.size--;
  }

  change(data, newData) {
    let index = this.items.indexOf(data);
    if (index === -1) {
      return null;
    }
    this.items[index] = newData;
  }

  find(data) {
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
