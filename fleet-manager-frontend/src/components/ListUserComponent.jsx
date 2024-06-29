import {useEffect, useState} from "react";
import {getAllUsers} from "../services/UserService.js";
import {useNavigate} from "react-router-dom";

const ListUserComponent = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    function addNewUser(){
        navigate("/add-user");
    }

    return (
        <div className="container table-striped table-bordered">
            <h2 className="text-center">List of users</h2>
            <button className="btn btn-primary" onClick={addNewUser}>+ ADD</button>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
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
                            <td>{user.phoneNumber}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserComponent;
