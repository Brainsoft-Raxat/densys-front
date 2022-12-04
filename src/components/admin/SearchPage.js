import styles from "./SearchPage.module.css";
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select, Slide,
  Stack,
  TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";


const SearchPage = () => {
  const [search_input, setSearchInput] = useState("");
  const [countDoctors, setCountDoctors] = React.useState(-1);
  const [numOfPages, setNumOfPages] = React.useState(0);
  const [dept_id, setDeptId] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [doctors, setDoctors] = useState([])
  const navigate = useNavigate();

  const [selectedDoctor, setSelectedDoctor] = React.useState(null);
  const [booking, setBooking] = React.useState({
    doctor_id: -1,
    iin: "",
    phone: "",
    email: "",
    reg_date: dayjs().format("YYYY-MM-DD"),
    reg_time: ""
  });
  const [timeSlots, setTimeSlots] = React.useState(['10:00', '10:30', '11:00', '11:30']);
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
      // fetch(`https://swe-backend.herokuapp.com/doctors/list/${dept_id}/${currentPage}`)
  }, [booking.reg_date]);

  const handleBook = () => {
    console.log(booking);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    };

    fetch('https://swe-backend.herokuapp.com/doctors/appointment', requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status !== 0) {
            alert(data.message);
          } else {
            alert("Booked successfully");
          }
        })
  }

  const handleClose = () => {
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


  const handleSubmit = (e) =>{

    const {id, value} = e.target;

    navigate({
      pathname: '/admin-page/doctor-view/' + id,
    });
    
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleOnSearch = (string, search_input) => {
    console.log(string, search_input);
    setSearchInput(string);
  };

  const handleOnHover = (result) => {
    //console.log(result);
  };

  const handleOnSelect = (doctor) => {
    console.log(doctor);
    setSelectedDoctor(doctor);
    setBooking({
      ...booking,
      doctor_id: doctor.doctor_id
    })
    setOpen(true);
  };

  useEffect(() => {
  }, [selectedDoctor])

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const handleOnClear = () => {
    // console.log("Cleared");
  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">{item.first_name}</span>
        <span className="result-span"> {item.last_name}</span>
      </div>
    );
  };

  useEffect(() => {
    fetch(`https://swe-backend.herokuapp.com/doctors/?search=${search_input}&page_num=${currentPage}&page_size=10`)
      .then(response => response.json())
      .then(data => {
            setCountDoctors(data.data.count)
            if (data.data.count > 0) {
              setDoctors(prevState => (
                [
                          ...data.data.doctors
                      ]
                  ))
            }
                    });
}, [search_input])


  return (
    <div className={styles.searchPageDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv1} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.searchAndMakeAnAppointment}>
            Search and Make an Appointment
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.frameDiv1}>
              <div className={styles.enterDoctorNameSpecialtyA}>
                Enter doctor name or surname
              </div>
            </div>

            <div className={styles.frameDiv2}>

            <ReactSearchAutocomplete
            items={doctors}
            maxResults={10}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            fuseOptions={{ keys: ["first_name", "last_name"] }} // Search in the description text as well
            styling={{ zIndex: 3 }} // To display it on top of the search box below
            formatResult={formatResult}
          />
            
                 
            </div>      
          </div>
        </div>
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.groupDiv5}>
        <div className={styles.frameDiv3}>
            <div className={styles.groupDiv6}>
              <a
                className={styles.allergyAndImmunology}
                href="https://www.sgu.edu/blog/medical/ultimate-list-of-medical-specialties/#allergyandimmunology"
                target="_blank"
              >
                Allergy and immunology
              </a>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "allergy" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Dermatology and skin
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "dermatology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv5}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Family medicine</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "familymed" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv6}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Radiation oncology
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "oncology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv7}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Gastrology</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "gastrology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Physical and reahbilitation
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "reahbilitation" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv9}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Neurology</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "neurology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv10}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Diagnostic radiology
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "radiology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv11}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Ophtalmology</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "ophtalmology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv12}>
          <div className={styles.searchAndMakeAnAppointment}>
            Doctor specialties
          </div>
        </div>
    </div>

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
      </div>
  );
};

export default SearchPage;