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