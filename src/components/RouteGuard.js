import React from 'react'
import {Navigate} from "react-router-dom";

const RouteGuard = ({
    redirectPath = "/login",
    children
}) => {
    function hasJWT() {
        let flag = false;
        localStorage.getItem('isAuth') === 'true' ? flag = true : flag = false;
        console.log("flag", flag)
        return flag
    }

    if (hasJWT()) {
        return (
            children
        )
    } else {
        return (
            <Navigate to={redirectPath} replace />
        )
    }
};

export default RouteGuard;
