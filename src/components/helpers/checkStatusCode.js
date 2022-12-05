import axios from 'axios';

export const checkStatusCode = (error, navigate) => {
    switch (error.response.status) {
        case 401:
            axios.post('https://backend.swe.works/refresh-token')
                .then(res => {})
                .catch(error => {
                    localStorage.removeItem("token")
                    navigate()
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