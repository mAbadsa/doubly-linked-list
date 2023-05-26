# Doubly Linked List
> A doubly linked list (DLL) is a special type of linked list in which each node contains a pointer to the previous node as well as the next node of the linked list.

![DLL1](https://github.com/mAbadsa/doubly-linked-list/assets/42316204/8ac6d276-dd76-4e27-b3ce-060211da21a7)
[Source](https://www.geeksforgeeks.org/data-structures/linked-list/doubly-linked-list/)
##### Advantages of Doubly Linked List over the singly linked list:
 * A DLL can be traversed in both forward and backward directions. 
 * The delete operation in DLL is more efficient if a pointer to the node to be deleted is given. 
 * We can quickly insert a new node before a given node. 
 * In a singly linked list, to delete a node, a pointer to the previous node is needed. To get this previous node, sometimes the list is traversed. In DLL, we can get the previous node using the previous pointer. 

#### Disadvantages of Doubly Linked List over the singly linked list:
 * Every node of DLL Requires extra space for a previous pointer. It is possible to implement DLL with a single pointer though. 
 * All operations require an extra pointer previous to be maintained. For example, in insertion, we need to modify previous pointers together with the next pointers. For example in the following functions for insertions at different positions, we need 1 or 2 extra steps to set the previous pointer.

#### Applications of Doubly Linked List:
 * It is used by web browsers for backward and forward navigation of web pages 
LRU ( Least Recently Used ) / MRU ( Most Recently Used ) Cache are constructed using Doubly Linked Lists. 
 * Used by various applications to maintain undo and redo functionalities. 
 * In Operating Systems, a doubly linked list is maintained by thread scheduler to keep track of processes that are being executed at that time.
