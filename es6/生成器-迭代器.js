

// Generator  生成器  
// 生成一个数组 
// function m1() {
//   var arr = [];

//   for (let i = 0; i < 5; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// var rs = m1();
// console.log(rs);

// for (let i = 0; i < rs.length; i++) {
//   console.log(rs[i]);
// }

// function* make() {
//   for (let i = 0; i < 5; i++) {
//     yield i;
//   }
// }

// var getI = make();
// // console.log(getI)
// console.log(getI.next())
// console.log(getI.next())
// console.log(getI.next())
// console.log(getI.next())
// console.log(getI.next())
// console.log(getI.next())

// 自己定义的接口  看看就行 不要太在意

var obj = {
  start: [1, 2, 3, 4],
  end: [5, 6, 7, 8],
  [Symbol.iterator]: function () {
    let seft = this
    let arr = seft.start.concat(seft.end)
    let index = 0
    let len = arr.length
    return {
      next() {
        if (index < len) {
          return {
            value: arr[index++],
            done: false
          }
        } else {
          return {
            value: arr[index++],
            done: true
          }
        }
      }
    }
  }
}


for (let i of obj) {
  console.log(i)
}


// var obj = {
//   [Symbol.iterator]: function () {
//     return {
//       next() {
//         if () {
//           return {
//             value,
//             done
//           }
//         }
//       }
//     }
//   }
// }


// 使用官方现成的接口  建议使用  
var obj = {
  start: [1, 2, 3, 4],
  end: [5, 6, 7, 8]
}

var arr = obj.start.concat(obj.end)

// console.log(arr)

// arr.forEach(item => {
//   console.log(item)
// })

// for (let item of arr.entries()) {
//   console.log(item)
// }

for (let [key, value] of Object.entries(arr)) {
  console.log(key, value)
}