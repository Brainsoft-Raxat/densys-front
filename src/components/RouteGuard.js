import React from 'react'
import {Navigate} from "react-router-dom";

const RouteGuard = ({
    redirectPath = "/login",
    children
}) => {
    function hasJWT() {
        let flag = false;

        localStorage.getItem("token") ? flag = true : flag = false

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
