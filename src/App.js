import {
    Container,
    Grid,
} from '@material-ui/core';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoTab from './components/InfoTab';
import Summary from './components/Summary';
import React, { useEffect, useState } from 'react';
import ChartTab from './components/chartTab/ChartTab';
import moment from 'moment';

const firstData = [
    {
        u1: 0,
        u2: 0,
        i1: 0,
        i2: 0,
        p1: 0,
        p2: 0,
        timestamp: null
    }
];

const App = () => {

    const [tab, setTab] = useState(0);
    const [dateRange, setDateRange] = useState({
        dateForm: new Date,
        dateTo: new Date,
    })

    const [loading, setLoading] = useState(false)

    const [chartData, setChartData] = useState(firstData)
    const [chartU, setChartU] = useState(firstData.map(({ timestamp, u1, u2 }) => ({ timestamp, u1, u2 })));
    const [chartI, setChartI] = useState(firstData.map(({ timestamp, i1, i2 }) => ({ timestamp, i1, i2 })));
    const [chartP, setChartP] = useState(firstData.map(({ timestamp, p1, p2 }) => ({ timestamp, p1, p2 })));

    const getTab = async (range) => {
        setLoading(true);
    
        let dateFrom = `dateFrom=${moment(range.dateFrom).format('YYYY-MMM-DD')}`;
        let dateTo = `&dateTo=${moment(range.dateTo).format('YYYY-MMM-DD')}`;
        let filterDate = dateFrom + dateTo;
    
        try {
            const response = await fetch(`http://34.118.66.141/data?${filterDate}`);
            const jsonData = await response.json();
    
            // Sprawdź, czy otrzymana odpowiedź jest tablicą
            if (Array.isArray(jsonData)) {
                setChartData(jsonData);
            } else {
                // Jeśli nie jest tablicą, przekształć ją na tablicę
                setChartData([jsonData]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        setChartU(
            chartData.map(({ timestamp, u1, u2 }) => ({ timestamp, u1, u2 }))
        );
        setChartI(
            chartData.map(({ timestamp, i1, i2 }) => ({ timestamp, i1, i2 }))
        );
        setChartP(
            chartData.map(({ timestamp, p1, p2 }) => ({ timestamp, p1, p2 }))
        );
    }, [chartData])

    return (
        <Container
            style={{
                backgroundColor: "#f8f7ff",
                minHeight: '100%',
                maxWidth: "1000px",
                justifyContent: 'center',
                boxShadow: '0px 5px 30px 3px rgba(0, 0, 0, 0.2)',
                margin: 'auto',
                padding: 0
            }}
        >
            <Header tab={tab} setTab={setTab} />
            <Grid
                container
                justifyContent='center'
            >
                {tab === 0 ? <InfoTab /> : ""}
                {tab === 1 ?
                    <ChartTab
                        data={chartU}
                        title="Generowane napięcie"
                        legend="Napięcie"
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                        onConfirm={getTab}
                        loading={loading}
                    /> : ""
                }
                {tab === 2 ?
                    <ChartTab
                        data={chartI}
                        title="Generowany prąd"
                        legend="Prąd"
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                        onConfirm={getTab}
                        loading={loading}
                    /> : ""
                }
                {tab === 3 ?
                    <ChartTab
                        data={chartP}
                        title="Generowana moc"
                        legend="Moc"
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                        onConfirm={getTab}
                        loading={loading}
                    /> : ""
                }
                {tab === 4 ? <Summary /> : ""}
            </Grid>
            <Footer />
        </Container>
    );
};

export default App;
