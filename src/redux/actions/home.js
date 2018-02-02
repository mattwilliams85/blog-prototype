import * as type from './types'
import 'whatwg-fetch'

export const fetchPosts = () => {
  return dispatch => {
    const url = 'http://jsonstub.com/posts'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'plan/text',
        'JsonStub-User-Key': 'd7d9a7e3-55b6-42bb-aa7e-c17ba3e29df7',
        'JsonStub-Project-Key': 'a42d7b66-bd48-4bd4-8a82-5e5fb51ff158'
      })
    })

    fetch(request).then(response => response.json())
      .then(body => dispatch({
        type: type.FETCH_POSTS_SUCCESS,
        payload: body.data
      }))
      .catch(error => Error('Error:', error))
  }
}

export const incrementAsync = () => {
  return dispatch => {
    // dispatch({
    //   type: type.INCREMENT_REQUESTED
    // })

    return setTimeout(() => {
      dispatch({
        type: type.INCREMENT
      })
    }, 3000)
  }
}
