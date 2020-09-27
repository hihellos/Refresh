import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
import Copyright from '../Copyright/index'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  // footer: {
  //   // marginTop: "calc(10% + 60px)",
  //   padding: "10px",
  //   // top: "auto",
  //   bottom: 0,
  //   // display: "flex",
  //   // minHeight: "100vh",
  //   // flexDirection: "column",
  //   backgroundColor:
  //     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  // },
}));

const classes = useStyles();

export default function StickyFooter() {
  

  return (
    <AppBar position={'fixed'} color={'primary'} className='classes.appBar'>
      <Toolbar>
         <Copyright />
      </Toolbar>
    </AppBar>
    // <div>
    //   <footer className={classes.footer}>
    //     <Container text-align={"center"} position={"sticky"} bottom={"0"} display={"flex"} min-height={"100vh"} flex-direction={"column"}>
    //       <Copyright />
    //     </Container>
    //   </footer>
    // </div>
  );
}