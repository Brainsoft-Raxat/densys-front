import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import {
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, InputLabel,
    Modal,
    Pagination, Select, Slide,
    Stack, TextField
} from "@mui/material";
import {useEffect, useRef} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import {DesktopDatePicker, DesktopTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import MenuItem from "@mui/material/MenuItem";
import {HOST} from "../Home/Home";
import {checkStatusCode} from "../helpers/checkStatusCode";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DoctorListPage = (props) => {
    const [doctors, setDoctors] = React.useState([]);
    const [selectedDoctor, setSelectedDoctor] = React.useState(null);
    const [countDoctors, setCountDoctors] = React.useState(-1);
    const [numOfPages, setNumOfPages] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [dept_id, setDeptId] = React.useState(1);
    const [params, setParams] = React.useState(useParams());
    const [isBooked, setIsBooked] = React.useState(false);
    const [booking, setBooking] = React.useState({
        doctor_id: -1,
        iin: "",
        phone: "",
        email: "",
        reg_date: dayjs().format("YYYY-MM-DD"),
        reg_time: ""
    });
    const [timeSlots, setTimeSlots] = React.useState([]);


    const navigate = useNavigate();
    const previousDeptIdRef = useRef(props.deptId);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (doctor) => {
        setSelectedDoctor(doctor);
        setBooking({
            ...booking,
            doctor_id: doctor.doctor_id
        })
        setOpen(true);
    };

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (date) => {
        setBooking({
            ...booking,
            reg_date: dayjs(date).format("YYYY-MM-DD")
        })
    }


    useEffect(() => {
        if (isBooked) {
            setIsBooked(false)
        }
        axios.get(HOST + `/doctors/appointments?date=${booking.reg_date}&doctor_id=${booking.doctor_id}`)
            .then(function (response) {
                if (response.status === 200) {
                    setTimeSlots(prevState => (
                                [
                                    ...response.data.data.empty_slots
                                ]
                            ));
                }
            })
            .catch(function (error) {
                checkStatusCode(error, navigate)
            });
    }, [booking.reg_date, isBooked]);

    const handleBook = () => {
        console.log(booking);

        axios.post(HOST + `/doctors/appointments`, JSON.stringify(booking))
            .then(function (response) {
                if (response.status === 201) {
                    setIsBooked(true);
                    alert("Appointment booked successfully")
                    setOpen(false);
                } else {
                    throw new Error(response.statusText);
                }
            })
            .catch(function (error) {
                checkStatusCode(error, navigate)
            })
    }

    const handleClose = () => {
        setBooking({
            doctor_id: -1,
            iin: "",
            phone: "",
            email: "",
            reg_date: dayjs().format("YYYY-MM-DD"),
            reg_time: ""
        })
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    useEffect(() => {
            console.log("props.deptId changed");
            console.log("props.deptId: " + props.deptId);
            setDeptId(+props.deptId);
            if (dept_id > 0) {
                axios.get(HOST + `/doctors/departments/${dept_id}?page_num=${currentPage}&page_size=6`)
                    .then(function (response) {
                    setCountDoctors(response.data.data.count);
                        if (response.data.data.count > 0) {
                            setDoctors(prevState => (
                                [
                                    ...response.data.data.doctors
                                ]
                            ));
                        }
                        setNumOfPages(Math.ceil(response.data.data.count / 6))
                    })
                    .catch(function (error) {
                        checkStatusCode(error, navigate)
                    })
            }
    }, [props.deptId, currentPage, dept_id, params, countDoctors, open])


    return (
        <Container sx={{m: 2}}>
            {countDoctors > 0 ? <Grid container sx={{m: 2}} spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {Array.from(doctors.map((doctor, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card sx={{maxWidth: 300}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="250"
                                    image={require('../images/unnamed-1@2x.png')}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {doctor.first_name} {doctor.last_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Department: {doctor.department}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Specialization: {doctor.spec}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Phone: {doctor.phone}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Degree: {doctor.degree}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Experience: {doctor.experience}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button variant="outlined" onClick={handleClickOpen.bind(this, doctor)}>
                                        Book Appointment
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )))}
                </Grid>
                : <Alert severity="warning">No doctors found</Alert>
            }
            <Stack spacing={2} alignItems="center">
                <Pagination count={numOfPages} onChange={(event, value) => setCurrentPage(value)}/>
            </Stack>

            {selectedDoctor &&
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>Book Appointment with Dr. {selectedDoctor.first_name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'}}} noValidate
                                 autoComplete="off">
                                <Stack spacing={3}>
                                    <TextField id="outlined-basic" label="IIN" variant="outlined" name="iin"
                                               onChange={handleChange}/>
                                    <TextField id="outlined-basic" label="Phone" variant="outlined" name="phone"
                                               onChange={handleChange}/>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" name="email"
                                               onChange={handleChange}/>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            label="Date of Appointment"
                                            value={dayjs(booking.reg_date, "YYYY-MM-DD")}
                                            inputFormat="YYYY-MM-DD"
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                        <Select
                                            label="Time"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            variant="outlined"
                                            name="reg_time"
                                            value={booking.reg_time}
                                            onChange={handleChange}
                                        >
                                            {Array.from(timeSlots.map((time_slot, index) => (
                                                <MenuItem value={time_slot} key={index}>{time_slot}</MenuItem>
                                            )))
                                            }
                                        </Select>
                                    </LocalizationProvider>
                                </Stack>
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleBook}>Book</Button>
                    </DialogActions>
                </Dialog>
            }
        </Container>
    );
};

export default DoctorListPage;
