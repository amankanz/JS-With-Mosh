
/**
 * In this exercise move the methods, like:
 * start(), stop() and reset() to the prototype of the Stopwatch.
 * You will not be able to access the variables which are within the scope
 * of the Stopwatch function.
 * 
 * When you put the start() method on the prototype
 * can only access the public members of the Stopwatch.
 * Tip:
 * In order to access the private members you need to set them as 
 * public read only property on the Stopwatch and then accessing the, using 'this' 
 */

// Constructor function
function Stopwatch() {
  // Private members
  let startTime, endTime, duraction = 0;
  let running = false;


  // Make the duraction property a readOnly property
  Object.defineProperty(this, 'duration', {
    get: () => duraction,
    set: (value) => duraction = value
  })

  Object.defineProperty(this, 'startTime',{
    get: () => startTime

  })

  Object.defineProperty(this, 'endTime',{
    get: () => endTime
  })

  Object.defineProperty(this, 'running',{
    get: () => running
  })

  // Make the following as publich readonly properties
  // Object.defineProperties(this, 'duration, startTime, endTime, running', {
  //   get: () => duraction,

  //   // set as public readonly members
  //   WritableStream
  // })


}

const sw = new Stopwatch();

// Start of code
    // Pseudocode
        // move the start(), stop() and reset() to the Stopwatch prototype
        // set startTime, endTime and running as public readOnly properties

  // Set as prototype members
  Stopwatch.prototype.start = function () {
    // validation check
    // make running public
    if(this.running)
      throw Error('Stopwatch has already started.');
    this.running = true; // otherwise set running to true

    this.startTime = new Date(); // set current date time
  }

  Stopwatch.prototype.stop = function () {
    // validation check
    if(!this.running)
      throw Error('Stopwatch is not started.');
    this.running = false;

    this.endTime = new Date();

    // Calcualte the endTime and startTime in seconds
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duraction += seconds;
  }

  Stopwatch.prototype.reset = function () {
    this.startTime = 0;
    this.endTime = 0;
    this.duraction = 0;
    this.running = false;
  }


  // Principle:
  // Objects should always be in valid state
  // 'Premature optimazition is the root of all evil'
  //
// End of code
