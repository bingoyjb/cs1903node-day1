var obj = {
  name: 'fly',
  time: '2018'
}

// 参数1 是要代理的对象，参数2 代理设置  obj  
var proxy = new Proxy(obj, {
  get(target, key) {
    return target[key].replace('2018', '2019')
  },
  set(target, key, val) {
    if (key === 'name') {
      // 满足条件返回修改后的值  
      return target[key] = val
    } else {
      // 不满足返回原来的值  
      return target[key]
    }
  }
})

// console.log(obj.time)
// console.log(proxy.time)

// 修改name 值  自动的触发 set函数 
proxy.name = 'ssr'
proxy.time = '2020'

console.log(proxy.name)
console.log(proxy.time)

// 使用代理的目的是保护原来的数据   

