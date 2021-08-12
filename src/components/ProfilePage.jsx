import React, { useState } from 'react';
import profilestyles from './css/profile.module.css';

const ProfilePage = () => {

    const [user, SetUser] = useState('');
    const [status, SetStatus] = useState('default status')

    let users = [
        {id: 1, name: "Admin", status: "hello world"},
    ]


    let UserInfo = (props) => {
        return (
            <div className={profilestyles.userInfo}>
                
                <div>
                    {props.name}
                </div>
                <div>
                    {props.status}
                </div>
            </div>
        )
    } 

    return (
        <div>
           <div className={profilestyles.profile_panel}>
                {users.map(user => <UserInfo  id={user.id} name={user.name} status={user.status} />)}
            </div> 
        </div>
    );
};

export default ProfilePage;