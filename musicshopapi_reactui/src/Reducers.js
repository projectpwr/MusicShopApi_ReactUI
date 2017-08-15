import { combineReducers } from 'redux'
import userReducer from './reducers/user-reducer'
import counterReducer from './reducers/counter-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer
})

export default rootReducer