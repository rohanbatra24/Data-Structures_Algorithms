// what is a pointer?

const obj1 = { a: true };

const obj2 = obj1; // pointer to obj1. This doesnt create a new object. It is only a reference to that part of memory that cointains {a:true}. Both obj1 and obj2 point to the same location in memory

obj1.a = 'kkk';

delete obj1; // garbage collection will only happen if obj2 pointer is changed to something else. Till then, that memory will be kept

// console.log('obj1', obj1);
// console.log('obj2', obj2);

// Create a linked list

// 10 -> 5 -> 16

let myLinkedList = {
	head : {
		value : 10,
		next  : {
			value : 5,
			next  : {
				value : 16,
				next  : null
			}
		}
	}
};

class LinkedList {
	constructor(value) {
		this.head = {
			value : value,
			next  : null
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = {
			value : value,
			next  : null
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = {
			value : value,
			next  : null
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	insert(index, value) {
		const newNode = {
			value : value,
			next  : null
		};
		const leader = this.traverseToIndex(index - 1);
		const holdingPointerTo = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointerTo;
	}

	remove(index) {
		const leader = this.traverseToIndex(index - 1);
		leader.next = leader.next.next;
		this.length--;
	}

	traverseToIndex(index) {
		let currentNode = this.head;
		let counter = 0;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	reverse() {
		if (!this.head.next) {
			return this.head;
		}
		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
	}
}

const MyLinkedList = new LinkedList(10);

MyLinkedList.append(5);
MyLinkedList.append(16);
MyLinkedList.prepend(18);
MyLinkedList.insert(1, 68);
console.log(MyLinkedList.printList());

MyLinkedList.remove(4);

console.log(MyLinkedList.printList());
