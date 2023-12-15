
/**
 * continuing from the last exercise. Extend HTMLSelectElement
 * and implement a render() method.
 * Define a const s and set it to new HTMLSelectElement() pass in an array of three items
 * when call s.render(), we should get select element with three options.
 * 
 * Similary, create an HTML image element that inherits from HTMLElement,
 * so, it can be clicked, it can be focused, but it also has its own render()
 * method.
 * Define a const img and set it to new HTMLImageElement() when can optionally pass
 * the source as an argument
 * 
 * WHen inspecting we have the render() and the so src property which is undefined
 * We can aslo see its prototype HTMLElement, it inherits from the instance of 
 * HTMLElement, it has the click() as well as the focus() methods 
 */




// Start of code
  // Pseudocode
      // Continuing from the last exercise
      // create a const 's' and set to new HTMLSelectElement
      // Pass in an array of three items
      // create an HTMLImageElement construnctor with property src and 
      // method render
      //HTMLImageElement inherits from HTMLElement

  // === Last exercise ===

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

  this.render = function () {
    // const selectOpts = this.items.map(item => '<option>'+ item + '</option>');
    // return `<select> ${selectOpts.join('')} </select>`;

    return `
    <select>${this.items.map(item => `
      <option>${item}</option>`).join('')}
    </select>`;
  }
}

// HTMLImageElement constructor
// Implementation of the HTMLImageElement
function HTMLImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src = "${this.src}" />`;
  }
}

// Prototypical Inheritance for HTMLSelectElement
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

// Prototypical Inheritance for HTMLImageElement
HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;


// Starter code
const elements = [
  new HTMLSelectElement([1, 2, 3]),
  new HTMLImageElement('http://')
]; 

for (const element of elements)
  console.log(element.render()); // Render multiple forms of the render()



// const s = new HTMLSelectElement(['1', '2', '3']);

// const img = new HTMLImageElement('htpps://');

// End of code
