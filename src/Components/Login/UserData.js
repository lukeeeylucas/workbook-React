
import classes from './UserData.module.css'
const UserData = (props) =>{

    return (
        <div className = {classes.acontainer}>
            <div className ="usersData">
            </div>
                <h2 className= "centered">User Directory</h2>
                <table >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Enterprise ID</th>
                            <th>Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.usersData.map((userData)=>(
                            <tr key = {userData.id}>
                                <td>{userData.firstName}</td>
                                <td>{userData.lastName}</td>
                                <td>{userData.email}</td>
                                <td>{userData.eid}</td>
                                <td>{userData.bday}</td>
                        </tr>
                        ))}
                    
                    </tbody>
                </table>

            </div>

    );
}

export default UserData;