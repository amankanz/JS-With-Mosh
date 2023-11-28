
/**
 * create a circle object  using the object literal syntax
 * the object should have a radius object property
 * that we can read or write to
 * for example: we can set circle.radius = 2;
 * we should also have an area property that is read only
 * that is read only
 * for example: console.log(circle.area);
 */

// Start code
// Pseudocode:
  // create an circle object with properties
  // radius and area
  // make the radius property to be able get read or write
  // Make the area property read only

  const circle = {
    radius: 2,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  };

  circle.radius = 3;

  console.log(circle.area);
// End of code

