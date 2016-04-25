//var prompt = require ('prompt');
var Student = require ('./student.js');


//question: do we put all the below items for this within the function or only string?
var Bus = function (studentsontheBus, driverName, color, gas, studentEntersBus, busChatter){
	this.studentsontheBus = [];
	this.driverName = "";
	this.color = "";
	this.gas =  "";
	this.addstudentEntersBus = function (name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
			this.studentsontheBus.push(new Student(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase));
			//console.log(this.studentsontheBus);

		}

	this.busChatter = function (){
		for ( var i =0; i < this.studentsontheBus.length; i++){
			if (this.studentsontheBus[i].canStudentHaveFun()==true){
			console.log(this.studentsontheBus[i].catchPhrase)
			}
		}
	}
}



module.exports = Bus;