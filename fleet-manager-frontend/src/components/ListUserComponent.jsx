import {useEffect, useState} from "react";
import {getAllUsers} from "../services/UserService.js";

const ListUserComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div className="container table-striped table-bordered">
            <h2 className="text-center">List of users</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserComponent;
