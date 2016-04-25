//var prompt = require('prompt');

//prompt.start();

var Student = function (name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase) {
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.gpa = gpa;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase =catchPhrase;

	this.canStudentHaveFun = function (){
		
		if ((this.detentions < 10)  && (this.gpa >= 2.0)) {
			//console.log ("You can have fun");
			return true;
		} else {
			//console.log("You cannot have fun!")
			return false;

		}
	}
}



//prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
// 	var student = new Student (result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
// 	if (student.canStudentHaveFun()){
// 			console.log ("You can have fun");
// 	} else {
// 			console.log("You cannot have fun!")
// 	}
// 	console.log( "**********")
// 	 if (err){
// 	 	console.log(err);
// 	 }
// 	// return student;
// });

module.exports = Student;

// Inside student.js, make a constructor function called Student that creates a student object 

// with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and 

// a function called canStudentHaveFun that checks 
// if they have less than 10 detentions and above a 2 GPA. 
// 	If they do then console.log out to the terminal that the student can have fun.

// Prompt the user for a student's information, 
// make a new Student Object with it, 
// then invoke the canStudentHaveFun function.

//export the student constructor at the bottom of the file



