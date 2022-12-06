import React from "react";
import Nav from "../Nav/Nav";
import DoctorRegistration from "../admin/doctorRegistration";
import {Routes, Route} from "react-router-dom";
import PatientRegistration from "../admin/patientRegistration";
import DoctorModification from "../admin/doctorModification";
import PatientModification from "../admin/patientModification";
import DoctorView from "../admin/doctorView";
import {Container, Box} from '@mui/material';
import PatientView from "../admin/patientView";
import DoctorListPage from "../admin/DoctorListPage";
import SearchPage from "../admin/SearchPage";
import {Create} from "@mui/icons-material";
import CreateDoctor from "../admin/createDoctor";
import CreatePatient from "../admin/createPatient";
import ModifyPatient from "../admin/modifyPatient";

export const HOST = "https://backend.swe.works";
// export const HOST = "https://swe-backend.herokuapp.com";
// export const HOST = "https://localhost:3000";

export default function Home() {
    const [deptId, setDeptId] = React.useState(0);
    return (
        <div>
            <Nav deptId={deptId} setDeptId={setDeptId}/>
            <Box
                display="flex"
                justifyContent="center"
                minHeight="100vh"
            >
            {/*<Container fixed>*/}
                <Routes>
                    <Route
                        path="doctor-registration"
                        element={<CreateDoctor/>}
                    />
                    <Route
                        path="patient-registration"
                        element={<CreatePatient/>}
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
                    <Route path="patient-modification/:id" element={<ModifyPatient/>}/>
                    <Route path="doctor-modification/:id" element={<DoctorModification/>}/>
                    <Route path="search-page" element={<SearchPage/>}/>
                    <Route path="doctor-list/:dept_id" element={<DoctorListPage deptId={deptId}/>}/>
                </Routes>
            {/*</Container>*/}
            </Box>
        </div>
    )
}