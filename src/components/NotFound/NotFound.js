import React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {purple} from "@mui/material/colors";

export default function NotFound() {
    const primary = purple[500]; // #f44336
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: primary,
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
        </Box>
    )
}