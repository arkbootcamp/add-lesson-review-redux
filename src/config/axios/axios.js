import axios from "axios"; 

const instance = axios.create({
  baseURL : 'http://localhost:4000/v1',

});
instance.interceptors.request.use(async function(config){
    //anything you want to attach to the requests such as token 
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => {
    return Promise.reject(error)
})

export default instance;