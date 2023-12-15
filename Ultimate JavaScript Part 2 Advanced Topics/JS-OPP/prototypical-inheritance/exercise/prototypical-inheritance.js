
/**
 * Design two objects, one is HTMLElement and the other is 
 * HTMLSelectElement which represent a drop dowm list.
 * We have prototypical inheritance with HTMLSelectElement and its parent
 * which is HTMLElement.
 * Define a const 'e' and set it to a new HTMLElement, when inspecting the object
 * In the object, we have one method click() and in its prototype we have 
 * another method focus(), the implimentation of these methods is just a console.log statements
 * IMPORTANT:
 * We have one instance or own method click(), and one prototype method focus()
 * 
 * Define another const 's' and set it to a new HTMLSelectElement, in the constructor
 * we can optionaly pass an array of items like 1, 2, 3; if don't pass anything
 * it will be initialize to an empty array
 * When inspecting the object, we have 'items' property which is initialize to an empty array
 * we also have two methods 'addItem()' and 'removeItem()'
 * we can call s.addItem('1'), s.addItem('2') and then we remove item 2 s.removeItem('2')
 * when inspecting, in the items['1'] we only have one item
 * IMPORTANT:
 * This HTMLSelectElement inherits from HTMLElement
 * when inspect its prototype, this prototype is an instance of HTMLElement Object
//  * Remember our HTMLElement Object has two methods click() whick is an instance or own method
//  * and the other is focus() which is a prototype method.
 * 
 * Do not use the extend() fuction we created earlier in class, we must manually
 * set the prototype for HTMLSelectElement, you should that to an instance of 
 * the HTMLElemnt object becuase the click() method is on the instance.
 *  
 * NB: If you set the prototype of HTMLSelectElemnt to the prototype of HTMLElement
 * you will only get the focus() method because it is defined on the prototype.
 * 
 * Spend 20 to maximum 30 minutes  
 */

// Start of code
// Pseudo code
    // COMPOSITION STYLE
    // create two objects HTMLSelectElement and HTMLElement
    // Declare a click() method in HTMLSelectElement and
    // focus() method inside the HTMLElement
    // define a const 'e' set it to new HTMLElement
    // 
    // Define a constuctor HTMLSelectEment which can receive a varies number of 
    // arguments 
    // Create items property inside of the HTMLSelectElement
    // items is initialize to an empty array.
    // create two methods addItem() and removeItem()
    // with the addItem() we can add element at the end of items array
    // with the removeItem() we can remove items at the end of the array
    
// === SOLUTION 01 ===

//   const htmlElement = {
//     focus: function () {
//       console.log('focusing');
//     }
//   };

//   const htmlSelectElement = {
//   }; 
  
//   // HTML Constructor
//   function HTMLElement() {
//     this.click = function () {
//       console.log('clicking');
//     };
//   }

//   // HTMLSelectElement constructor
//   function HTMLSelectElement(...items) {
//     this.items = [...items];

//     this.addItem = function (item) {
//       this.items.push(item);
//     };

//     this.removeItem = function (item) {
//       this.items.pop(item);
//     };
//   }

// function mixin(target, ...sources) {
//   Object.assign(target, ...sources)
// }
// mixin(HTMLElement.prototype, htmlElement);

// const e = new HTMLElement();

// // Prototypical Inheritance
// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
// HTMLSelectElement.prototype.constructor = HTMLSelectElement;

// // Method Overriding
// HTMLSelectElement.prototype.click = function () {
//   HTMLElement.prototype.click.call(this);
// }

// const s = new HTMLSelectElement();

// === SOLUTION 02 ===

// HTMLElement constructor
// Parent object
function HTMLElement() {
  this.click = function () {
    console.log('clicked');
  }
}

HTMLElement.prototype.focus = function () {
  console.log('focused');
}

const e = new HTMLElement(); // Defined a new HTMLElement object

// HTMLSelectElement constructor
function HTMLSelectElement(items = []) {
  this.items = items; // The argument ES6 Style

  this.addItem = function (item) {
    this.items.push(item);
  }

  this.removeItem = function (item) {
    this.items.splice(item.indexOf(item), 1);
  }
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const s = new HTMLSelectElement();
// End of code
