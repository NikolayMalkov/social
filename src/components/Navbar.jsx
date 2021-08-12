import React from 'react';
import navbarstyles from './css/navbar.module.css';
import { Link, Redirect } from 'react-router-dom'




const Navbar = (props) => {


    // if (!props.login) {
    //     return ( <Redirect to='/login' /> )
    // }


    return (

        <div className={navbarstyles.navbar}>
            <ul>

                <li><Link to='/'>Профиль</Link></li>
                <li><Link to='/users'>Пользователи</Link></li>
                <li><button>Выйти из аккаунта</button></li>
 
            </ul>
        </div>
    );
};

export default Navbar;