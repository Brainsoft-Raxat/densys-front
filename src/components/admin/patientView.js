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

export default function PatientView() {

    const [patients, setPatients] = useState([])
    const [selectedRow, setSelectedRow] = useState({});
    const navigate = useNavigate();

    function handleClick(row) {
        navigate({
            pathname: 'patient-modification',
            search: createSearchParams({
                id: row.ID
            }).toString(),
        });
    }


    useEffect(() => {
        axios.get("http://localhost:3000/patients/all")
            .then(function (response) {
                console.log(response.data.data)
                setPatients(prevState => (
                    [
                        ...response.data.data
                    ]
                ))
                // doctors.push(createData("lol", "kek", 2))
            })
            .catch(function (error) {
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
                    {patients.map((row) => (
                        <TableRow
                            onClick={() => handleClick(row)}
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