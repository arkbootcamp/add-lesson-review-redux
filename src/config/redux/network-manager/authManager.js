import axios from '../../axios/axios'
import { loginError, loginPending, loginSuccess } from '../actions/auth'

export const login = (credential) => (dispatch)=>{
    return new Promise((resolve, reject)=>{
        dispatch(loginPending())
        axios.post('/users/login', credential)
        .then((res)=> {
            dispatch(loginSuccess(res.data.data))
            localStorage.setItem('token', res.data.data.token)
            resolve(res.data.data)
        })
        .catch((err) => {
            dispatch(loginError(err.response.data))
            reject(err)
        })
    }) 
   
}