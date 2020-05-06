const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Johnson';
mary.age = 30;

console.log(mary);

mary.getsMarried('Smith');

console.log(mary.greeting());


const akhil = Object.create(personPrototypes, {
  firstName: {value: 'Akhil'},
  lastName: {value: 'Jayan'},
  age: {value: 20}
});

console.log(akhil);

console.log(akhil.greeting());