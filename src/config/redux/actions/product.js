import axios from "../../axios/axios"
import { GET_PRODUCT_DETAIL_ERROR, GET_PRODUCT_DETAIL_PENDING, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_SUCCESS } from "../string"

export const getProduct = ()=>async(dispatch)=>{
    try {
        dispatch({type: GET_PRODUCT_PENDING})
        const result = await axios.get('/products')
        dispatch({type: GET_PRODUCT_SUCCESS, payload: result.data.data})
    } catch (error) {
        dispatch({type: GET_PRODUCT_ERROR, payload: error.response.data})
    }
}

export const getDetailProduct =(id)=>async (dispatch)=>{
    try {
        dispatch({type: GET_PRODUCT_DETAIL_PENDING})
        const {data:resData} = await axios.get(`/products/${id}`)
        dispatch({type: GET_PRODUCT_DETAIL_SUCCESS, payload: resData.data})
        return resData.data
    } catch (error) {
        dispatch({type: GET_PRODUCT_DETAIL_ERROR, payload: error.response.data})
    }
}

export const updateProduct = (id, data) =>  dispatch => {
    return new Promise(async(resolve, reject)=>{
        try {
            dispatch({type: UPDATE_PRODUCT_PENDING})
            const {data:resData} = await axios.put(`/products/${id}`, data)
            dispatch({type: UPDATE_PRODUCT_SUCCESS})
            resolve(resData.data)
        } catch (error) {
            dispatch({type: UPDATE_PRODUCT_ERROR, payload: error.response.data})
            reject(error.response.data)
        }
    })
  
}