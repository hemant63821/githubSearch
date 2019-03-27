import axios from 'axios'
import { FETCH_RESULTS } from '../Constant'


export const fetchSearchResults = (searchKey) => dispatch => {
    axios.get('https://api.github.com/search/repositories?q=' + searchKey)
        .then(data => {
            if (data.status == 200) {
                dispatch({
                    type: FETCH_RESULTS,
                    payload: data.data
                })
            }
        })
        .catch(function (error) {

        })
}