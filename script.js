// console.log("hello world");
// // function constructor
// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };
//
// var Person = function(name, yearOfBirth, job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//
// }
//
// Person.prototype.calculateAge = function(){
//     console.log(2018 - this.yearOfBirth);
//   };
// Person.prototype.lastname = "Smith";
//
// var john = new Person ("John", 1990, "teacher");
//
// var jack = new Person("Jack", 1969, "Designer");
// var julie = new Person("Julie", 1980, "web developer");
//
// john.calculateAge();
// jack.calculateAge();
// julie.calculateAge();
//
// console.log(john.lastname);
// console.log(jack.lastname);
// console.log(julie.lastname);
//
// var People = function(name, hobby, workHours){
//   this.name = name;
//   this.hobby = hobby;
//   this.workHours = workHours;
// }
//  People.prototype.dream = "happy future";
//  People.prototype.bday= function(bday, year){
//    this.bday = bday;
//    this.year = 2018- bday;
//
//  }
//
// var april = new People("Nisan", "golf", "Web developer");
// var may = new People("May", "swimming", "developer");
// var june = new People("June", "dogs", "Dog Teacher");
// console.log(april.dream);

//object.create

var personProto = {
  calculateAge: function(){
    console.log(2018 - this.yearOfBirth)
  }
};
var john = Object.create(personProto);
john.name = "John";
john.dateOfBirth = 1988;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: {value: "Jane"},
  yearOfBirth: {value: 1990},
  job: {value: "developer"}
});
