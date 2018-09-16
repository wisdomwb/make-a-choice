/**
 * action 类型
 */

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const ADD_FACTOR = 'ADD_FACTOR'
export const REDUCE_FACTOR = 'REDUCE_FACTOR'

/*
* action 创建函数
*/

let nextFactorId = 0
export const addFactor = text => ({
  type: ADD_FACTOR,
  id: nextFactorId,
  text
})

export const reduceFactor = text => ({
  type: REDUCE_FACTOR,
  id: nextFactorId,
  text
})

export const saveQuestion = text => ({
  type: SAVE_QUESTION,
  text
})