import { Node } from "./NodeClass.js";

export class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      newNode.prev = null;
    }
    this.length++;
    return true;
  }
  get(index) {
    if (index > this.length - 1 || index < 0) return null;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      return this.head;
    }
    let crrNode, counter;
    let midIndex = Math.floor(this.length / 2);

    if (index >= midIndex) {
      crrNode = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        crrNode = crrNode.prev;
        counter--;
      }
    } else {
      crrNode = this.head;
      counter = 0;
      while (counter !== index) {
        crrNode = crrNode.next;
        counter++;
      }
    }
    return crrNode;
  }

  set(index, val) {
    const crrNode = this.get(index);
    if (crrNode) {
      crrNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index > this.length - 1 || index < 0) return null;
    if (index === this.length - 1) {
      this.push(val);
      this.length++;
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      this.length++;
      return true;
    }
    const crrNode = this.get(index);
    const newNode = new Node(val);
    if (crrNode) {
      const prevNode = crrNode.prev;
      newNode.next = crrNode;
      prevNode.next = newNode;
      crrNode.prev = newNode;
      newNode.prev = prevNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) {
      this.shift();
      this.length--;
      return true;
    } else if (index === this.length - 1) {
      let crrNode = this.tail;
      this.pop();
      this.length--;
      return true;
    }
    let crrNode = this.get(index);
    let afterNode = crrNode.next;
    let beforeNode = crrNode.prev;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    crrNode.prev = null;
    crrNode.next = null;
    this.length--;
    return true;
  }
}

