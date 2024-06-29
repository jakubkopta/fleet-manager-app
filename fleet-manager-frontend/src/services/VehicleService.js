import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/vehicles';

export const getAllVehicles = () => axios.get(REST_API_BASE_URL);
export const createVehicle = (vehicle) => axios.post(REST_API_BASE_URL, vehicle);