
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
 * Remember our HTMLElement Object has two methods click() whick is an instance or own method
 * and the other is focus() which is a prototype method.
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

// End of code
