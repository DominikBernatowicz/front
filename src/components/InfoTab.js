import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    infoTab: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        marginTop: 50,
        marginBottom: 50,
        fontFamily: 'Comfortaa, sans-serif',
    },
    text: {
        textIndent: '30px'
    },
    p: {
        marginBottom: '20px'
    }
}));

const InfoTab = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.infoTab}>
            <Grid item md={10} xs={10} className={classes.column}>
                <Grid
                    item
                    className={classes.p}
                >
                    <h2>
                        Cel Projektu:
                    </h2>
                    <p className={classes.text}>
                        Optymalizacja wydajności ogniw fotowoltaicznych poprzez zdalne monitorowanie i sterowanie ich pozycjonowaniem.
                    </p>
                </Grid>
                <Grid
                    item
                    className={classes.p}
                >
                    <h2>
                        Technologie Wykorzystane w Projekcie:
                    </h2>
                    <ul>
                        <li>
                            Mikrokomputer Raspberry Pi 4 B jako centralna jednostka kontrolna.

                        </li>
                        <li>
                            Czujniki natężenia światła TSL25911 do pomiaru warunków oświetleniowych.

                        </li>
                        <li>
                            Moduły mikrokontrolera, takie jak Power Monitoring HAT i Servo PWM Pi Zero PCA9685, do efektywnego zarządzania pozycjonowaniem.

                        </li>
                        <li>
                            Serwo MG-90S do sterowania ruchem paneli fotowoltaicznych.

                        </li>
                        <li>
                            Ogniwa słoneczne 1W/6V 136x110x3mm AKU-03694 jako źródło energii.

                        </li>
                    </ul>
                </Grid>
                <Grid
                    item
                    className={classes.p}
                >
                    <h2>
                        Funkcje Kluczowe:
                    </h2>
                    <ul>
                        <li>
                            Zdalne zbieranie danych pomiarowych dotyczących natężenia światła.
                        </li>
                        <li>
                            Automatyczne dostosowywanie pozycji paneli fotowoltaicznych w oparciu o warunki oświetleniowe.
                        </li>
                        <li>
                            Wykorzystanie algorytmów sterowania do minimalizacji zużycia energii.
                        </li>
                        <li>
                            Możliwość zdalnej konfiguracji i monitorowania systemu poprzez aplikację webową.
                        </li>
                    </ul>
                </Grid>
                <Grid
                    item
                    className={classes.p}
                >
                    <h2>Korzyści:</h2>
                    <ul>
                        <li>
                            Zwiększenie efektywności ogniw fotowoltaicznych.
                        </li>
                        <li>
                            Minimalizacja wpływu zmian warunków atmosferycznych na wydajność systemu.
                        </li>
                        <li>
                            Łatwe zarządzanie i monitorowanie dzięki aplikacji webowej.
                        </li>
                        <li>
                            Potencjalne oszczędności energetyczne dzięki inteligentnemu pozycjonowaniu.
                        </li>
                    </ul>
                </Grid>
                <Grid
                    item
                    className={classes.p}
                >
                    <h2>
                        Oczekiwane Wyniki:
                    </h2>
                    <ul>
                        <li>
                            Zdolność systemu do utrzymania optymalnej orientacji paneli, co przekłada się na zwiększoną produkcję energii.
                        </li>
                        <li>
                            Dostarczenie narzędzia badawczego dla dalszych analiz dotyczących wpływu pozycjonowania na wydajność.
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default InfoTab;
