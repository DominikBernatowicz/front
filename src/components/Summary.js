import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    infoTab: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        marginTop: 50
    },
    h: {
        fontFamily: 'Comfortaa, sans-serif',
    },
    text: {
        fontFamily: 'Comfortaa, sans-serif',
        textIndent: '30px'
    },
}));

const Summary = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.infoTab}>
            <Grid item md={10} xs={10} className={classes.column}>
                <h1 className={classes.h}>
                    Streszczenie pracy dyplomowej
                </h1>
                <Grid item md={12} xs={12}>
                    <p className={classes.text}>
                        W niniejszej pracy inżynierskiej skoncentrowano się na kompleksowym podejściu do zagadnienia ogniw fotowoltaicznych, ze szczególnym uwzględnieniem mechanizmu pozycjonowania paneli fotowoltaicznych. Wprowadzenie zawiera określenie celu i zakresu pracy, wskazując na kluczowe zagadnienia związane z konwersją energii słonecznej na energię elektryczną.
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <p className={classes.text}>
                        W drugim rozdziale omówiono zasady działania ogniw fotowoltaicznych, skupiając się na zjawisku fotowoltaicznym. Przeanalizowano rolę materiałów półprzewodnikowych, zjawisko konwersji światła na energię elektryczną, oraz przedstawiono podstawowe rodzaje ogniw fotowoltaicznych. Rozważono również czynniki wpływające na sprawność ogniwa, takie jak parametry zewnętrzne, właściwości materiałowe i straty wewnętrzne.
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <p className={classes.text}>
                        Trzeci rozdział poświęcono mechanizmowi pozycjonowania paneli fotowoltaicznych. Klasyfikacja, budowa i zasada działania tego mechanizmu zostały przedstawione w kontekście wpływu na wydajność ogniw. W szczególności omówiono ramę podtrzymującą panele, oś obracającą, silnik i układ napędowy, czujniki światła oraz sterownik. Przedstawiono także różne algorytmy sterowania, takie jak zegarowe, czujnikowe i hybrydowe.
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <p className={classes.text}>
                        W części sprzętowej systemu badawczego (rozdział czwarty), wskazano kluczowe elementy, takie jak mikrokontroler Raspberry Pi 4 B, sensory pomiarowe, moduły mikrokontrolera, napęd sterujący oraz panele fotowoltaiczne. Opisano zastosowanie każdego z tych elementów w kontekście zdalnego monitorowania i sterowania pozycjonowaniem ogniw fotowoltaicznych.
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <p className={classes.text}>
                        Rozdział piąty poświęcono oprogramowaniu mikrokontrolera, ze szczególnym naciskiem na skuteczne sterowanie i monitorowanie pozycjonowania paneli fotowoltaicznych. Oprogramowanie to odgrywa kluczową rolę w precyzyjnej kontroli nad mechanizmem śledzącym oraz w zbieraniu danych pomiarowych. Szczegółowo omówiono interfejsy, protokoły komunikacyjne i algorytmy używane do sterowania i monitorowania.
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <p className={classes.text}>
                        Kolejny rozdział skupił się na zdalnym zbieraniu danych pomiarowych, przedstawiając koncepcję i elementy systemu umożliwiającego skuteczne monitorowanie i analizę parametrów pracy ogniw fotowoltaicznych. W tym kontekście zaprezentowano również aplikację webową, która będzie oparta na technologii React, umożliwiającą łatwy dostęp i zarządzanie danymi.
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <p className={classes.text}>
                        W ostatnim rozdziale przedstawiono całościowe podsumowanie pracy, podkreślając kluczowe wyniki, wnioski i potencjalne obszary dalszych badań. Praca stanowi kompleksowe spojrzenie na zagadnienie ogniw fotowoltaicznych, integrując aspekty teoretyczne, praktyczne i technologiczne.
                    </p>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Summary;
