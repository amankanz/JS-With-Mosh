
/**
 * Design a stopwatch object:
 * Define a const named sw, and set it to new Stopwatch
 * the object has a few members:
 * duration, which is a property as well as three methods:
 * reset(), start() and stop() 
 * 
 * other members are inherited from the base object.
 * 
 * Initially duraction is 0, we can start() the stopwatch
 * If we call start() again it will thro an error 'Stopwatch has already started.'
 * NOw, we can call stop(), we can not call stop() in a roll it will throw an error
 * 'Stopwatch is not started.'
 * We can access the duration property.
 * the stopWatch object count from the moment you call the start() method
 * until you call the stop() method to stop the object from countinuing counting.
 * 
 * when you call start(), the object start counting
 * when call stop(), it stops it from continuing counting
 * when call duration, it shows the time when stopwatch started and when it stop counting.
 * 
 * We can also call reset() method, takes the stopwatch to its initial state.
 * 
 */

// Start of code
// Time required 30 minutes

/**
 * Pseudocode:
 *  Declare a constructor function named Stopwatch () {}
 *  the construct has private and publich members:
 *  private members:
 *  initialize variables 0:
 *    startTime, endTime and duration
 *    running to false
 * 
 *  public members:
 *   create a method start(), end() and reset()
 * 
 * Method start() and end() should have a check validation
 * In start()
 *   if running flag an erro else set running to true
 * In stop()
 *  if not running flag an erro else set running to false
 * create a variable second to store the time taken from star() to end()
 * 
 * re-initialize duration to seconds; 
 * 
 * Inside the reset()
 * re-initialize varible startTime, endTime and duration to 0
 * and set running to false.
 * 
 * Make the duration variable a readOnly property.
 */

// Constructor function
function Stopwatch() {
  let startTime, endTime, duraction = 0;
  let running = false;

  // Public members
  this.start = () => {
    // validation check
    if(running)
      throw Error('Stopwatch has already started.');
    running = true; // otherwise set running to true

    startTime = new Date(); // set current date time
  }

  this.stop = () => {
    // validation check
    if(!running)
      throw Error('Stopwatch is not started.');
    running = false;

    endTime = new Date();

    // Calcualte the endTime and startTime in seconds
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duraction += seconds;
  }

  // reset
  this.reset = () => {
    startTime = 0;
    endTime = 0;
    duraction = 0;
    running = false;
  }

  // Make the duraction property a readOnly property
  Object.defineProperty(this, 'duration', {
    get: () => duraction
  })


}


// End of code