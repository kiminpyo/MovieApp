import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
} from '../_actions/types';

export default function (state ={}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
            
            break;
        
            case REGISTER_USER:
            return{...state, register: action.payload}
            
            break;

            case AUTH_USER:
            return{...state, userData: action.payload}
           
            break;
            case LOGOUT_USER:
            return{...state}
        
        
        default:
            return state;
        
    }
} 
//... = spread operator
