import React from "react";
import Nav from "../Nav/Nav";
import DoctorRegistration from "../admin/doctorRegistration";
import {Routes, Route} from "react-router-dom";
import PatientRegistration from "../admin/patientRegistration";
import DoctorModification from "../admin/doctorModification";
import PatientModification from "../admin/patientModification";
import DoctorView from "../admin/doctorView";
import {Container} from '@mui/material';
import PatientView from "../admin/patientView";
import DoctorListPage from "../admin/DoctorListPage";
import SearchPage from "../admin/SearchPage";

export default function Home() {
    let doctor = {
        dateOfBirth: '2000-06-12', iinNumber: '000612400567',
        firstName: 'Ardak', middleName: 'Bolatkyzy',
        lastName: 'Azamat', contactNumber: '+77479866889', departmentID: 'DEPT123',
        specDetID: 'SPEC675', expYears: '20', photoOfDoctor: '', docCategory: 'Highest',
        appPrice: '10000', schedule: 'MONWEDFRI', education: 'NUSOM',
        ratingDoc: '10', addressDoc: 'Kabanbay Batyr 35, Block 32, Apt. 913',
        homepageURL: 'densys.com/doctors/dept123/id'
    }

    let patient = {
        dateOfBirth: '2000-06-12', iinNumber: '000612400567',
        firstName: 'Ardak', middleName: 'Bolatkyzy',
        lastName: 'Azamat', bloodGroup: 'A+', emergencyContactNumber: '+77005553535',
        contactNumber: '+77479866889', email: 'ardakbolat@email.kz', addressP: 'Kabanbay Batyr 35, Block 32, Apt. 913',
        maritalStatus: 'single', dateOfReg: '2022-01-02'
    }

    return (
        <div>
            <Nav/>
            <Container fixed>
                <Routes>
                    <Route
                        path="doctor-registration"
                        element={<DoctorRegistration/>}
                    />
                    <Route
                        path="patient-registration"
                        element={<PatientRegistration/>}
                    />
                    <Route
                        path="doctor-modification"
                        element={<DoctorView/>}
                    />
                    {/*<Route*/}
                    {/*    path="doctor-modification"*/}
                    {/*    element={<DoctorModification theDoctor={doctor}/>}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path="patient-modification"*/}
                    {/*    element={<PatientModification thePatient={patient}/>}*/}
                    {/*/>*/}
                    <Route
                        path="patient-modification"
                        element={<PatientView/>}
                    />
                    <Route path="patient-modification/:id" element={<PatientModification/>}/>
                    <Route path="doctor-modification/:id" element={<DoctorModification/>}/>
                    <Route path="search-page" element={<SearchPage/>}/>
                    <Route path="doctor-list" element={<DoctorListPage/>}/>
                </Routes>
            </Container>
        </div>
    )
}