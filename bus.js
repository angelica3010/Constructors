var prompt = require ('prompt');
var Student = require ('./student.js');


//question: do we put all the below items for this within the function or only string?
var Bus = function (studentsontheBus, driverName, color, gas, studentEntersBus, busChatter){
	this.studentsontheBus = [];
	this.driverName = "driverName";
	this.color = "color";
	this.gas =  gas;
	this.addstudentEntersBus = function (name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
			this.studentsontheBus.push(new studentsontheBus(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase));
		}

		function busChatter(){
			for ( var i =0, i < this.studentsontheBus.length, i++){
				if (this.studentsontheBus[i].canStudentHaveFun()==true){
				}
				console.log(this.studentsontheBus[i].catchphrase)
			}
			}
		}



module.exports = Bus;