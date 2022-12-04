import React, {useState, useEffect} from 'react';
import './style.css'
import {useSearchParams} from "react-router-dom";
import axios from "axios";

function PatientModification() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [id, setID] = useState()
    const [dateOfBirth, setDateOfBirth] = useState();
    const [iinNumber, setIIN] = useState();
    //const [idNumber, setID] = useState(thePatient.idNumber);
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [bloodGroup, setBloodGroup] = useState();
    const [emergencyContactNumber, setEmergencyContactNumber] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [email, setEmail] = useState();
    const [addressP, setAddressP] = useState();
    const [maritalStatus, setMaritalStatus] = useState();
    const [dateOfReg, setDateOfReg] = useState();

    console.log(dateOfBirth, iinNumber, firstName, middleName,
        lastName, bloodGroup, emergencyContactNumber, contactNumber, email,
        addressP, maritalStatus, dateOfReg);

    const handleInputChange = (e) => {
        const {id, value} = e.target;

        if (id === "dateOfBirth") {
            setDateOfBirth(value);
        }

        if (id === "iinNumber") {
            setIIN(value);
        }

        /* if (id === "idNumber") {
             setID(value);
         }*/

        if (id === "firstName") {
            setFirstName(value);
        }

        if (id === "middleName") {
            setMiddleName(value);
        }

        if (id === "lastName") {
            setLastName(value);
        }

        if (id === "bloodGroup") {
            setBloodGroup(value);
        }

        if (id === "emergencyContactNumber") {
            setEmergencyContactNumber(value);
        }

        if (id === "contactNumber") {
            setContactNumber(value);
        }

        if (id === "email") {
            setEmail(value);
        }

        if (id === "addressP") {
            setAddressP(value);
        }

        if (id === "maritalStatus") {
            setMaritalStatus(value);
        }

        if (id === "dateOfReg") {
            setDateOfReg(value);
        }

    }


    const [patients, setPatients] = useState()

    useEffect(() => {

        let id = searchParams.get("id")

        axios.get(`http://swe-backend.herokuapp.com/patients/${id}`)
            .then(function (response) {
                console.log(response.data.data)
                setID(prevState => (
                    response.data.data.ID
                ))

                setDateOfBirth(prevState => (
                    response.data.data.birth_date
                ))

                setIIN(prevState => (
                    response.data.data.iin
                ))

                setFirstName(prevState => (
                    response.data.data.first_name
                ))

                setMiddleName(prevState => (
                    response.data.data.middle_name
                ))

                setLastName(prevState => (
                    response.data.data.last_name
                ))

                setBloodGroup(prevState => (
                    response.data.data.blood_type
                ))

                setEmergencyContactNumber(prevState => (
                    response.data.data.emer_contact
                ))

                setContactNumber(prevState => (
                    response.data.data.phone
                ))

                setEmail(prevState => (
                    response.data.data.email
                ))

                setAddressP(prevState => (
                    response.data.data.address
                ))

                setMaritalStatus(prevState => (
                    response.data.data.marit_st
                ))
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    useEffect(() => {
        localStorage.setItem('patients', JSON.stringify(patients))
    })

    const updatedPatient = {
        dateOfBirth, iinNumber, firstName, middleName,
        lastName, bloodGroup, emergencyContactNumber, contactNumber, email,
        addressP, maritalStatus, dateOfReg
    }

    const updatePatient = (iinNumber, updatedPatient) => {
        setPatients(patients.map((patient) => patient.iinNumber === iinNumber ? updatedPatient : patient))
    }

    const handleSubmit = (e) => {
        console.log(dateOfBirth, iinNumber, firstName, middleName,
            lastName, bloodGroup, emergencyContactNumber, contactNumber, email,
            addressP, maritalStatus, dateOfReg);

        let patient = {
            "blood_type": bloodGroup,
            "emer_contact": emergencyContactNumber,
            "marit_st": maritalStatus,
            "first_name": firstName,
            "last_name": lastName,
            "middle_name": middleName,
            "birth_date": dateOfBirth,
            "iin": iinNumber,
            "phone": contactNumber,
            "address": addressP,
            "email": email
        }

        axios.put(`http://swe-backend.herokuapp.com/patients/${id}`, JSON.stringify(patient))
            .then(function (response) {

            })
            .catch(function (error) {
                console.log(error);
            });



    }


    return (
        <div className="p_modification">
            <div className="form-body">
                <div className="date-of-birth">
                    <label className="form__label" htmlFor="dateOfBirth">Date Of Birth </label>
                    <input className="form__input" type="date" value={dateOfBirth}
                           onChange={(e) => handleInputChange(e)}
                           id="dateOfBirth" placeholder="Date of Birth"
                    />
                </div>

                <div className="iin-number">
                    <label className="form__label" htmlFor="iinNumber">IIN Number </label>
                    <input className="form__input" type="text" pattern="[0-9]*" value={iinNumber}
                           onChange={(e) => handleInputChange(e)}
                           id="iinNumber" placeholder="IIN Number"
                    />
                </div>

                <div className="firstname">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName}
                           onChange={(e) => handleInputChange(e)}
                           id="firstName" placeholder="First Name"
                    />
                </div>

                <div className="middlename">
                    <label className="form__label" htmlFor="middleName">Middle Name </label>
                    <input className="form__input" type="text" value={middleName}
                           onChange={(e) => handleInputChange(e)}
                           id="middleName" placeholder="Middle Name"/>
                </div>

                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input type="text" value={lastName}
                           onChange={(e) => handleInputChange(e)}
                           id="lastName" className="lastName" placeholder="Last Name"
                    />

                </div>

                <div className="bloodGroup">
                    <label className="form__label" htmlFor="bloodGroup">bloodGroup </label>
                    <input className="form__input" type="text" pattern="[0-9]*" value={bloodGroup}
                           onChange={(e) => handleInputChange(e)}
                           id="bloodGroup" placeholder="Blood Group"/>
                </div>

                <div className="emergency-contact-number">
                    <label className="form__label" htmlFor="contactNumber">Contact Number </label>
                    <input className="form__input" type="text" pattern="[0-9]*" value={emergencyContactNumber}
                           onChange={(e) => handleInputChange(e)}
                           id="emergencyContactNumber" placeholder="Emergency Contact Number"/>
                </div>

                <div className="contact-number">
                    <label className="form__label" htmlFor="contactNumber">Contact Number </label>
                    <input className="form__input" type="text" pattern="[0-9]*" value={contactNumber}
                           onChange={(e) => handleInputChange(e)}
                           id="contactNumber" placeholder="Contact Number"/>
                </div>

                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input className="form__input" type="text" pattern="[0-9]*" value={email}
                           onChange={(e) => handleInputChange(e)}
                           id="email" placeholder="email@email"
                    />
                </div>

                <div className="address">
                    <label className="form__label" htmlFor="addressP">Address </label>
                    <input className="form__input" type="text" value={addressP}
                           onChange={(e) => handleInputChange(e)}
                           id="addressP" placeholder="Address"
                    />
                </div>

                <div className="marital-status">
                    <label className="form__label" htmlFor="maritalStatus">Marital Status </label>
                    <input className="form__input" type="text" pattern="[0-9]*" value={maritalStatus}
                           onChange={(e) => handleInputChange(e)}
                           id="maritalStatus" placeholder="Marital Status"
                    />
                </div>

                <div className="date-of-registration">
                    <label className="form__label" htmlFor="dateOfReg">Date of Registration </label>
                    <input className="form__input" type="date" value={dateOfReg}
                           onChange={(e) => handleInputChange(e)}
                           id="dateOfReg" placeholder="Date of Registration"
                    />
                </div>

            </div>

            <button onClick={(e) => handleSubmit(e)} type="submit" className="btn">Register</button>

        </div>
    )
}

export default PatientModification;