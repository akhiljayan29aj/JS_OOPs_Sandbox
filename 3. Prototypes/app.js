// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob){  
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate Age
Person.prototype.calculateAge =function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const akhil = new Person('Akhil','Jayan','11/21/1999');
const arjun = new Person('Arjun','Jayan','11/25/2003');
const mary = new Person('Mary','Johnson','06/12/1990');

console.log(akhil);

console.log(arjun.calculateAge());
console.log(akhil.getFullName());

console.log(mary.getFullName());

mary.getsMarried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));