class Employee {
  constructor(name, age, address, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.address = address;
  }

   displayData() {
    console.log(
      `Name : ${this.name} Age : ${this.age} Address : ${this.address} salary : ${this.salary} skills : ${this.skills}`,
    );
  }
}

class Frontend extends Employee {
  constructor(skills, ...arr) {
     super(...arr);
     this.skills = skills
  }

}

class Backend extends Employee {

   constructor(skills, ...arr) {
     super(...arr);
     this.skills = skills
  }
}

const fc = new Frontend(["Node","Express"], "santosh" ,23,"brt-5",0.00);
fc.displayData()


