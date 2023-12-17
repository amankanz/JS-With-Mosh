
/**
 * Implement a stack in ES6 classes.
 * A stack is a special kind of data structure, like a physical stack or pipe.
 * A stack has two operation:
 * Push for adding an object in the box and 
 * Pop to remove the object on top of this box.
 * 
 * We can call the push('A') method and push objectA, next we can push('B'), and similary we 
 * can push('C') and now we have A, B and C in the stack, C is on the top.
 * 
 * Unlick array, we cannot accessing objects in the stack using their index but we can always
 * remove object on top of the stack by calling the pop() method.
 * 
 * Implement the Stack class,
 * then create a stack object. when inspecting inside the stack object we have:
 *  
 * 'count' property, initially its valeu is 0;
 * 
 * On the stack prototype we have three method():
 * 
 * peek(), pop() and push()
 * 
 * peek(), is simillar to pop() it returns the object on top of the stack, but it does not
 * remove it from the stack.
 * 
 * When calling pop() on an empty stack, when count is 0, the code should throw an exception
 * 'Stack is empty'
 * 
 * Same if we call peek() on an empty stack, we should get the same error message.
 * 
 * Spend 20 to 30 minutes on this exercise
 */

// Code start here
// Pseudocode:
    // create a class Stack
    // define a property count and set its valeu to 0 in the constructor
    // define three method on the prototype: peek(), pop(), and push()

// === Method 1 ===

// private member
// const _items = new WeakMap();

// class Stack {
//   constructor(element = []) {
//     this.count = 0;

//     _items.set(this, element);
//   }

  
// pop() {
//     // Validation
//     if(this.count === 0) throw Error('Stack is empty')
//     _items.set(this, () => this._items.pop());
  
//   this.count--;
// }

// peek() {
//   // Validation
//   if(this.count === 0) throw Error('Stack is empty')
//   console.log(_items.get(this));
// }

// push(str){
//     _items.set(this, str);

//     this.count++;
//   }
// }

// const stack = new Stack();


// === Method 2 ===

// Define a private member
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []) //_items to an empty array

  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this)
    // validation
    if(items.length === 0) throw Error('Stack is empty.');

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if(items.length === 0) throw Error('Stack is empty.');

    return items[items.length - 1]; // returns the last element of an array
  }

  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();
// End of code
