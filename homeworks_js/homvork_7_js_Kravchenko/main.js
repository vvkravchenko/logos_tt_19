// 1
let person = new Object();
person.firstName = 'Ivan';
person.secondName = 'Ivanov';
person.showData = function() {
    console.log(`firstName - ${this.firstName}, secondName - ${this.secondName}`);
}

let newPerson = Object.assign({}, person);
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();

// 2
let myMath = new Object();
myMath.a = 5;
myMath.b = 2;
myMath.sum = function (){
    console.log(`sum ${this.a} & ${this.b} = ${this.a + this.b}`);
}
myMath.multiplication = function(){
    console.log(`multiplication ${this.a} & ${this.b} = ${this.a * this.b}`);
}
myMath.division = function(){
    console.log(`division ${this.a} & ${this.b} = ${this.a / this.b}`);
}
myMath.subtraction = function(){
    console.log(`subtraction ${this.a} & ${this.b} = ${this.a - this.b}`);
}
myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();
