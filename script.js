 // function constructor
/* var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
  };
Person.prototype.lastname = "Smith";

var john = new Person ("John", 1990, "teacher");

var jack = new Person("Jack", 1969, "Designer");
var julie = new Person("Julie", 1980, "web developer");

john.calculateAge();
jack.calculateAge();
julie.calculateAge();

console.log(john.lastname);
console.log(jack.lastname);
console.log(julie.lastname);

var People = function(name, hobby, workHours){
  this.name = name;
  this.hobby = hobby;
  this.workHours = workHours;
}
 People.prototype.dream = "happy future";
 People.prototype.bday= function(bday, year){
   this.bday = bday;
   this.year = 2018- bday;

 }

var april = new People("Nisan", "golf", "Web developer");
var may = new People("May", "swimming", "developer");
var june = new People("June", "dogs", "Dog Teacher");
console.log(april.dream);

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


//Primitives vs Objects

//Primitives
var a = 23;
var b= a;
a = 30;
console.log(a);
console.log(b);

//Objects
var obj1 ={
  name: "John",
  age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj3 = {
  name: "jones",
  city: "Lisbon"
}

function change(a, b){
  a = 30;
  b.city = "san francisco"
}

change(age, obj3);
console.log(age);
console.log(obj3.city);


// passing a function as argument

var years = [1990, 1980, 1965, 1969, 2002];

function arrayCalc(arr, fn){
  var years2 = [];
  for(var i = 0; i< arr.length; i++){
    years2.push(fn(arr[i]));
  }
  return years2;
}


function calculateAge(el){
  return 2018 - el;
}

function isFullAge(el){
  return el >= 18;
}

function maxHeartRate(el){
  if(el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 * el));
  }else{
    return - 1;
  }

}


// function returning functions


function interviewQuestions(job){
  if(job === "designer"){
    return function(name){
      console.log(name + ", can you please explain what UX design is?");
    }
  }else if(job === "teacher"){
      return function(name){
        console.log("what subject do you teach, " + name + "?");
      }
    }else{
      return function(name){
      console.log("hello" + name + "what do you do?");
     }
    }
}

var teacherquestion = interviewQuestions("teacher");
//second way

interviewQuestions("designer")("Mark");
interviewQuestions("teacher")("Linda");



var ages = arrayCalc(years, calculateAge);
var ages1 = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(teacherquestion("john"));

console.log(ages);
console.log(ages1);
console.log(rates);


// IIFE

(function (){
  var score = Math.random() * 10;
  console.log(score >= 5 );
})();

(function (goodLuck){
  var score = Math.random() * 10;
  console.log(score >= 5 -  goodLuck);
})(5);

// lecture: Closures

function retirment(retirementAge){
  var a = " year left until retirement."

  return function(yearOfBirth){
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a)
  }
}

retirment(64)(1980);
*/

// Bind, call and apply
var july = {
  name: "July",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay){
    if(style === "formal"){
      console.log("Good" + timeOfDay + ", ladies and gentelments. I\'m " + this.name + ", I\'m a " + this.job + "and I\'m " + this.age + "years old.");
    }else if(style === "informal"){
      console.log("Good " + timeOfDay + " I\'m " + this.name + " and I'm a " + this.job + ".");
    }
  }
}

var emily = {
  name: "Emily",
  age: 34,
  job: "developer"
}
var fonda = {
  name: "Fonda",
  age: 34,
  job: "developer"
}
var april = {
  name: "April",
  age: 34,
  job: "developer"
}

july.presentation("formal", "morning");
july.presentation.call(emily, "informal", "afternoon");

// other method to use pre-set code

var julyFriendly = july.presentation.bind(fonda, "informal");
var julyFriendly1 = july.presentation.bind(april, "informal");
var julyFriendly2 = july.presentation.bind(emily, "informal");

julyFriendly("morning");
julyFriendly1("night");
julyFriendly2("night");




var years = [1990, 1980, 1965, 1969, 2002];

function arrayCalc(arr, fn){
  var years2 = [];
  for(var i = 0; i < arr.length; i++){
    years2.push(fn(arr[i]));
  }
  return years2;
}


function calculateAge(el){
  return 2018 - el;
}

function isFullAge(limit, el){
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


//bind call apply
function Question(question, answer, correctAnswer){
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion=
    function(){
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++){
        console.log(i + ":" + this.answer[i]);

    }
}

Question.prototype.checkAnswer =
    function (ans, callback){
    var sc ;

    if (ans === this.correctAnswer){
        console.log("Correct answer!");
        sc = callback(true);
    }else{
        console.log("Wrong answer try again.");
        sc = callback(false);
    }
    this.displayScore(sc);
};

Question.prototype.displayScore = function(score){
    console.log("Your current score is " + score);
    console.log('-------------------------');
}

var question1 = new Question("is JS best programming language?",
                            ["yes", "No"],0 );
var question2 = new Question ("who is teaching this course?", ["john", "Michael", "April"], 0);

var question3 = new Question("what do you do for fun?", ["hiking", "play with dogs", "study"], 2);

var questions =[question1, question2, question3];

function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
         return sc;
    }

}
var keepScore = score();


function nextQuestion(){

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();


var answer = prompt("Please select the correct answer. To exit please type in exit");


    if(answer !== "exit"){
        questions[n].checkAnswer(parseInt(answer), keepScore);
          nextQuestion();
    }

};


 nextQuestion();
