
/**
 * On yelp.com, we have price range buttons:
 * Inexpensive
 * Moderate
 * Pricey
 * Implement the same concept using object.
 * What properties these objects should have.
 */

// Start of the code
// Pseudocode
// Create an object named priceRange three properties
// Each property is another object
// The properties object contain other properties:
// thumbnail, productName, rating, reviews, category, and .
// location

// const priceRange = [
//     inexpensive: {
//       category: '$',
//       thumbnail: './image',
//       productName: 'Hardware societe',
//       rating: [],
//       reviews: 0,
//       location: 'xyz',
//       Comment: []
//     },
  
  
// ];

// CORRESCTION
const priceRang = [
  {label: '$', toolTip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
  {label: '$$', toolTip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
  {label: '$$$', toolTip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
  {averagePerPerson: 5}
]
// End of the code