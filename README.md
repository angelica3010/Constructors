Week 11 Homework for Constructors
Introduction

This week's homework is VERY similar to exercises we've done in class. Take it as a chill week :-)
Steps

Make a student constructor function.

In a new folder

auto create a package.json file with npm init

use npm install prompt --save to install prompt

make a new node file called main.js

require prompt in it

make a new node file called student.js

Inside student.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.

Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.

export the student constructor at the bottom of the file

make a new node file called bus.js

inside the bus.js file, make a bus constructor function, that has the following properties:

studentsOnTheBus (array)

driverName (string)

color (string)

gas (integer)

studentEntersBus (function that adds a student to the studentsOnTheBus property)

busChatter (function that outputs the students' catch phrases if they can have fun one by one)
at the bottom of bus.js, export the constructor function

require the appropriate file(s) in the appropriate file(s).

in main.js make the bus object with the constructor function, and then add 20 students to it. Then successfully all the busChatter property of the bus object.

