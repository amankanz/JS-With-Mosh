
// In JS, objects are dynamic which means once you create them you can always  add new properties or methods, or remove the existing ones

// We can not reassign this object but we can always add or remove its properties.
const circle = {
  radius: 1
}  

circle.color = 'yellow';
circle.draw = function () {
  
}

delete circle.color;
delete circle.draw;

console.log(circle);