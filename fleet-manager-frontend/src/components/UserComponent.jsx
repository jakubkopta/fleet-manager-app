import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createUser} from "../services/UserService.js";

const UserComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    function addUser(e) {
        e.preventDefault();

        const user = {firstName, lastName, email, phoneNumber};
        console.log(user);
        createUser(user).then((response) => {
            console.log(response.data);
            navigate('/users');
        }).catch((error) => {
            console.error('There was an error!', error);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <h2 className="text-center">Add user</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First name: </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={firstName}
                                    className="form-control"
                                    onChange={e => setFirstName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last name: </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    className="form-control"
                                    onChange={e => setLastName(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email: </label>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    onChange={e => setEmail(e.target.value)}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Phone: </label>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    name="phone"
                                    value={phoneNumber}
                                    className="form-control"
                                    onChange={e => setPhoneNumber(e.target.value)}>
                                </input>
                            </div>

                            <button className="btn btn-success" onClick={addUser}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserComponent;