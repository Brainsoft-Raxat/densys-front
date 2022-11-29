import React, {useState, useEffect} from 'react';
import './style.css'


function DoctorModification() {


    const [dateOfBirth, setDateOfBirth] = useState();
    const [iinNumber, setIIN] = useState();
   // const [idNumber, setID] = useState(theDoctor.idNumber);
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [departmentID, setDepartmentID] = useState();
    const [specDetID, setSpecDetID] = useState();
    const [expYears, setExpYears] = useState();
    const [photoOfDoctor, setPhotoOfDoctor] = useState();
    const [docCategory, setDocCategory] = useState();
    const [appPrice, setAppPrice] = useState();
    const [schedule, setSchedule] = useState();
    const [education, setEducation] = useState();
    const [ratingDoc, setRating] = useState();
    const [addressDoc, setAddressDoc] = useState();
    const [homepageURL, setHomepageURL] = useState();

    const handleInputChange = (e) => {
        const {id, value} = e.target; 

        if (id === "dateOfBirth") {
            setDateOfBirth(value);
        }

        if (id === "iinNumber") {
            setIIN(value);
        }

      /*  if (id === "idNumber") {
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

        if (id === "contactNumber") {
            setContactNumber(value);
        }

        if (id === "departmentID") {
            setDepartmentID(value);
        }

        if (id === "specDetID") {
            setSpecDetID(value);
        }

        if (id === "expYears") {
            setExpYears(value);
        }

        if (id === "photoOfDoctor") {
            setPhotoOfDoctor(value);
        }

        if (id === "docCategory") {
            setDocCategory(value);
        }

        if (id === "appPrice") {
            setAppPrice(value);
        }

        if (id === "schedule") {
            setSchedule(value);
        }

        if (id === "education") {
            setEducation(value);
        }

        if (id === "ratingDoc") {
            setRating(value);
        }

        if (id === "addressDoc") {
            setAddressDoc(value);
        }

        if (id === "homepageURL") {
            setHomepageURL(value);
        }

      
    }

    const[doctors, setDoctors] = useState([{
        dateOfBirth: '2000-06-12', iinNumber: '000612400567',
        firstName: 'Ardak', middleName: 'Bolatkyzy',
        lastName: 'Azamat', contactNumber: '+77479866889', departmentID: 'DEPT123',
        specDetID: 'SPEC675', expYears: '20', photoOfDoctor: '', docCategory: 'Highest',
        appPrice: '10000', schedule: 'MONWEDFRI', education: 'NUSOM', 
        ratingDoc: '10', addressDoc: 'Kabanbay Batyr 35, Block 32, Apt. 913',
        homepageURL: 'densys.com/doctors/dept123/id'
    }])

    useEffect(() => {
        setDoctors(JSON.parse(localStorage.getItem('doctors')))
    }, [])

    useEffect(() => {
        localStorage.setItem('doctors', JSON.stringify(doctors))
    })

    const updatedDoctor = { dateOfBirth, iinNumber, firstName, middleName, 
        lastName, contactNumber, departmentID, specDetID, expYears,
        photoOfDoctor, docCategory, appPrice, schedule, education,
        ratingDoc, addressDoc, homepageURL}

    const updateDoctor= (iinNumber, updatedDoctor) => {
        setDoctors(doctors.map((doctor) => doctor.iinNumber === iinNumber ? updatedDoctor : doctor))
    }

    const handleSubmit = (e) => {
        console.log(dateOfBirth, iinNumber, firstName, middleName, 
            lastName, contactNumber, departmentID, specDetID, expYears,
            photoOfDoctor, docCategory, appPrice, schedule, education,
            ratingDoc, addressDoc, homepageURL);

        updateDoctor(iinNumber, updatedDoctor);
        
    }
    
    
    return(
        <div className="d_modification">
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

                <div className="contact-number">
                    <label className="form__label" htmlFor="contactNumber">Contact Number </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {contactNumber} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="contactNumber" placeholder="Contact Number"/>
                </div>

                <div className="department-id">
                    <label className="form__label" htmlFor="departmentID">Department ID </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {departmentID} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="departmentNumber" placeholder="Department ID"
                    />
                </div>

                <div className="specialization-details-id">
                    <label className="form__label" htmlFor="specDetID">Specialization ID </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {specDetID} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="specDetID" placeholder="Specialization details ID"
                    />
                </div>

                <div className="experience-years">
                    <label className="form__label" htmlFor="expYears">Experience in years </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {expYears} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="expYears" placeholder="Experience in years"
                    />
                </div>

                <div className="photo-of-doctor">
                    <label className="form__label" htmlFor="photoOfDoctor">Photo of the Doctor </label>
                    <input className="form__input" type="file" value = {photoOfDoctor} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="photoOfDoctor" placeholder="Photo of the Doctor"
                    />
                </div>

                <div className="category">
                    <label className="form__label" htmlFor="docCategory">Category </label>
                    <input className="form__input" type="text" value = {docCategory} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="docCategory" placeholder="Category of the Doctor "
                    />
                </div>

                <div className="price-of-appointment">
                    <label className="form__label" htmlFor="appPrice">Price of the Appointment </label>
                    <input className="form__input" type="text" pattern = "[0-9]*" value = {appPrice} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="appPrice" placeholder="Price of the Appointment"
                    />
                </div>

                <div className="schedule-details">
                    <label className="form__label" htmlFor="schedule">Schedule Details </label>
                    <input className="form__input" type="text" value = {schedule} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="schedule" placeholder="Schedule Details"
                    />
                </div>

                <div className="education-degree">
                    <label className="form__label" htmlFor="education">Education </label>
                    <input className="form__input" type="text" value = {education} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="education" placeholder="Education"
                    />
                </div>

                <div className="rating">
                    <label className="form__label" htmlFor="ratingDoc">Rating </label>
                    <input className="form__input" type="text" value = {ratingDoc} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="ratingDoc" placeholder="Rating"
                    />
                </div>

                <div className="address">
                    <label className="form__label" htmlFor="addressDoc">Address </label>
                    <input className="form__input" type="text" value = {addressDoc} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="addressDoc" placeholder="Address"
                    />
                </div>

                <div className="homepage-url">
                    <label className="form__label" htmlFor="homepageURL">Homepage URL </label>
                    <input className="form__input" type="text" value = {homepageURL} 
                        onChange = {(e) => handleInputChange(e)} 
                        id="homepageURL" placeholder="Homepage URL"
                    />
                </div>

            </div>
            
            <button onClick = {(e) => handleSubmit(e)} type="submit" className="btn">Register</button>
            
        </div>
    )
}
export default DoctorModification;