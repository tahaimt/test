import * as TYPES from './types';
import { errorHandler } from '../';

export function getPrimeNumbers(number){
  return (dispatch) => {
    dispatch({ type: TYPES.START_GET_PRIME_LT_NUMBER_REQUEST, request: number });
    return fetch('http://localhost:8080/api/primes/median/get?number=' + number)
    .then(resp => resp.json())
    .then(response => { 
      if (!response || (response && response.errorMessage)) {
        throw response.errorMessage
      }
      dispatch({ type: TYPES.GET_PRIME_LT_NUMBER, response }) 
    })
    .catch(error => {
      errorHandler(error);
      dispatch({ type: TYPES.GET_PRIME_LT_NUMBER_ERROR, error: error.message || error });
    });
  }
}

export function reset() {
  return (dispatch) => {
    dispatch({type: TYPES.CLEAR_PRIME_LT_NUMBER_RESPONSE})
  }
}