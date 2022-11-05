import {  useState } from "react";
import UserData from "./UserData";
import data from  './UserData.json';
import Signup from './Signup';

const Users = () =>{
    const [usersData, setUsersData] = useState(data);
    const onAddUserDataHandler = (
            firstNameRaw,
            lastNameRaw,
            emailRaw,
            eidRaw,
            bdayRaw

    )=>{
        setUsersData((prevUserData) =>{
            return [
                ...prevUserData,
                {
                    id: Math.random().toString(),
                    firstName: firstNameRaw,
                    lastName: lastNameRaw,
                    email: emailRaw,
                    eid: eidRaw,
                    bday: bdayRaw
                },
            ];
        });
    };

    return(
        <div>
                
                 <Signup onAddUserHandler= {onAddUserDataHandler}/>
                 <UserData usersData= {usersData}/>
        
    
        </div>
        
    );
}

export default Users;