import {useEffect, useState} from "react";
import {getAllUsers} from "../services/UserService.js";
import {getAllVehicles} from "../services/VehicleService.js";

const ListUserComponent = () => {

    const [users, setUsers] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getAllUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.log(error);
        })
        getAllVehicles().then((response) => {
            setVehicles(response.data);
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
            <h2 className="text-center">List of vehicles</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Plate</th>
                </tr>
                </thead>
                <tbody>
                {
                    vehicles.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.brand}</td>
                            <td>{user.model}</td>
                            <td>{user.year}</td>
                            <td>{user.plateNumber}</td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserComponent;
