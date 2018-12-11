import { combineReducers } from 'redux'

import dash from '../Dashboard/reducer'

export default combineReducers({
    mainMenu: (state, action) => ({ ...state }),
    dash
})