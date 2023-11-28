
// Scope
const color = 'red'; // Global Scope (Accessible everywhere)

// A scope of a variable or constant determines where that variable or constant is accessible.

function strat() {
  const message = 'hi';
  const color = 'blue'; // local variable takes precedence over global variable
  
  console.log(color);
}

function  stop() {
  const message = 'bye';
}


strat();

// NB: In general avoid defining global variable or constants 
// it's bad practice