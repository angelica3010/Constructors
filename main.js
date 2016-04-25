var Bus = require ('./bus.js');
//in main.js make the bus object with the constructor function, and then add 20 students to it. 
//Then successfully all the busChatter property of the bus object.

var partyBus = new Bus();


partyBus.addstudentEntersBus("Student1", "female", "freshman", 2.0, 10, "yes", "Hola");
partyBus.addstudentEntersBus("Student2", "female", "freshman", 2.4, 1, "yes", "Sup");
partyBus.addstudentEntersBus("Student3", "female", "sophomore", 2.7, 9, "no", "Bonjour");
partyBus.addstudentEntersBus("Student4", "male", "senior", 3.0, 8, "yes", "What's Up");
partyBus.addstudentEntersBus("Student5", "female", "junior", 2.3, 3, "no", "Chemistry");
partyBus.addstudentEntersBus("Student6", "male", "senior", 3.1, 20, "no", "Physics");
partyBus.addstudentEntersBus("Student7", "male", "freshman", 2.7, 10, "yes", "California");
partyBus.addstudentEntersBus("Student8", "male", "junior", 3.9, 5, "yes", "Las Vegas");
partyBus.addstudentEntersBus("Student9", "female", "sophomore", 3.7, 9, "no", "Hawaii");
partyBus.addstudentEntersBus("Student10", "male", "senior", 2.5, 3, "yes", "Washington");
partyBus.addstudentEntersBus("Student11", "female", "junior", 3.7, 0, "yes", "Oregon");
partyBus.addstudentEntersBus("Student12", "male", "junior", 2.8, 2, "yes", "Quinoa");
partyBus.addstudentEntersBus("Student13", "female", "freshman", 1.7, 0, "no", "Trader Joes");
partyBus.addstudentEntersBus("Student14", "male", "freshman", 1.9, 1, "yes", "Carrots");
partyBus.addstudentEntersBus("Student15", "female", "senior", 3.8, 5, "no", "Cashews");
partyBus.addstudentEntersBus("Student16", "female", "freshman", 4.0, 0, "yes", "NYC");
partyBus.addstudentEntersBus("Student17", "male", "junior", 3.8, 2, "no", "Bon Voyage");
partyBus.addstudentEntersBus("Student19", "female", "senior", 3.7, 9, "no", "Adios");
partyBus.addstudentEntersBus("Student20", "male", "freshman", 1.0, 3, "yes", "Potatoes");

partyBus.busChatter()