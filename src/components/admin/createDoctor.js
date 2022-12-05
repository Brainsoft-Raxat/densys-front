import * as React from 'react';
import Container from "@mui/material/Container";
import {Checkbox, FormControl, FormControlLabel, Stack, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./SearchPage.module.css";
import dayjs from "dayjs";

function CreateDoctor() {
    const [doctor, setDoctor] = React.useState({
        first_name: '',
        last_name: '',
        middle_name: '',
        birth_date: '',
        iin: '',
        phone: '',
        address: '',
        email: '',
        department_id: 1,
        spec_id: 1,
        experience: 0,
        photo: '',
        category: '',
        price: 0,
        schedule: '',
        degree: '',
        rating: 0,
        webstite_url: '',
    });

    return (
        <div>
            <div className="header">
                <div className="text">
                    Fill out the form to add doctor to the system
                </div>
            </div>
            <div>
                <Paper elevation={3} sx={{p: 2, my: 2, mx: '30%'}}>
                    <Typography variant="h6" gutterBottom>
                        Register Doctor
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="first_name"
                                name="first_name"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                optional
                                id="middle_name"
                                name="middle_name"
                                label="Middle name"
                                fullWidth
                                autoComplete="middle-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="last_name"
                                name="last_name"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
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
                                autoComplete="phone"
                                variant="standard"
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                                label="Use this address for payment details"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
        ;
}

export default CreateDoctor;
