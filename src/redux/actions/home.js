import * as type from './types'

export const increment = () => {
  return dispatch => {
    dispatch({
      type: type.INCREMENT_REQUESTED
    })

    dispatch({
      type: type.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: type.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: type.INCREMENT
      })
    }, 3000)
  }
}
