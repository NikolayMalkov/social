
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import formstyle from './css/form.module.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
       console.log(data) 
       axios({
           method: 'post',
           withCredentials: true,
           url: 'https://social-network.samuraijs.com/api/1.0/auth/login',
           data: {
               email: data.email,
               password: data.password
           },
       })
       
    }
    
  
  
    return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <input defaultValue="" {...register("email", {required: true})} />

        <input defaultValue="" {...register("password", {required: true})} />
        
        
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    )
}

export default LoginForm;
