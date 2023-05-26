import { DoublyLinkedList } from "./DoublyLinkedList/index.js";

const list = new DoublyLinkedList();
list.push("F");
list.push("K");
list.push("M");
list.push("B");
list.push("S");
list.unshift("D");
list.unshift("Q");
list.unshift("P");
list.get(4).val;
list.set(2, "L");
// list.insert(7, "I");
list.remove(2);
console.dir(list, { depth: null });

