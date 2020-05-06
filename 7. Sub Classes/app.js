class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return 500;
  }
}

const akhil = new Customer('Akhil','Jayan','0000009211','Gold');

console.log(akhil.greeting());
console.log(Customer.getMembershipCost());