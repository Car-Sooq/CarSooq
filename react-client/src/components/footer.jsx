import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Typography align="center" variant="subtitle1">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Car Sooq
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (

      <footer className={classes.footer} style = {{backgroundColor: "#080536", color: "white"}}>
        <Container maxWidth="sm">
          <Typography variant="body1">
              <h3>About Us</h3>
                <p> CarSooq team understands that buying a car is a significant
                    and impactful life decision. Therefore, we like to know our
                    customers and taking the time to build a meaningful, long-term
                    relationship. We interview our customers because we believe in
                    establishing or re-establishing a positive credit history, to
                    benefit them -not only on the short term- on the long term as
                    well.
                </p>
                <h5>Contact Us</h5>
                <h6>+962 7 9672 0978</h6>
                <h6>carsooq@join.com</h6>
          </Typography>
          <Copyright />
        </Container>
      </footer>

  );
}