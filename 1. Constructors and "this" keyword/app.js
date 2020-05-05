// Person constructor
function Person(name, dob){  // A contructor should start with a CAP letter
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // this keyword refers to the current instance of the object
}

// "this" in the global scope pertain to the window object 

// const akhil = new Person('Akhil', 20);
// const arjun = new Person('Arjun', 16);

// console.log(arjun);

const akhil = new Person('Akhil', '11/21/1999');
console.log(akhil.calculateAge());