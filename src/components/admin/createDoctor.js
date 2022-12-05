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
import MenuItem from "@mui/material/MenuItem";

function CreateDoctor() {
    const [depts, setDepts] = React.useState([
        {
            id: 1,
            name: "Cardiology"
        },
        {
            id: 2,
            name: "Neurology"
        },
        {
            id: 3,
            name: "Dermatology"
        }
    ]);
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
        experience: 0,
        photo: '',
        category: 'First',
        price: 0,
        schedule: '',
        degree: '',
        rating: 0,
        webstite_url: '',
    });

    const handleSubmit = (e) => {
        console.log(doctor);
    }

    const handleChange = (e) => {
        setDoctor({
            ...doctor,
            [e.target.name]: e.target.value
        });
    }

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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                                select
                                required
                                id="department_id"
                                name="department_id"
                                label="Department"
                                fullWidth
                                variant="standard"
                                defaultValue={depts.length && depts[0].id}
                            >
                                {depts.length && depts.map((dept) => (
                                    <MenuItem key={dept.id} value={dept.id}>
                                        {dept.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                required
                                id="experience"
                                name="experience"
                                label="Experience"
                                fullWidth
                                variant="standard"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                id="photo"
                                name="photo"
                                fullWidth
                                variant="outlined"
                                type='file' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                onChange={handleChange}
                                required
                                id="category"
                                name="category"
                                label="Category"
                                fullWidth
                                variant="standard"
                                defaultValue='First'
                            >
                                <MenuItem key='first' value='First'>
                                    First
                                </MenuItem>
                                <MenuItem key='second' value='Second'>
                                    Second
                                </MenuItem>
                                <MenuItem key='highest' value='Highest'>
                                    Highest
                                </MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                required
                                id="price"
                                name="price"
                                label="Price"
                                fullWidth
                                variant="standard"
                                type='number'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                required
                                id="degree"
                                name="degree"
                                label="Degree"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                required
                                id="rating"
                                name="rating"
                                label="Rating"
                                fullWidth
                                variant="standard"
                                type='number'
                                InputProps={{ inputProps: { min: 0, max: 10 } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={handleChange}
                                id="webstite_url"
                                name="webstite_url"
                                label="Website URL"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                           <Button variant="contained" sx={{bgcolor: "#A0A0AD"}} onClick={handleSubmit}>Add Doctor</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
        ;
}

export default CreateDoctor;
