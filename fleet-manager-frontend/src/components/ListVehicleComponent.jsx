import {useEffect, useState} from "react";
import {getAllVehicles} from "../services/VehicleService.js";
import {useNavigate} from "react-router-dom";

const ListVehicleComponent = () => {

    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllVehicles().then((response) => {
            setVehicles(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    function addNewVehicle(){
        navigate("/add-vehicle");
    }

    return (
        <div className="container table-striped table-bordered">
            <h2 className="text-center">List of vehicles</h2>
            <button className="btn btn-primary" onClick={addNewVehicle}>+ ADD</button>
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

export default ListVehicleComponent;
