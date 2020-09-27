import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright/index'

const useStyles = makeStyles((theme) => ({

  footer: {
    marginTop: "calc(10% + 60px)",
    padding: "10px",
    position: "sticky",
    bottom: 0,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Container text-align={"center"} position={"sticky"} bottom={"0"} display={"flex"} min-height={"100vh"} flex-direction={"column"}>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}