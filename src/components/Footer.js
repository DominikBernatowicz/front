import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#93A1B4',
    marginTop: 30,
    display: 'flex',
    minHeight: 200,
    boxShadow: '0px -5px 10px 3px rgba(0, 0, 0, 0.2)',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    marginLeft: 40
  },
  text: {
    margin: theme.spacing(0.3),
    fontFamily: 'Poppins, sans-serif', // Dodano właściwość fontFamily
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.footer}>
      {/* Pierwsza kolumna */}
      <Grid item md={7} xs={12} className={classes.column}>
        <p className={classes.text}>Autor: Dominik Bernatowicz</p>
        <p className={classes.text}>Nr. indeksu: 256863</p>
      </Grid>

      {/* Druga kolumna */}
      <Grid item md={4} xs={12} className={classes.column}>
        <p className={classes.text}>Uczelnia: Politechnika Wrocławska</p>
        <p className={classes.text}>Wydział: Elektryczny</p>
        <p className={classes.text}>Kierunek: Elektrotechnika</p>
      </Grid>
    </Grid>
  );
};

export default Footer;
