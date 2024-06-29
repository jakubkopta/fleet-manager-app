import './App.css'
import ListUserComponent from "./components/ListUserComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListVehicleComponent from "./components/ListVehicleComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import VehicleComponent from "./components/VehicleComponent.jsx";
import UserComponent from "./components/UserComponent.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path="/vehicles" element={<ListVehicleComponent />} />
                <Route path="/users" element={<ListUserComponent />} />
                <Route path="/add-vehicle" element={<VehicleComponent />} />
                <Route path="/add-user" element={<UserComponent />} />
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
    </>
  )
}

export default App
