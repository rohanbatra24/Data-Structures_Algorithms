// implement a hashtable in JS

class HashTable {
	constructor(size) {
		this.data = new Array(size);
		// this.data = [];
	}

	_hash(key) {
		// O(1)
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		// O(1)
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([ key, value ]);
		return this.data;
	}

	get(key) {
		// O(1) mostly. Sometimes can be O(n/k) in case of collisions
		const address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		// O(n) because we have to loop through all the memory allocated to the object
		const keysArray = [];
		console.log(this.data.length);
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');