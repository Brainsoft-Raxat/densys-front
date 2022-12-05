import * as React from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import axios from "axios";
import {HOST} from "../Home/Home";
import {checkStatusCode} from "../helpers/checkStatusCode";
import {useSearchParams} from "react-router-dom";



function ModifyPatient() {
    const [patient, setPatient] = React.useState();
    const [searchParams, setSearchParams] = useSearchParams();

    React.useEffect(() => {
        let id = searchParams.get("id")

        axios.get(HOST + `/patients/${id}`)
            .then(function (response) {
                console.log(response.data.data)
                setPatient(prevState => (
                    [
                        ...response.data.data.doctors
                    ]
                ))
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const handleChange = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });
    }

    const navigate = React.useNavigate();

    const handleSubmit = (e) => {
        const handleSubmit = (e) => {
            axios.put(`${HOST}/patients/sign-up`, JSON.stringify(patient))
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                checkStatusCode(error, navigate)
            })
        }
    
    }
    

    return (
        
        <div>
            <div className="header">
                <div className="text">
                    Fill out the form to add patient to the system
                </div>
            </div>
            <div>
                <Paper elevation={3} sx={{p: 2, my: 2, mx: '30%'}}>
                    <Typography variant="h6" gutterBottom>
                        Register Patient
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="first_name"
                                name="first_name"
                                label="First name"
                                fullWidth
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                optional
                                id="middle_name"
                                name="middle_name"
                                label="Middle name"
                                fullWidth
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="last_name"
                                name="last_name"
                                label="Last name"
                                fullWidth
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="birth_date"
                                name="birth_date"
                                label="Birth date"
                                fullWidth
                                defaultValue={dayjs().format('YYYY-MM-DD')}
                                type="date"
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="iin"
                                name="iin"
                                label="IIN"
                                fullWidth
                                placeholder='12 digits'
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="marit_st"
                                name="marit_st"
                                label= "Marital Status"
                                fullWidth
                                placeholder = "single"
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                placeholder={"+7xxxxxxxxxxx"}
                                id="phone"
                                name="phone"
                                label="Phone"
                                fullWidth
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                placeholder={"+7xxxxxxxxxxx"}
                                id="emer_contact"
                                name="emer_contact"
                                label="Emergency Contact Phone"
                                fullWidth
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                placeholder="user@gmail.com"
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>
    
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                placeholder={'street, house, flat'}
                                fullWidth
                                autoComplete="address"
                                variant="standard"
                                onChange = {handleChange}
                            />
                        </Grid>
                       
                        <Grid item xs={12} >
                           <Button 
                                variant = "contained" 
                                sx = {{bgcolor: "#a0a0ad"}}
                                onClick = {handleChange}>
                                    Add Patient
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
        ;
}

export default ModifyPatient;