import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {useNavigate} from "react-router-dom";
import {FormControl, InputLabel, Select} from "@mui/material";
import {useEffect, useRef} from "react";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const pages = ['Add Doctor', "Add Patient", "Modify Doctor", "Modify Patient", "View Doctors", "Search"];
const mapPageToLink = {
    "Add Doctor": "/admin-page/doctor-registration",
    "Add Patient": "/admin-page/patient-registration",
    "Modify Doctor": "/admin-page/doctor-modification",
    "Modify Patient": "/admin-page/patient-modification",
    "View Doctors": "/admin-page/doctor-list",
    "Search": "/admin-page/search-page"
}

function Nav(props) {
    const navigate = useNavigate()

    const [depts, setDepts] = React.useState([]);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElDepartments, setAnchorElDepartments] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleOpenDepartmentsMenus = (event) => {
        setAnchorElDepartments(event.currentTarget);
    }

    const handleCloseDepartmentsMenus = (event) => {
        setAnchorElDepartments(null);
    }

    const handleCloseNavMenu = (page) => {
        navigate(mapPageToLink[page])
        // window.location.href = mapPageToLink[page]
    };

    const handleClickLink = (page) => {
        navigate(mapPageToLink[page])
    };

    const handleCloseUserMenu = (setting) => {
        if (setting === "Logout") {
            localStorage.removeItem("token")

            navigate("/login")
            // window.location.href = "/login"
        }
        setAnchorElUser(null);
    };

    useEffect(() => {
        fetch(`http://swe-backend.herokuapp.com/doctors/departments`)
            .then(response => response.json())
            .then(data => {
                setDepts(prevState => (
                    [
                        ...data.data.departments
                    ]
                ));
            });
    }, [anchorElDepartments])


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                    <LocalHospitalIcon/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Densys
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleClickLink.bind(this, page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleClickLink.bind(this, page)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button title="Departments" sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={handleOpenDepartmentsMenus}>
                            Departments
                        </Button>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElDepartments}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElDepartments)}
                            onClose={handleCloseDepartmentsMenus}
                        >
                            {Array.from(depts.map((dept, index) => (
                                <MenuItem key={dept.department_id} onClick={(e) => {
                                    navigate("/admin-page/doctor-list/" + dept.department_id)
                                    props.setDeptId(dept.department_id)
                                }}>
                                    <Typography textAlign="center">{dept.department_name}</Typography>
                                </MenuItem>
                            )))}

                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu.bind(this, setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;
