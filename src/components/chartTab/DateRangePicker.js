import {
    Grid,
    Typography,
    Button
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 15,
        fontFamily: 'Comfortaa, sans-serif',
    },
    d: {
        margin: 10
    },
    b: {
        margin: 10,
    }
}));

const DateRangePicker = ({ dateRange, setDateRange, onConfirm }) => {
    const classes = useStyles();

    const handleStartDateChange = (date) => {
        setDateRange({
            ...dateRange,
            dateFrom: date,
        });
    };

    const handleEndDateChange = (date) => {
        setDateRange({
            ...dateRange,
            dateTo: date
        });
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent='space-between' className={classes.container}>
                <Grid item xs={12} md={4} className={classes.d}>
                    <DatePicker
                        autoOk
                        label='Data początkowa'
                        variant="inline"
                        format="dd/MMM/yyyy"
                        ampm={false}
                        value={dateRange.dateFrom}
                        onChange={handleStartDateChange}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4} className={classes.d} >
                    <DatePicker
                        autoOk
                        label="Data końcowa"
                        variant="inline"
                        format="dd/MMM/yyyy"
                        ampm={false}
                        value={dateRange.dateTo}
                        onChange={handleEndDateChange}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={3} className={classes.b}>
                    <Button
                        variant="outlined"
                        size='large'
                        onClick={() => onConfirm(dateRange)}
                        endIcon={
                            <CloudDownloadIcon fontSize="large" />
                        }>
                        Pobierz wykres
                    </Button>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default DateRangePicker;