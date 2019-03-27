
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './Reducers/rootReducer'
import thunk from "redux-thunk"

let initState = {}
const middleware = [thunk];
const Store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default Store;