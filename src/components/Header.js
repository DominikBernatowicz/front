import React from 'react';
import {
    Grid,
    Button,
    Tabs, Tab
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FunctionsIcon from '@material-ui/icons/Functions';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: '#93A1B4',
        marginTop: 30,
        display: 'flex',
        boxShadow: '0px 5px 10px 3px rgba(0, 0, 0, 0.2)',
    },
    logo: {
        marginRight: '5%',
        marginBottom: 40,
        maxWidth: '95%',
        maxHeight: '100%',
    },
    button: {
        justifyContent: 'center',
    },
    tabs: {
        maxWidth: '94%'
    }
}));

const Header = ({ tab, setTab }) => {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Grid
            container
            className={classes.header}
            justifyContent="center"
        >
            <Grid item md={12} xs={12}>
                <img
                    src="/logoPWr.png"
                    alt="Logo Politechniki Wrocławskiej"
                    className={classes.logo}
                />
            </Grid>
            <Grid
                item
                className={classes.tabs}
            >
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="icon position tabs example"
                    // centered
                >
                    <Tab icon={<InfoIcon />} label="Główne informacje" />
                    <Tab icon={<AssessmentIcon />} label="Przebieg napięcia" />
                    <Tab icon={<AssessmentIcon />} label="Przebieg prądu" />
                    <Tab icon={<AssessmentIcon />} label="Przebieg mocy" />
                    <Tab icon={<FunctionsIcon />} label="Streszczenie" />
                </Tabs>
            </Grid>
        </Grid>
    );
};

export default Header;
