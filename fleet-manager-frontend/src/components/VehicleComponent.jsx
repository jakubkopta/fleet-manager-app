import {useState} from "react";
import {createVehicle} from "../services/VehicleService.js";
import {useNavigate} from "react-router-dom";

const VehicleComponent = () => {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(0);
    const [plateNumber, setPlateNumber] = useState("");
    const navigate = useNavigate();

    function addVehicle(e) {
        e.preventDefault();

        const vehicle = {brand, model, year, plateNumber};
        console.log(vehicle);
        createVehicle(vehicle).then((response) => {
            console.log(response.data);
            navigate('/vehicles');
        }).catch((error) => {
            console.error('There was an error!', error);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <h2 className="text-center">Add vehicle</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Brand: </label>
                                <input
                                    type="text"
                                    placeholder="Brand"
                                    name="brand"
                                    value={brand}
                                    className="form-control"
                                    onChange={e => setBrand(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Model: </label>
                                <input
                                    type="text"
                                    placeholder="Model"
                                    name="model"
                                    value={model}
                                    className="form-control"
                                    onChange={e => setModel(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Year: </label>
                                <input
                                    type="text"
                                    placeholder="Year"
                                    name="year"
                                    value={year}
                                    className="form-control"
                                    onChange={e => setYear(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Plate: </label>
                                <input
                                    type="text"
                                    placeholder="Plate"
                                    name="plate"
                                    value={plateNumber}
                                    className="form-control"
                                    onChange={e => setPlateNumber(e.target.value)}>
                                </input>
                            </div>

                            <button className="btn btn-success" onClick={addVehicle}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleComponent;