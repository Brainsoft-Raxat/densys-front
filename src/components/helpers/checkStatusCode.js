import axios from 'axios';
import {HOST} from "../Home/Home";

export const checkStatusCode = (error, navigate) => {
    switch (error.response.status) {
        case 401:
            axios.post(HOST + '/refresh-token')
                .then(res => {
                    navigate("/admin-page")
                })
                .catch(error => {
                    localStorage.removeItem("token")
                    navigate("/login")
                })
            break;
        case 404:
            alert("Resource not found")
            break;
        case 500:
            alert("Internal Server Error")
            break;
        default:
            alert(error.message)
    }
}