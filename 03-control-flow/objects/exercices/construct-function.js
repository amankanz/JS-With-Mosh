
/**
 * Create a blog post object using a constructor function
 * when executed it should have the same output and logic
 * as the bellow post object
 */

// Start of code
const post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 100,
  comment: [
    {
      comment: 'd',
      author: 'e'
    },
    {
      comment: 'f',
      author: 'g'
    }
  ],
  isLive: true
}

// Pseudocode
// Create a constructor function
// with parameters: title, body, author, views, comment(an array of objects) and islive.


// Constructor
// function Post(title, body, author, views, comment, isLive) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = views;
//   this.comment = comment;
//   this.isLive = isLive;
// }

// CORRECTION

// Aim to have few parameter for the function
let post1 = new Post ('a', 'b', 'c');

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comment = [];
  this.isLive = false;
}

console.log(post1);

// End of code