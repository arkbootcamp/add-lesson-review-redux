import React, { useState } from "react";
// import styles from './login.module.css'
// import Button from '../../../components/base/button'
// import Input from '../../../components/base/input'
import { Input, Button } from "../../../components/base";
import axios from '../../../config/axios/axios'
import {login} from '../../../config/redux/network-manager/authManager'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {
  const {isLoading} = useSelector((state)=> state.auth)
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setCredential((current) => {
      return {
        ...current,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = async(e)=>{
    e.preventDefault()
   dispatch(login(credential))
   .then((res)=> navigate('/main'))
   .catch((err)=> alert('erro bro...'))
  }
  return (
    <div>
      <h4>page login {isLoading}</h4>
      <div>
        <form onSubmit={handleLogin}>
          <Input
            onChange={handleChange}
            id="emaill"
            label="Email :"
            placeholder="email"
            name="email"
            value={credential.email}
          />
          <Input
            onChange={handleChange}
            id="password"
            label="Password :"
            placeholder="*****"
            name="password"
            value={credential.password}
          />

          <Button title={`${isLoading ? 'loading': 'login'}`} />
        </form>
      </div>
    </div>
  );
};

export default Login;
