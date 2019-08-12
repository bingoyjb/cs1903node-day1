
// var str = 'fly'

// function show(s) {    // 在函数定义的时候使用的参数为 形参 可以是任意的变量
//   console.log(s)
// }

// show(str)            // 在函数调用的时候使用的参数为  实参

// var obj = {
//   name: 'fly',
//   age: 18
// }

// function show(s) {    // 在函数定义的时候使用的参数为 形参 可以是任意的变量
//   console.log(s.name, s.age)
// }

// show(obj)            // 在函数调用的时候使用的参数为  实参


// 定义的函数
// function foo(s) {    // s 为 foo 的形参
//   // console.log('foo')
//   console.log(s)
// }

// 定义的另一个函数
// function show(callback) {    // 在函数定义的时候使用的参数为 形参 可以是任意的变量
//   // console.log(s.name, s.age)
//   var a = 1
//   callback(a)  //  a 为foo函数的实参

// }

// // show(foo)            // 在函数调用的时候使用的参数为  实参
// show(function(s){
//   console.log(s)
// })


// function getData(callback) {

//   setTimeout(function () {
//     var a = 1
//     callback(a)
//   }, 3000)
// }

// getData(function (s) {
//   console.log(s)
// })


// 使用场景   

// ajax请求 不能立即拿到返回的值  


// var number = 1

// function show() {
//   return console.log(number++)
// }

// show()
// show()



// 函数执行完毕之后会销毁掉  局部变量 
// function show() {
//   var number = 1
//   return function () {
//     return console.log(number++)
//   }
// }

// // show()
// // show()

// var fn = show()  

// fn()
// fn()

// 变量提升  

// var a = 1

// function show() {
//   console.log(a, b, c)
//   var a
//   var b = 2
//   var c = 3
// }

// show()



// {
//   const a = 1
// }

// console.log(a)

// for (let i = 0; i < 5; i++){

// }

// console.log(i)


// var arr = [1, 2, 3, 4]

// console.log(arr[1], arr[3])

// 语法    var [] = arr   

// var [a, b, c, d] = arr
// var [a, , , d] = arr

// console.log(a)

// console.log(d)


// 参数的默认值   

// string 
// var str = ''

// // number  

// var num = 0

// // arr 

// var arr = []

// // obj  

// var obj = {}

// var timer = null

// // boolean

// var flag = true  // 只能是true  或者 false  


// const obj = {
//   name: 'fly',
//   age: 18
// }

// var name = obj.name
// var age = obj.age

// 解构的方式   

// let { name: newName } = obj

// console.log(name, age)

// console.log(newName)


// var result = {
//   data: {
//     status: 0,
//     message: [1, 2, 3, 4]
//   }
// }

// // console.log(result.data.message)

// var { data: { message, status } } = result

// console.log(status, message)



// ********* 参数默认值 ********

// es5 参数默认值
// function show(a) {
//   let b = a || 1
//   console.log(b)
// }

// show(2)


// es6 参数默认值

// function show(a = 1) {

//   console.log(a)
// }

// show(2)


//  解构赋值 + 参数默认值  
// function show({ name, age, job = 'web前端' }) {
//   // console.log(obj.name, obj.age)
//   console.log(name, age, job)
// }

// show({
//   name: 'fly',
//   age: 18,
//   job: 'javascript'
// })


// **************** rest 参数 和 扩展运算符  ********************

// es5   
// function show() {
//   // console.log(arguments.length)
//   // console.log(arguments[0])
//   let sum = 0
//   // for (let i = 0; i < arguments.length; i++) {
//   //   sum += arguments[i]
//   // }

//   arguments.forEach(function (item) {
//     sum += item
//   })
//   console.log(sum)
// }


// let arr = [1, 2, 3, 4]
// show(arr[0], arr[3])


// es6  
// function show(...rest) {  // 在函数定义的时候 使用的 ...obj 叫做rest参数 
//   // console.log(rest)
//   let sum = 0
//   // for (let i = 0; i < rest.length; i++) {
//   //   sum += rest[i]
//   // }

//   rest.forEach(function (item, index) {
//     sum += item
//   })
//   console.log(sum)
// }


// let arr = [1, 2, 3, 4]
// show(...arr)     // 在函数调用的时候 使用 ...obj 叫做 扩展运算符    show(...arr)     ===   show(1, 2, 3, 4)
// show(1, 2, 3, 4)


// ****************** 字符串拓展 ***********************


// `` 模板字符串  

// var arr = [
//   {
//     id: 0,
//     name: 'fly'
//   },
//   {
//     id: 1,
//     name: 'sky'
//   },
//   {
//     id: 2,
//     name: 'ide'
//   },
// ]


// es5 

// var html = ''

