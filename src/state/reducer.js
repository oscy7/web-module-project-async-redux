//STEP 11:IMPORT THE ACTIONS TO REDUCER!
import {ERROR, SUCCESS, LOADING} from './actions'

// STEP 1:
const initialState = {
    loading: false,
    error: '',
    results: [],
    info: []
}

//STEP 2: AFTER THIS STEP CONNECT THIS TO INDEX FILE
export const reducer = (state = initialState, action) => {
    //a) give it a switch which watches action.type
    switch(action.type){
        //STEP 12: STEP UP ERROR, SUCCESS, LOADING CASES
        case LOADING: 
        return {
            ...state,
            loading: true
        }
        case ERROR: 
        return {
            ...state,
            loading: false,
            error: action.payload
        }
        case SUCCESS: 
        return {
            ...state,
            loading: false,
            //note the payload is whatever is in console.log(res.data) info = info, results = results.
            info: action.payload.info,
            results: action.payload.results
        }
        default: 
        return state;
    }
}
