
# What is OOP
Is a programming paradigm or style of programming centered around objects
rather than function.

## 4 pillars of Object-oriented Programming

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

Before OOP we had Procedural Programming (functions on one side variables on the other side, they are decoupled), that divided a program into a set of 
of function. We had data stored in variables and functions that operate on that data,
This style of pragramming leads to spaghetti code, there is so much interdependecy between all these function it become problematic to manage.

OOP came to solve this problem, in OOP we combine a group of related variables and functions into a unit. We call that unit, an object.
we refer to these variable as Property and function as method().

 Example:
A car is an object with property:
- make, model, color
and methods like:
- start(), stop() and move()

## Encapsulation
So in OOP, we group related variables, and functions that oprate on them into objects. 

### Example:
 
 #### Procedural Prgramming
 One of the sympthome with Procedural code is function with so many paramters
#### OOP
 Functions in OOP end up having few and few parameters.
 The fewer the number of paramter the easier it is to use and maintain that function.

 Uncle Bob - Robert  C  Martin once, said 'The best functions are those with no parameters'

 ## Abstraction
 Thinsk of a DVD-player as an object, it has a logic boad inside and a few buttons on the outside that you can interact with. You simple press a button and you don't care what happens on the inside. All that complexity is hidden  from you. This is Abstraction in practice.

 In our object, we use the same technic we can hide some of the properties and methods from the outside, this gives us a couple of benefits:
 - We will make the interface of those object simpler
 
 Using and understanding an object with a few properties and methods it easier than an object with several properties and methods.

 - It will help us reduce the impact of change

 Tomorrow we might changes these inner private properties or methods. None of these change will leak to the outside. None of these changes will impact the rest of the application's code.

 ## Inheritance
 It is a mechanism that allows us to eliminate redundant code.

 Example: Think of html elements like textbox, drop down losts, checkboxes and so on. All these element have few things in common. They should have properties like hidden, an innerHTML, and methods like click() and focus(). Instaed of redefining all of these properties and methods for each html element, we can define them once in a generic object call it HTMLElement and have other objects(textboxes, dropdown lists, checkbpxes,... ) inherit these properties and methods.

 Inheritance helps us eliminate redudant code.

 ## Polymorphism
 Poly means many and morph means form. So polymorphism means many forms. In OOP polymorphism is a techniw that allows us to get rid of long if-else or switch and case statements. 

 Back to the html element example: All those objects(textboxes, dropdown list, checkboxes,...) should have the ability to be rendered on the page. But the way each object is rendered is different from the others. 

 To render multiple HTML elements in a procedural way the code might be long with sitch and case statements, but in Obejct-orientation we can implement a render() method in each of these objects and the rebder() will behave differently depending on the type of object weare referencing.

 We can get rid of the switch and case statements  and use one line of code

 ## Benefits of OOP

 ### Using Enapsulation
 We group related variable and functions together and this way can reduce complexity, and now we can reuse this object in different parts of the program or in different programs.
 1. Reduce complexity
 2. Increase reusability
 
 ### Abstraction
 We hide the details and the complexity and show only the essentials. This technique reduces complexity and also isoalte the impact of changes in the code.
 1. Reduce complexity
 2. Isolate the impact of changes

 ### Inheritance
 With Inheritance we can elimate redudant code

 #### Polymorphism
 We can refactor ugly switch and case statements.   


 