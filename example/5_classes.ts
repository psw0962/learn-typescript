// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const hulk = new Person('Banner', 33);

// ES6 + 타입스크립트
class PersonTs {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const capt = new Person('Steve', 100);