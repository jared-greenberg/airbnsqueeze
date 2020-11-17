import * as SessionApiUtils from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';


export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const removeCurrentUser = () => {
 debugger
  return {type: REMOVE_CURRENT_USER}
}

export const logIn = user => dispatch => {
  return SessionApiUtils.logIn(user).then(
    user => dispatch(receiveCurrentUser(user))
  ) 
}

export const logOut = () => dispatch => {
  return SessionApiUtils.logOut().then(
    () => dispatch(removeCurrentUser())
  )
}

export const signUp = user => dispatch => {
  return SessionApiUtils.createUser(user).then(
    user => dispatch(receiveCurrentUser(user))
  )
}

