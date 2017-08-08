import { combineReducers } from 'redux'
import userReducer from './components/user/user-reducer'
import counterReducer from './components/counter/counter-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer
})

export default rootReducer