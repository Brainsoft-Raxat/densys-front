import React, {useEffect, useState} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import {createSearchParams, useNavigate} from "react-router-dom";
import {HOST} from "../Home/Home";
import {checkStatusCode} from "../helpers/checkStatusCode";

export default function DoctorView() {

    // function createData(firstName, lastName, specDetID) {
    //     return {firstName, lastName, specDetID};
    // }

    const [doctors, setDoctors] = useState([])
    const navigate = useNavigate();

    function handleClick(row) {
        navigate(`/doctor-modification/${row.id}`);
    }

    useEffect(() => {
        axios.get(HOST + "/doctors")
            .then(function (response) {
                console.log(response.data.data)
                setDoctors(prevState => (
                    [
                        ...response.data.data.doctors
                    ]
                ))
            })
            .catch(function (error) {
                checkStatusCode(error, navigate)
                console.log(error);
            });
    }, [])




    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Specialization ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {doctors.map((row) => (
                        <TableRow
                            onClick={handleClick}
                            key={row.first_name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.first_name}
                            </TableCell>
                            <TableCell align="right">{row.last_name}</TableCell>
                            <TableCell align="right">{row.ID}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}