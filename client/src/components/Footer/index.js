import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../Copyright';

export default function StickyFooter() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '0vh',
      backgroundColor: '#ffffff',
    },
    main: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      backgroundColor: '#ffffff',
    },
    footer: {
      padding: theme.spacing(2, 2),
      marginTop: 'auto',
      backgroundColor: 
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
      </Container>
      <footer className={classes.footer}>
        <Container>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}