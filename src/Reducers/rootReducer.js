import SearchReducer from './SearchReducer'
import { combineReducers } from "redux";

export default combineReducers({
    searchResults: SearchReducer
})