import * as React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container, CssBaseline,
    FormControlLabel,
    TextField,
    ThemeProvider
} from "@mui/material";

import { setAuthToken } from "../helpers/setAuthToken";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {HOST} from "../Home/Home";

export function useAuth() {
    const getAuth = () => {
        const isAuth = localStorage.getItem('Auth');
        return isAuth
    };

    const [isAuth, setAuth] = React.useState(getAuth());

    const saveAuth = isAuth => {
        localStorage.setItem('Auth', true);
        setAuth(isAuth);
    };

    return {
        setAuth: saveAuth,
        isAuth
    }
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {/*TODO change href*/}
            <Link color="inherit" href="src/components/Login/Login">
                Densys
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

async function loginUser(credentials) {
    return fetch('https://backend.swe.works/sign-in', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
    }).then(res => {
        console.log(res.json()); // undefined
        localStorage.setItem("isAuth", true)
    });
}

export default function Login() {
    const navigate = useNavigate()
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))

    if (isAuth) {
        // window.location.href = '/admin-page'
        navigate("/admin-page")
    }
    // let emailValid = false;
    // let emailClicked = false;
    const handleSubmit = async event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const loginPayload = {
            login: data.get('login'),
            password: data.get('password')
        }
        console.log(loginPayload)
        await loginUser(loginPayload);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">

                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="login"
                            name="login"
                            autoComplete="login"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="src/components/Login/Login#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}