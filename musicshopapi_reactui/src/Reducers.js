import { combineReducers } from 'redux'
import userReducer from './reducers/user-reducer'
import counterReducer from './reducers/counter-reducer'
import loginReducer from './reducers/login-reducer'

const appReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  login: loginReducer,
})

const rootReducer = (state = {}, action) => {
  if(action.type === "USER_LOGOUT"){
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer