import { FETCH_RESULTS } from '../Constant'


const intialState = {
    allResults: []
}

export default function (state = intialState, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return {
                ...state,
                allResults: []
            }

        default:
            return state;
    }
}