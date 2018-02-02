import * as type from '../actions/types'

const initialState = {
  count: 0,
  isIncrementing: false,
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
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
