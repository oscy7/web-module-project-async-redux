import axios from 'axios';
//STEP 7: MAKE ACTIONS

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

//STEP 8: MAKE FUNCTION FOR API CALL 
export const getCharacters = () => (dispatch) =>{
    dispatch({ type: LOADING })
    axios.get('https://rickandmortyapi.com/api/character')
        .then( res => {
            console.log(res)
            //STEP 10: dispatch the results!
            dispatch({ type: SUCCESS, payload: res.data})
        })
        .catch( err => {
            dispatch({type: ERROR, payload: { err }})
        })
}

//STEP 12: make change page actions

