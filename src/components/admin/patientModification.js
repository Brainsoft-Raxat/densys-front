import React, {useState, useEffect} from 'react';
import './style.css'

function PatientModification({thePatient}) {


    const [dateOfBirth, setDateOfBirth] = useState(thePatient.dateOfBirth);
    const [iinNumber, setIIN] = useState(thePatient.iinNumber);
    const [idNumber, setID] = useState(thePatient.idNumber);
    const [firstName, setFirstName] = useState(thePatient.firstName);
    const [middleName, setMiddleName] = useState(thePatient.middleName);
    const [lastName, setLastName] = useState(thePatient.lastName);
    const [bloodGroup, setBloodGroup] = useState(thePatient.bloodGroup);
    const [emergencyContactNumber, setEmergencyContactNumber] = useState(thePatient.emergencyContactNumber);
    const [contactNumber, setContactNumber] = useState(thePatient.contactNumber);
    const [email, setEmail] = useState(thePatient.email);
    const [addressP,setAddressP] = useState(thePatient.addressP);
    const [maritalStatus, setMaritalStatus] = useState(thePatient.maritalStatus);
    const [dateOfReg, setDateOfReg] = useState(thePatient.dateOfReg);

    console.log(dateOfBirth, iinNumber, idNumber, firstName, middleName, 
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

        if (id === "idNumber") {
            setID(value);
        }

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
    

    const[patients, setPatients] = useState([
        {dateOfBirth: '2000-06-12', iinNumber: '000612400567',
        idNumber: '050750097', firstName: 'Ardak', middleName: 'Bolatkyzy',
        lastName: 'Azamat', bloodGroup: 'A+', emergencyContactNumber: '+77005553535',
        contactNumber: '+77479866889', email: 'ardakbolat@email.kz', addressP: 'Kabanbay Batyr 35, Block 32, Apt. 913',
        maritalStatus: 'single', dateOfReg: '2022-01-02'}
    ])

    useEffect(() => {
        setPatients(JSON.parse(localStorage.getItem('patients')))
    }, [])

    useEffect(() => {
        localStorage.setItem('patients', JSON.stringify(patients))
    })

    const updatedPatient = {dateOfBirth, iinNumber, idNumber, firstName, middleName, 
        lastName, bloodGroup, emergencyContactNumber, contactNumber, email, 
        addressP, maritalStatus, dateOfReg}

    const updatePatient= (iinNumber, updatedPatient) => {
        setPatients(patients.map((patient) => patient.iinNumber === iinNumber ? updatedPatient : patient))
    }

    const handleSubmit = (e) => {
        console.log(dateOfBirth, iinNumber, idNumber, firstName, middleName, 
            lastName, bloodGroup, emergencyContactNumber, contactNumber, email, 
            addressP, maritalStatus, dateOfReg);

        updatePatient(iinNumber, updatedPatient);
        
    }
    
    
    return(
        <div className="p_modification">
            <div className="form-body">
                <div className="date-of-birth">
                    <label className="form__label" htmlFor="dateOfBirth">Date Of Birth </label>
                    <input className="form__input" type="date" value = {dateOfBirth} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="dateOfBirth" placeholder="Date of Birth"
                    />
                </div>

                <div className="iin-number">
                    <label className="form__label" htmlFor="iinNumber">IIN Number </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {iinNumber} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="iinNumber" placeholder="IIN Number"
                    />
                </div>

                <div className="id-number">
                    <label className="form__label" htmlFor="idNumber">National ID Number </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {idNumber}
                        onChange = {(e) => handleInputChange(e)} 
                        id="idNumber" placeholder="National ID Number"
                    />
                </div>

                <div className="firstname">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value = {firstName} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="firstName" placeholder="First Name"
                    />
                </div>

                <div className="middlename">
                    <label className="form__label" htmlFor="middleName">Middle Name </label>
                    <input className="form__input" type="text" value = {middleName} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="middleName" placeholder="Middle Name"/>
                </div>

                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input  type="text" value = {lastName} 
                        onChange = {(e) => handleInputChange(e)}  
                        id="lastName"  className="lastName" placeholder="Last Name"
                    />

                </div>

                <div className="bloodGroup">
                    <label className="form__label" htmlFor="bloodGroup">bloodGroup </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {bloodGroup} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="bloodGroup" placeholder="Blood Group"/>
                </div>

                <div className="emergency-contact-number">
                    <label className="form__label" htmlFor="contactNumber">Contact Number </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {emergencyContactNumber} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="emergencyContactNumber" placeholder="Emergency Contact Number"/>
                </div>

                <div className="contact-number">
                    <label className="form__label" htmlFor="contactNumber">Contact Number </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {contactNumber} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="contactNumber" placeholder="Contact Number"/>
                </div>

                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {email} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="email" placeholder="email@email"
                    />
                </div>

                <div className="address">
                    <label className="form__label" htmlFor="addressP">Address </label>
                    <input className="form__input" type="text" value = {addressP} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="addressP" placeholder="Address"
                    />
                </div>

                <div className="marital-status">
                    <label className="form__label" htmlFor="maritalStatus">Marital Status </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {maritalStatus} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="maritalStatus" placeholder="Marital Status"
                    />
                </div>

                <div className="date-of-registration">
                    <label className="form__label" htmlFor="dateOfReg">Date of Registration </label>
                    <input className="form__input" type="date" value = {dateOfReg} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="dateOfReg" placeholder="Date of Registration"
                    />
                </div>

            </div>
            
            <button onClick = {(e) => handleSubmit(e)} type="submit" className="btn">Register</button>
            
        </div>
    )
}
export default PatientModification;