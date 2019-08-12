class Person {
  // 构造函数
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 原型上的方法 
  say() {
    console.log(this.name, this.age)
  }
}

// const person = new Person('fly', 18)
// console.log(person.name)
// person.say()


class ZS extends Person {
  constructor(name, age, job = "web前端") {
    // 相当于 es5 的对象冒充
    super(name, age)
    this.job = job
  }
}


const zs = new ZS('zs', 30)
console.log(zs.name)
console.log(zs.job)
zs.say() 