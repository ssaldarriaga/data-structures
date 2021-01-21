class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length) {
      const prevNode = this.top;
      this.top = newNode
      this.top.next = prevNode;
    } else {
      this.bottom = newNode;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    const value = this.top;
    this.top = value.next;

    if (!this.top) {
      this.top = null;
      this.bottom = null;
    }
    
    this.length--;
    return value;
  }
}

const stack = new Stack();
console.log('push', stack.push(1));
console.log('push', stack.push(2));
console.log('push', stack.push(3));
console.log('peek', stack.peek());
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log('stack', stack)