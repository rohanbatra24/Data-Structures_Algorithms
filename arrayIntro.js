const strings = [ 'a', 'b', 'c', 'd' ];
// 4*4 = 16 bytes of storage

//access
strings[2]; // O(1)

//METHODS
// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)

//unshift - add item to beginning
strings.unshift('x'); // O(n) because need to iterate over each element and move the indices

//splice - add items in middle
strings.splice(2, 0, 'alien'); // O(n)
