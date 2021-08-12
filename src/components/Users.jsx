import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react'; 
import { Redirect } from 'react-router';
 
const Users = () => {

    
   

    useEffect( () => 
        axios({
            method: 'get',
            url: 'https://social-network.samuraijs.com/api/1.0/users?count=10',
            headers: {
                'API-KEY': '279d1d16-793f-4a54-9b2a-01b7955edb1d'
            },
            withCredentials: true
        })
        .then((res) => {console.log(res.data)})
    
    );
    
    
    


    return (

        <div>
            
        </div>
    );
};

export default Users;