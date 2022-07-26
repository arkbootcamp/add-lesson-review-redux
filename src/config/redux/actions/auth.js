
import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from '../string'

export const loginPending = ()=>({type: LOGIN_PENDING})
export  const loginError = (payload)=>({type: LOGIN_ERROR, payload})
export const loginSuccess = (payload)=>({type: LOGIN_SUCCESS, payload})





