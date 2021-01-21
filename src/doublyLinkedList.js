class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      prev: null,
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const node = new Node(value);

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value);
    
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get(index, reverse = false) {
    let currentNode = reverse ? this.tail : this.head;
    const pointer = reverse ? 'prev' : 'next';

    for (let i = 1; i <= index; i++) {
      if (currentNode[pointer]) {
        currentNode = currentNode[pointer];
      } else {
       throw Error(`list index ${index} out of range error while iteratively popping elements`);
      }
    }

    return currentNode;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const node = this.get(index - 1)
    const newNode = new Node(value);

    newNode.prev = node;
    newNode.next = node.next;
    node.next.prev = newNode;
    node.next = newNode;

    this.length++;
    return this;
  }

  deleteHead() {
    this.length--;
    this.head = this.head.next;
    this.head.prev = null;
    return this;
  }

  delete(index) {
    if (index === 0) return this.deleteHead();

    const prevNode = this.get(index - 1)
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    nodeToDelete.next.prev = prevNode;
    
    if (this.length -1 ===index) {
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList(1);
console.log('append', doublyLinkedList.append(2));
// console.log('append', doublyLinkedList.append(3));
// console.log('append', doublyLinkedList.append(4));
console.log('insert', doublyLinkedList.insert(1, 5));