
/**
 * In JS we have two categories of types:
 * Value Ttypes or Premitive types
 * Reference types
 */

/**
 * Value Types:
 *    Number
 *    String
 *    Boolean
 *    Symbol //New in ES6
 *    undefined
 *    null
 */

/**
 * Reference Types:
 *    Object
 *    Function
 *    Array
 */

// let x = 10;

// let y = x;

// NB: x and y are independent varible
// x = 20;

// console.log(x); // output: 20

// console.log(y); // output: 10

/**
 * When working with premitive, the value 10 gets stored inside the variable x
 * when we copy variable y into variable y, the value stored in variable x is copied
 * into variable x.
 * x and y are completly independent of each other. 
 */

// Reference Type
// let x = {value: 10};

// let y = x;

// x.value = 20;

// console.log(x); // output: { value: 20 }

// console.log(y); // output: { value: 20 }

/**
 * TAKE AWAY:
 * when using an object, that object { value: 20 } is not stored in variable x
 * that object is stored some else in the memory, and the address of that object
 * memory location is stored inside that variable x. 
 * And then when we copy x into y. It's the address or the reference that is copied.
 * Both x and y are pointing to the same object in memory.
 */

/**
 * CONCLUSION:
 * Premitives are copied by their value.
 * Reference types or Objects are copied by their reference.
 */

// Example
// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number); // output: 10

/**
 * when we call increase(number), its value is copied into the number parameter 'number'
 * that is local in this function increase() {}
 * Inside the function we increament number by 1, it will be 11
 * but after this function, the number inside the function is going to
 * go out of the scope.
 * 
 * So, when logging number to the console, we are essentialy dealying with
 * 'number' variable existing out the function
 */

// Reference type:
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // output: { value: 11 }
/**
 * When we call increase(obj), the objt argument is passed by its reference
 * the local parameter obj passed to the function increase, will point to the same
 * object that we define outside the function increase() scope.
 * 
 * Any changes made to the object will be visible to the other variable. 
 */