// arr.forEach(function (item) {
//   // es5 
//   // html += '<li>' +
//   //   '<p>' + item.id + '</p>' +
//   //   '<p>' + item.name + '</p>' +
//   //   '</li>'

//   // es6  ``

//   html += `
//     <li>
//       <p>${item.id}</p>
//       <p>${item.name}</p>
//     </li>
//   `
// })

// console.log(html)


// $('ul').html(html)


//  includes    

// var str = '哈哈fly嘻嘻'

// console.log(str.indexOf('fsf'))
// console.log(str.includes('ss'))



// var arr = [
//   {
//     id: 0,
//     name: '宝马'
//   },
//   {
//     id: 1,
//     name: '宝骏'
//   },
//   {
//     id: 2,
//     name: '路虎'
//   }
// ]

// function search(keyword) {
//   var newArr = []

//   arr.forEach(function (item) {
//     // if (item.name.indexOf(keyword) != -1) {
//     //   newArr.push(item)
//     // }
//     if (item.name.includes(keyword)) newArr.push(item)
//   })


//   return newArr
// }


// const keyword =  document.querySelector('[name="search"]').value

// console.log(search('宝'))


// var str = 'fsjlfjslfjf'

// // var flag = str.indexOf('fs')
// var start = str.startsWith('fs')  // 查找首是否以 xxx 开头
// var end = str.endsWith('j')       // 查找是否以 xxx 结尾 
// var inc = str.includes('fj')

// console.log(start)
// console.log(end)
// console.log(inc)


// var str = '1'

// length  添加完成之后的总长度为  
// string  以什么添加 
// console.log(str.padStart(2, 0))
// console.log(str.padEnd(2, 0))

// 010  

// console.log(str.padStart(2, 0).padEnd(3, 0))


//  声明式   

// show()
// function show() {
//   console.log(2)
// }

// 字面量的方式   

// show()
// var show = function () {
//   console.log(2)
// }

// es6 箭头函数 


// 最标准的写法 
// var show = (item) => {
//   return item
// }

// 最简化的写法 
// 当只有一个参数的时候  () 可以省略  
// 当函数体只有一行的时候 可以省略 return 和 {}
// var show = item => item


// console.log(show(2))

// 多个参数 

// var show = (x, y) => {
//   return x + y
// }

// 当有多个参数的时候  () 不可以省略  
// 当函数体只有一行的时候 可以省略 return 和 {}
// var show = (x, y) => x + y

// console.log(show(1, 2))


// var obj = {
//   name: 'fly',
//   show() {
//     // console.log(this)
//     // var seft = this
//     setTimeout(() => {
//       console.log(this)
//     }, 2000)
//   }
// }

// obj.show()

// ****** object ******  

// 简洁语法

// es5 

// var name = 'fly'
// var age = 18
// var show = function () {
//   console.log('show')
// }

// var obj = {
//   name: name,
//   age: age,
//   show: show
// }

// console.log(obj.age)
// obj.show()


// es6 

// key 和 value 一致的情况下 可以省略掉一个  
// var name = 'fly'
// var age = 18
// var obj = {
//   name,
//   age,
//   // es5
//   // show: function () {
//   //   console.log('show')
//   // }
//   show() {
//     console.log('show')
//   }
// }

// console.log(obj.age)
// obj.show()



// Object.assign   拷贝  对象合并  

// var obj = { name: 'fly' }

// var obj2 = Object.assign({ age: 18 }, obj)

// console.log(obj2)


// var obj1 = Symbol()

// obj1.name = 'fly'

// console.log(obj1)

// var a1 = Symbol.for('abc')

// var obj = {
//   abc: '123',
//   [a1]: ' 234'
// }

// console.log(obj)


// var a1 = Symbol()
// var a2 = Symbol()
// console.log(a1 === a2)

// var a3 = Symbol.for('abc')
// var a4 = Symbol.for('abc')
// console.log(a3 === a4)


// for        arr   

// for in     obj  

// for of  


// var arr = [1, 2, 3, 4]

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// var obj = {
//   name: 'fly',
//   age: 18
// }

// for (var key in obj) {
//   console.log(key + '-------' + obj[key])
// }

var arr = [1, 2, 3, 4]

// entries  把数组模拟成一个对象 数据就具备 key value  
for (let [index, item] of arr.entries()) {
  console.log(index, item)
}

for (let item of arr.keys()) {
  console.log(item)
}
for (let item of arr.values()) {
  console.log(item)
}

// 数组 for of 的另一种写法  
var arr = [1, 2, 3, 4]

for (let [index, item] of Object.entries(arr)) {
  console.log(index, item)
}

// 对象 for of 写法  
var obj = {
  name: 'fly',
  age: 18
}

for (let [key, value] of Object.entries(obj)) {
  console.log(key, value)
}



