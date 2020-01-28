import Model from './model';
import * as TYPES from '../../actions/prime/types';

export default function reducer(state = Model, action){
  switch(action.type){
    case TYPES.GET_PRIME_LT_NUMBER:
      return {...state, response: action.response, isLoading: false, error: false, errorMessage: null };
    case TYPES.START_GET_PRIME_LT_NUMBER_REQUEST:
      return {...state, request: action.request, response: [], isLoading: true, error: false, errorMessage: null };
    case TYPES.GET_PRIME_LT_NUMBER_ERROR:
      return {...state, error: true, errorMessage: action.error, isLoading: false, response: [] };
    case TYPES.CLEAR_PRIME_LT_NUMBER_RESPONSE:
      return {...state, request: null, response: [], error: false, errorMessage: null, isLoading: false };
    default:
      return {...state, isLoading: false, error: false, errorMessage: null };
  }
}