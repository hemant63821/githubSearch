import { FETCH_RESULTS } from '../Constant'


const intialState = {
    count: '',
    allResults: []
}

export default function (state = intialState, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return {
                ...state,
                count: action.payload.total_count,
                allResults: action.payload.items
            }

        default:
            return state;
    }
}