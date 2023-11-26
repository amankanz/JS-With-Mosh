// Changing the value of this

// The 'this' keyword
// References the Object that is executing the current function

// method -> object
// function -> global (window(browers), global(Node))

// Approch one Method two using regular function
// const video = {
//   title: 'Angel has Fallen',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function(tag) {
//       console.log(self.title, tag)
//     })
//   }
// };

// video.showTags();

// Approach two using the call() method
// In JS functions are object
// function playVideo(a, b) {
//   console.log(this);
// }

// call, apply and bind methods inside the function object
// with these, we can change the value 'this' or this function

// the call() method
// its 1st parameter is thisArg, we can pass an object and 
// 'this' will reference that object 
// playVideo.call({firstName: 'Amani'}, 1, 2);
// playVideo();


// Approach three using the apply() method
// what we pass as argument wil be used as the value of 'this'
// playVideo.apply({firstName: 'Zihalirwa'}, [1, 2]);

// Difference btwn call() and apply() methods 
// is only about passing arguments
//

// Approach four using the bind() method
// the bind() does not call the playVideo() function
// it returns a new function() and set 'this' to point to this object(we passed in) permanently.

// playVideo.bind({ firstName: 'Fred' })();

// Back to the video object using bind() method
// const video = {
//   title: 'Angel has Fallen',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag)
//     }.bind(this))    
//   }
// };

// video.showTags();

// Using an arrow function
const video = {
  title: 'Angel has Fallen',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => console.log(this.title, tag))    
  }
};

video.showTags()

// Take away:
// 3 ways to change the value of this
// Using the self appraoch
// Using the bind()

