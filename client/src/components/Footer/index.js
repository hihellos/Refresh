import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright/index'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '35vh',
  },
  main: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
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
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}