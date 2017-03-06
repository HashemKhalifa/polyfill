// @flow

class Dog {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  bark() {
    return `wah wah, I am ${this.name}  Wooof, I am ${this.age} years old`
  }
}

export default Dog
