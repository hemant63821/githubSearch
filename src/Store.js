import { createStore, compose } from "redux";
import rootReducer from './Reducers/rootReducer'

let initState = {}

const Store = createStore(
    rootReducer,
    initState,
    compose(
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default Store;