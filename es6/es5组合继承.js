//  1. 继承属性 call apply  

//  2. 继承函数 


// es5中是没有类的概念  ，可以使用 原型 + 构造函数模拟 类 


// 构造函数里面的this 指向实例化的对象
function Person(name, age) {
  // 定义私有属性  
  this.name = name
  this.age = age
}

Person.prototype.say = function () {
  console.log(this.name, this.age)
}


function ZS(name, age) {
  //  通过对象冒充的方式 把 this的指向改为父类   
  Person.call(this, name, age)
}


// 子类的原型赋值给父类的实例化  
ZS.prototype = new Person()

const zs = new ZS('zs', 18)

console.log(zs.name)
zs.say()