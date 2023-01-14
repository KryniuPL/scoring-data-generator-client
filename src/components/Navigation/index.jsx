import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';

const pages = [
    {
        name: 'Documentation',
        link: 'https://github.com/KryniuPL/scoring-data-generator'
    },
    {
        name: 'Github',
        link: 'https://github.com/KryniuPL/scoring-data-generator'
    },
    {
        name: 'Author',
        link: 'https://www.linkedin.com/in/chris-dragan/'
    },
    {
        name: 'Kafka UI',
        link: 'http://localhost:8080/'
    },
    {
        name: 'Kafka OWL',
        link: 'http://localhost:9000/'
    },
];

export const Navigation = () => (
    <AppBar position="static" style={{backgroundColor: 'rgb(34, 43, 54)'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <DataThresholdingIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
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
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Credit Scoring Data Generator
                </Typography>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    {pages.map(page => (
                        <MenuItem
                            key={page.name}
                            href={page.link}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            <a href={page.link} style={{color: 'rgb(140, 163, 186)', textDecoration: 'none'}}>
                                {page.name}
                            </a>
                        </MenuItem>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
);
