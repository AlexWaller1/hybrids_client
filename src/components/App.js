import React from 'react';

import Router from './Router'

import Header from './Header'

import HybridsContainer from './HybridsContainer'
import NavLinks from './NavLinks';
import RobotsContainer from './RobotsContainer';
import MinimartsContainer from './MinimartsContainer';
import SkateparksContainer from './SkateparksContainer';
import CitiesContainer from './CitiesContainer';
import MotorhomesContainer from './MotorhomesContainer';

const App = () => {
    return (
        <div>
          <Header />
          <NavLinks />
          <HybridsContainer />
          <RobotsContainer />
          <MinimartsContainer />
          <SkateparksContainer />
          <CitiesContainer />
          <MotorhomesContainer />
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
     other classes can not tell the dog when to bark. There are also public methods such as sleep(),
     play(), and eat() that are available to other classes. Each of these functions modifies the
     internal state of the Dog class and may invoke bark(), when this happens the private state
     and public methods are bonded.

     - 2. Abstracton

          Abstraction is an extension of encapsulation. It is the process of selecting data
          from a larger pool to show only the relevant details to the object. uppose you want
          to create a dating application and you are asked to collect all the information
          about your users. You might reeive the following data from your user: Full name, 
          address, phone number, favorite food, etc. This amount of data is great, however, not
          all of it is required to create a dating profile. You only need to select the 
          information that is pertinent to our dating application from that pool. The process
          of fetching/removing/selecting the user information from a larger pool is referred to
          as Abstraction. One of the advantages of Abstraction is beng able to apply the same
          information you used for the dating application to other applications with little
          or no application.

     - 3. Inheritance
     
          Inheritance is the ability of one object to acquire some/all properties of another
          object. For example, a child inherits the traits of his/her parents. With inheritance
          , reusability is a major advantage. You can reuse the fields and methods of the existing
          class. In Java, there are various types of inheritances: single, multiple, multilevel,
          hierarchal, and hybrid. For example, Apple is a fruit so assume that we have a class
          fruit so assume that we have a class Fruit and a subclass of it named Apple. Our Apple
          acquires the properties of the Fruit class. Other classifications could be grape, pear
          , and mango, etc. Apple thesub-class acquires these properties from Fruit and has some
          unique properties, which are different from other sub-classes of Fruit such a red,
          round, depression at the top.

    - 4. Polymorphism

        Polymorphism gives us a way to use a class exactly like its parent so there is no
        confusion with mixing types. This being said, each child sub-class keeps its own
        functions/methods as they are. If we had a superclass called Mammal that has a method
        called mammalSound(). The sub-classes of Mammals could be Dogs, whales, elephants, and
        horses. Each of these would have their own iteration of a mammal sound (dog-barks'
        whale-clicks)

               

        



*/