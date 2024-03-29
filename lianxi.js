//练习解构方式
//对象的解构
// var result={
//     uname:"急急急",
//     upwd:"123456"
// }
// var{uname}=result
// console.log(uname)

//要在当下的根目录打开终端
//就是个取值作用
//对象加数组的解构
// var result={
//     data:{
//         uname:"急急急",
//         upwd:"123456",
//         upwd2:[1,2,3,4]
//     }
// }
// var {data:{uname,upwd,upwd2}}=result
// console.log(uname,upwd,upwd2)

//数组的解构
// var data=[1,2,3,4]
// var[a]=data
// console.log(a)


//es6  遍历
// function show(...res) {
//     var sum = 0

//     res.forEach((el) => {
//         sum += el
//     })
//     console.log(sum)
// }
// var arr = [1, 2, 3, 4]
// show(...arr)


// var arr = [{
//         id: 1,
//         uname: "宝马"
//     },
//     {
//         id: 2,
//         uname: "奔驰"
//     },
//     {
//         id: 3,
//         uname: "宝俊"
//     }
// ]
// //封装成函数就可以使得数据变得更加的灵活
// function a(uname) {
//     var newarr = []
//     arr.forEach((el) => {
//         if (el.uname.includes(uname)) {
//             newarr.push(el)
//         }
//     })
//     return newarr

// }
// console.log(a("宝"))


//函数的简单写法
//先是普通写法1
// function w(x,y){
//     return x+y
// }
// console.log(w(2,2))

//先是普通写法2
// var w=(x,y)=>{
//     return x+y
// }
// console.log(w(2,2))

//再是简便的
//  var w=(x,y)=>x+y
//  console.log(w(2,2))

 //箭头函数的可以改变指向  //没有做完
var obj={
    name:"123",
    show(){
        console.log(this)//指的是obj
        setInterval(function(){
            console.log(this)
            //用function定时器里面的this指的不是obj是window
        })
        setInterval(()=>{
            console.log(this)
            //在定时器里面用箭头函数的this指的是obj
        })
    }
}




 //用for of来遍历数组
//  var arr=[1,2,3,4]
//  for(var [index,el] of Object.entries(arr)){
//     console.log(index,el)
//  }
//  //用for of来遍历对象
//  var obj={
//      name:"hhh",
//      age:18
//  }
//  for(var [key,value] of Object.entries(obj)){
//     console.log(key,value)
//  }

 //拷贝  把obj1把obj的拷贝下来
//  var obj={
//      name:123
//  }
//  var obj1=Object.assign({age:13},obj)
//  console.log(obj1)

//保护原数据  再不修改原数据的情况下修改值 
// var obj={
//     uname:"hhh",
//     age:"18"
// }
// var proxy=new Proxy(obj,{
//     get(target,key){
//         return target[key].replace('18','99')
//     },
//     set(target,key,val){
//         if(key==="uname"){
//            return target[key]=val
//         }else{
//             return target[key]

//         }
//     }
// })
// proxy.uname="jjj"

// console.log(proxy.age)//jjj
// console.log(proxy.uname)//99

//官方方式遍历
// var a=[1,2,3,4]
// var b=[5,6,7,8]
// var newarr=a.concat(b)
// // console.log(newarr)
// for(var el of newarr.entries()){
//     console.log(el)
// }

// var obj={
//     start:[1,2,3,4],
//     end:[5,6,7,8]
// }
// var newobj=obj.start.concat(obj.end)
// // console.log(newobj)
// for(var [key,value] of newobj.entries()){
//     console.log(key,value)
// }

//自己定义接口 拼接遍历  //没写完
var obj={
    start:[1,2,3,4],
    end:[5,6,7,8],
    [Symbol.iterator]:function(){
        let self=this
        let arr=self.start.concat(self.end)
        let index=0
        let len=arr.length
        return{
            next(){
                if(index<len){
                    return{
                        value:arr[index++],
                        done:false
                    }
                }else{
                    return{
                        value:arr[index++],
                        done:true
                    }
                }
            }
        }
    }
}
for(let i of obj){
    console.log(i)
}
//ES5  组合继承
// function Person(name,age){
//     //定义私有属性
//     this.name=name
//     this.age=age
// }

// Person.prototype.say=function(){
//     console.log(this.name,this.age)//调用完之后就可以打印出来了
// }

// function ZS(name,age){
//     //通过对象冒充的方式把this指向改成父类
//     Person.call(this,name,age)
// }
// //子类原型复制给父类的实例化
// ZS.prototype=new Person()
// var zs=new ZS("zs",18)
// // console.log(zs.name)
// // zs.say()


//Es5的组合继承
// function Person(name,age){
//     this.name1=name
//     this.age1=age
// }
// var zazahui=new Person("yjb","8")
// // console.log(zazahui)//前面两个一定是写在一起的缺一不可
// Person.prototype.say=function(){//封装一个方法全部都可以用
//     console.log(this.name1,this.age1)
// }
// // zazahui.say()
// //继承
// function Zazahui(name,age,job="人才"){
//     Person.call(this,name,age),//继承的是person里面的 this.name1=name this.age1=age 声明变量用的
//     this.job=job
// }
// Zazahui.prototype=new Person()//继承Person的方法
// var yjb=new Zazahui("周晖","88")
// yjb.say()
// // console.log(yjb)


//ES6 组合继承
// class Person{
//     constructor(name,age){
//         this.name=name,//声明变量
//         this.age=age
//     }
//     show(){
//         console.log(this.name,this.age,this.job)//方法
//     }
// }
// let zazahui=new Person("周晖","88")
// // zazahui.show()
// //继承
// class zazahui1 extends Person{
//     constructor(name,age,job){
//         super(name,age)//继承person里的this.name=name this.age=age
//         this.job=job
//     }
// }
// let a=new zazahui1("周晖","renzai","程序员")//传参进去
// a.show()
