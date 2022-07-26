import { GET_PRODUCT_DETAIL_ERROR, GET_PRODUCT_DETAIL_PENDING, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_SUCCESS } from "../string"

const initialState = {
    data: [],
    detail: null,
    pagination: {
    },
    isLoading: false,
    error: null
}
const productReducer =(state = initialState, action)=>{
    switch (action.type) {
        case GET_PRODUCT_PENDING:
        return {
            ...state,
            isLoading: true,
        }
        case GET_PRODUCT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.payload
        }
        case GET_PRODUCT_ERROR:
        return {
            ...state,
            isLoading: false,
           error: action.payload
        }
        case GET_PRODUCT_DETAIL_PENDING:
        return {
            ...state,
            isLoading: true,
        }
        case GET_PRODUCT_DETAIL_SUCCESS:
        return {
            ...state,
            isLoading: false,
            detail: action.payload
        }
        case GET_PRODUCT_DETAIL_ERROR:
        return {
            ...state,
            isLoading: false,
           error: action.payload
        }
        case UPDATE_PRODUCT_PENDING:
        return {
            ...state,
            isLoading: true,
        }
        case UPDATE_PRODUCT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            detail: action.payload
        }
        case UPDATE_PRODUCT_ERROR:
        return {
            ...state,
            isLoading: false,
           error: action.payload
        }
        // case INSERT_PRODUCT_PENDING:
        //     return {
        //         ...state,
        //         isLoading: true,
        //     }
        //     case INSERT_PRODUCT_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //     }
        //     case INSERT_PRODUCT_ERROR:
        //     return {
        //         ...state,
        //         isLoading: false,
        //        error: action.payload
        //     }
        default:
            return state
    }

}
export default productReducer