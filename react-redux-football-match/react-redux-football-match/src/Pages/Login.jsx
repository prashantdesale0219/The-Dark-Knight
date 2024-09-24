import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Redux/Authentication/actionTypes";
import axios from "axios";

export const Login = () => {
  const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading,isError} = useSelector(store=>store.AuthReducer)

    const PostLoginData = (userData)=>{
        dispatch({type:LOGIN_REQUEST})
        axios.post('https://reqres.in/api/login',userData).then(res=>{
            const Token = res.data.token
            dispatch({type:LOGIN_SUCCESS,payload:Token})
            alert("login succes")
            
        }).catch(err=>{
            dispatch({type:LOGIN_FAILURE})
            console.log(err)
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const userData = {
            email,password
        }
        PostLoginData(userData)
    }
  return isLoading ? <h1>Loading...</h1>: isError ?<h1>SOmething went wrong</h1> : (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={(e)=>handleSubmit(e)}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
