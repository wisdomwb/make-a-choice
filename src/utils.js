//是否为空
export function isEmpty(e) {
  if (e === undefined || e === '' || e === ' ' || e === null) {
    return true
  }
  return false
}

//转换为浮点数
export function getF(sF) {
  try {
    if (isNaN(sF) || isEmpty(sF)) {
      return 0
    }
    let f = parseFloat(sF, 10)
    if (isNaN(f)) {
      f = 0
    }
    return f
  } catch (e) {
  }
  return 0
}

export function FP1(value) {
  if (isNaN(value)) {
    return 0
  }
  return Math.round(getF(value) * 10) / 10
}

//保留小数点后1位（四舍五入）
export function getF1(sF) {
  return FP1(getF(sF))
}

//检测数据类型
// type({}) // "object"
// type([]) // "array"
// type(5) // "number"
// type('abc') // "string"
// type(null) // "null"
// type() // "undefined"
// type(/abcd/) // "regex"
// type(new Date()) // "date"
export function type(o) {
  let s = Object.prototype.toString.call(o)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}

//按照键值对寻找对象, isReturnIndex只在查询数组元素有用
export function findObj(data, key, value, isReturnIndex = false) {
  key = key.toString()
  let obj = null, num = null
  if (type(data) === 'array') {
    data.forEach((item, index) => {
      if (item[key] === value) {
        obj = item
        num = index
      }
    })
  } else if (type(data) === 'object') {
    for (let i in data) {
      if (data.hasOwnProperty(i)) {
        if (data[i][key] === value) {
          obj = data[i]
        }
      }
    }
  }
  return isReturnIndex ? num : obj
}