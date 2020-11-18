import * as SessionApiUtils from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const removeCurrentUser = () => {
  return {type: REMOVE_CURRENT_USER}
}

export const receiveSessionErrors = errors => {
  return {type: RECEIVE_SESSION_ERRORS,
  errors}
}

export const logIn = user => dispatch => {
  return SessionApiUtils.logIn(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  ) 
}

export const logOut = () => dispatch => {
  return SessionApiUtils.logOut().then(
    () => dispatch(removeCurrentUser())
  )
}

export const signUp = user => dispatch => {
  return SessionApiUtils.createUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
}

