import * as type from '../actions/types'

const initialState = {
  count: 0,
  isIncrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    default:
      return state
  }
}
