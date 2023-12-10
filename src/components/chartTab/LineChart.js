import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const LineChart = ({ data, title, loading }) => {
    const transformData = (data) => {
        const categories = data.map((item) => new Date(item.timestamp).getTime());
    
        const series = Object.keys(data[0])
            .filter((key) => key !== 'timestamp')
            .map((key) => ({
                name: key.toUpperCase(),
                data: data.map((item) => ({ x: new Date(item.timestamp).getTime(), y: parseFloat(item[key]) })),
            }));
    
        return { categories, series };
    };
    
    const { categories, series } = transformData(data);

    const options = {
        chart: {
            id: 'line-chart',
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 35,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                },
                autoSelected: 'zoom',
            },
        },
        xaxis: {
            type: 'datetime',
            categories: categories, // Użyj kategorii daty
        },
        legend: {
            show: false,
            position: 'bottom',
            fontSize: '14px',
            fontFamily: 'Poppins, sans-serif',
            onItemClick: {
                toggleDataSeries: false,
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: '20px',
            },
        },
        series: series,
        stroke: {
            curve: 'smooth',
        },
    };

    return (
        <div style={{
            marginRight: 10
        }}>
            {!loading ?
                <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={350}
                /> :
                <>
                    <Grid style={{
                        margin: 150,
                    }}>
                        <LinearProgress />
                        <LinearProgress />
                    </Grid>
                </>
            }
        </div>
    );
};

export default LineChart;
