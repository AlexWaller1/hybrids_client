import React from 'react';

import Router from './Router'

import Header from './Header'

import HybridsContainer from './HybridsContainer'
import NavLinks from './NavLinks';
import RobotsContainer from './RobotsContainer';
import MinimartsContainer from './MinimartsContainer';

const App = () => {
    return (
        <div>
          <Header />
          <NavLinks />
          <HybridsContainer />
          <RobotsContainer />
          <MinimartsContainer />
          <Router />
        </div>
    );
};

export default App;

/* 

Before diving into the four pillars of Object Oriented Programming, let's go over some
of the basic terminologies

Object: The instance of a class/ it's the working entity of a class

Class: This is the model or standard about the capability of what an object can do

Method: Can modify a class state that would apply across all the instances of the class

Instance: These are like Objects, however, let's think about it in these terms: A blueprint
for a car design is the class description, all the cars manufactured from that blueprint are
objects of that class. Your car that has been made from that blueprint is an instance of that
class.

Now that we have covered these keywords, let's jump into the four principles of object-
oriented-programming: Encapsulation, Abstraction, Inheritance, and Polymorphism.

- The 4 Pillars of Object Oriented Programming

- 1. Encapsulation

     Encapsulation is accomplished when each object maintains a private state, inside a class.
     Other objects cannot access this state directly, instead, they can only invoke a list of 
     public functions. The object manages its own state via these functions and no other class
     can alter it unless explicity allowed. In order to communicate with the object, you will 
     need to utilize the methods provided. One way to think of encapsulation is by using the 
     example of people and their dogs. If we want to apply encapsulation, we do so by encapsulating
     all dog logic into a Dog class. The 'state' of the dog is in the private variables playful,
     hungry, and energy and each of these variables has their respective fields.

     There is also a private method: bark(). The dog class can call this whenever it wants, and the 



*/