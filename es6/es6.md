# es6 

## 1. 语法变化   

1. const let   

   具有块作用域    

   没有变量的提升  

   const定义的变量不能够重新赋值，初始化的时候一定要给值 

2. 解构赋值  

  let 初始值 = arr|| obj 

  ```js
    // arr 

    let [a,b,c] = [1,2,3]

    // obj  

    let {name,age} = {name:'fly',age: 18}

    // 修改名称  
    let {name:name123,age} = {name:'fly',age: 18}

    console.log(name123)

  ```
3. 参数默认值  
  
  ```js
    function show(a = 1){
      console.log(a)
    }

    show()

  ```

4. 解构赋值 + 参数默认值  

  ```js

    // 设置属性的默认值 
    function show({name,age=18}){
      console.log(name,age)
    }

    show({name:'fly'})
  ```

## 2. 字符串扩展  

1. 字符串模板   ``   

2. includes   

  ```js  

    var str = 'fly'
    var flag = str.indexOf('l')    // 返回下标 
    var flag = str.indexOf('r')    // 返回 -1  
    var flag = srt.includes('l')   // 找到返回true 否则 false  

  ```  

3. startWith 和  endWith  

  startWith 查询是否以 xxx  开头  

  endWith   查询是否以 xxx   结尾 


4. padStart(length,str) 和 padEnd(length,str)

  ```js

    参数1 length 拼接后的字符串的总长度
    参数2 str    以xxx 字符串拼接

    var str = '1' 

    console.log(str.padStart(2,0))   // 01  

    console.log(str.padEnd(2,0))     // 10 

  ```
  

## 3. 函数

1. rest参数 和 扩展运算符  

```js  

  // args 得到的是一个新的数组 
  function show(...args){  // 在函数定义的时候使用的 ...obj 叫做rest参数 

  }
  var arr = [1,2,3,4]
  show(...arr)    //  在函数调用的时候 使用 ...obj 叫做扩展运算符   show(...arr)  === show(1,2,3,4)
```

2. 箭头函数  

```js  

  标准写法  

  var show = (item) => {
    return item 
  }

  简化写法
  // 当只有一个参数的时候可以省略 ()   
  // 当方法体只有一行的时候 可以省略 {} return  
  var show = item => item 


  多个参数简化写法
  // 当只有多个参数的时候不可以省略 ()   
  // 当方法体只有一行的时候 可以省略 {} return  
  var show = （x,y） => x+y 

```

## 4. for of 变量数组和对象  

```js

var arr = [1,2,3,4]

for(var item of arr.entries()){
  console.log(item)
}


for(var item of arr.keys()){
  console.log(item)
}


for(var item of arr.values()){
  console.log(item)
}


// 遍历数组的另一种写法  推荐使用

for(var [index,item] of Object.entries(arr)){
  console.log(index,item)
}

var obj = {
  name: 'fly',
  age: 18
}

for(var [key,value] of Object.entries(obj)){
  console.log(key,value)
}


```

## 5. set 和 map  

```js

var setList = new Set()

//  添加
setList.add(0)
setList.add(1)
setList.add(2)
setList.add(2)

// 删除 
setList.delete(2)

// 清空  
setList.clear()



var map = new Map()  

// 添加

map.set('name','fly')

// 删除  
map.delete('name')

// 清空  
map.clear()  

```

## 6. proxy 

```js 
  var obj = {
    name: 'fly',
    ctime: '2018-12-12'
  }

  var proxy = new Proxy(obj,{
    // target 是原来的对象  key是 获取键  
    get(target,key){
      return target[key].repalce('2018','2019')
    },
    // target 是原来的对象  key是 获取键  val 修改的值 
    set(target,key,val){
      if(key == 'name'){
        return target[key] = val  
      }else {
        return target[key] 
      }
    }
  })

  proxy.time     //  2019-12-12

  proxy.name = 'ssr'  
  proxy.time = '2020'  

  console.log(proxy.name)  // ssr  
  console.log(proxy.time)  //  2019-12-12

```


## 7. 继承   

