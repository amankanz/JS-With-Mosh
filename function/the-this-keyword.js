
// The 'this' keyword
// References the Object that is executing the current function

// method -> object
// function -> global (window(browers), global(Node))


// method -> obj
// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   }
// }

// video.stop = function () {
//   console.log(this);
// }

// video.stop();

// function -> global (widow(browser), global(Node))
// function playVideo() {
//   console.log(this);
// }

// playVideo();

// Constructor function
// function Video(title) {
//   this.title = title;

//   console.log(this);
// }

// new operator creates a new empty object {}
// and set 'this' in the constructor function
// to point to the empty object
// const v = new Video('Big Mouth'); 

// Take away: When dealing with regular function
// 'this' references the global object
// but if you call a function using the 'new' operator
// which is the case for constructor function 'this' will 
// reference a new empty object


// Last Example
// Method one
// const video = {
//   title: 'Angel has Fallen',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     this.tags.forEach((tag) => console.log(this, tag)
//     )
//   }
// };

// video.showTags();

// Method two
const video = {
  title: 'Angel has Fallen',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(tag)
    }, this)
  }
};

video.showTags();

