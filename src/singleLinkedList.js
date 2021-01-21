class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value)
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  get(index) {
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      if (currentNode.next) {
        currentNode = currentNode.next;
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
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
    return this;
  }

  deleteHead() {
    this.length--;
    this.head = this.head.next;
    return this;
  }

  delete(index) {
    if (index === 0) return this.deleteHead();

    const prevNode = this.get(index - 1)
    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    if (this.length -1 ===index) {
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    return this;
  }
}

const singleList = new SingleLinkedList(1);
console.log('singleList', singleList)
console.log('append', singleList.append(2));
// console.log('append', singleList.append(3));
console.log('insert', singleList.insert(0, 4));
console.log('delete', singleList.delete(2))
// console.log('get', singleList.get(0))