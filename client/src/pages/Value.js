import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Box } from '@material-ui/core';
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import Orders from '../components/Orders';
import Navbar from '../components/Nav';
import "./Value.css";
import Copyright from '../components/Copyright';
import { useUserContext } from "../utils/UserContext";
import { useCardContext } from '../utils/CardContext';
import { useAppContext } from '../utils/AppContext';
import API from '../utils/API';

export default function Dashboard(props) {
  const { userId } = useUserContext();
  const { userHasAuthenticated } = useAppContext();
  const { cards } = useCardContext();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleLogOutRequest = (e) => {
    API.outUser()
      .then((res) => {
        if (res.status === 200) {
          userHasAuthenticated(false);
          props.history.push("/");
        }
        console.log(`Status:${res.status} Successfully Logged Out`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <> 
    <Navbar logout={handleLogOutRequest}/>
    <div className="wrapper" style={{backgroundColor:'#fafafa'}}>
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders value={cards}/>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    </div>
    </>
  );
}