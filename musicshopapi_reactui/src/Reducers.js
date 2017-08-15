import { combineReducers } from 'redux'
import userReducer from './reducers/user-reducer'
import counterReducer from './reducers/counter-reducer'
import loginReducer from './reducers/login-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
    login: loginReducer
})

export default rootReducer