class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    this.length--;
    const item = this.data[this.length];
    delete this.data[this.length];
    return item
  }

  delete(index) {
    const item =this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]      
    }
    this.pop();
  }

  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];      
    }
    this.data[0] = item ;
    this.length++;
    return this.data;
  }

  shift() {
    return this.delete(0);
  }
}

const myArray = new MyArray();

console.log('push', myArray.push('Diego'));
console.log('push', myArray.push('Karen'));
console.log('push', myArray.push('Oscar'));
console.log('print', myArray);
console.log('unshift', myArray.unshift('Sebas'));
console.log('print', myArray);
console.log('shift', myArray.shift());
console.log('print', myArray);
