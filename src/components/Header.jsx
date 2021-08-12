import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import axios from 'axios';

const Header = () => {


    // const [login, setLogin] = useState(false)

    // useEffect( () => {
    //     axios({
    //         method: 'get',
    //         url: 'https://social-network.samuraijs.com/api/1.0/auth/me',
    //         headers: {
    //             'API-KEY': '279d1d16-793f-4a54-9b2a-01b7955edb1d'
    //         },
    //     })
    //     .then((res) => {
            
    //         if (res.data.resultCode === 0) {
    //             setLogin(true)
    //             console.log(login)
    //         }
                  
    //     })
    // } )


    return (
        <div>
           <Navbar /> 
        </div>
    );
};

export default Header;