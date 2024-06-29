import {useNavigate} from "react-router-dom";

const HeaderComponent = () => {

    const navigate = useNavigate();

    function navVehicles() {
        navigate('/vehicles');
    }
    function navUsers() {
        navigate('/users');
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark flex">
                    <a className="navbar-brand">Fleet Manager</a>
                </nav>
            </header>
            <div>
                <button onClick={navVehicles}>Vehicles</button>
                <button onClick={navUsers}>Users</button>
            </div>
        </div>
    )
}

export default HeaderComponent;