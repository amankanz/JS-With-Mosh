
// Make code reusable with Object.assign()
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

// Feature One
const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  }
};

// Feature two
const canWalk = {
  walk: function () {
    console.log('walking');
  }
};

// NEW Feature three
const canSwim = {
  swim: function () {
    console.log('swiming');
  }
};

// Person constructor
function Person() {
}

// Assigning one object to another
// Pass in one obj as a target and then one or more source objects
// const person = Object.assign({}, canEat, canWalk); 

mixin(Person.prototype, canEat, canWalk); // assign canEat and canWalk to PersonObject

const person = new Person();
console.log(person);

// Goldfish constructor
function Goldfish() {
}

// Mixin Goldfish with canEat and canSwim
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);

