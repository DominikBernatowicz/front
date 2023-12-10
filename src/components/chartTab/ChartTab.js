import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Grid } from '@material-ui/core';
import LineChart from './LineChart';
import DateRangePicker from './DateRangePicker';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(() => ({
    chartTab: {
        fontFamily: 'Comfortaa, sans-serif',
    },
    customList: {
        listStyleType: 'none',
        padding: 0,
    },
    dot1: {
        color: '#028ffb',
        padding: 5
    },
    dot2: {
        color: '#00e396',
        padding: 5
    },
    p: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 40,
        marginBottom: 20
    }
}));

const ChartTab = ({ data, title, legend, dateRange, setDateRange, onConfirm, loading }) => {
    const classes = useStyles();

    return (
        <Grid
            className={classes.chartTab}
            item
            xs={11}
            md={11}
        >
            <DateRangePicker
                dateRange={dateRange}
                setDateRange={setDateRange}
                onConfirm={onConfirm}
            />
            <LineChart
                data={data}
                title={title}
            />
            <Grid
                item
                xs={11}
                md={11}
                className={classes.p}
            >
                <FiberManualRecordIcon
                    fontSize='small'
                    className={classes.dot1}
                />
                {legend} ogniwa fotowoltaicznego z pozycjonowaniem
            </Grid>
            <Grid
                item
                xs={11}
                md={11}
                className={classes.p}
            >
                <FiberManualRecordIcon
                    fontSize='small'
                    className={classes.dot2}
                />
                {legend} ogniwa fotowoltaicznego bez pozycjonowaniem
            </Grid>
        </Grid>
    );
};

export default ChartTab;
