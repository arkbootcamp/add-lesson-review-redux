import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from "../string"

const initialState = {
    me: null,
    isLoading: false,
    error: null
}

const authReducer =(state = initialState, action)=>{
    switch (action.type) {
        case LOGIN_PENDING:
        return {
            ...state,
            isLoading: true,
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            isLoading: false,
            me: action.payload
        }
        case LOGIN_ERROR:
        return {
            ...state,
            isLoading: false,
           error: action.payload
        }
        default:
            return state
    }

}

export default authReducer