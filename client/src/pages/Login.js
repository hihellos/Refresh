import React, { useState } from 'react';
import { Avatar, Button, Link, Grid, CssBaseline, TextField, Typography, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
// import Facebook from '../../src/components/Facebook/Facebook';
import API from '../utils/API';
import { useAppContext } from '../utils/AppContext';
import { useUserContext } from "../utils/UserContext";
// import RoomModal from '../components/Modal'

export default function Login(props) {
  const { setUserId } = useUserContext();
  const { userHasAuthenticated } = useAppContext();
  const [error, setError] = useState(
    {
      email: "",
      password: ""
    }
  );
  const [user, setUser] = useState(
    {
      email: "",
      password: ""
    }
  );

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value});
  }
  
  const handleLogInRequest = e => {
    e.preventDefault();
      API.getUser({
        email: user.email,
        password: user.password
      })
      .then(async res => {
        console.log(res);
        if (res.data.user !== undefined) {
          userHasAuthenticated(true);
          setUserId(res.data.user);
          props.history.push("/home");
        } else {
          if (res.data.errors.email !== "") {
            setError({...error, email: res.data.errors.email});
            await new Promise((resolve, reject) => setTimeout(resolve, 1500));
            setError({...error, email: ""});
          } 
          if (res.data.errors.password !== "") {
            setError({...error, password: res.data.errors.password});
            await new Promise((resolve, reject) => setTimeout(resolve, 1500));
            setError({...error, password: ""});
          }
        }
        console.log(`${res.data.user} has logged in`)
      })
      .catch(err => console.log(err));
    // }
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(./assets/images/LoginSignup.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 1),
    },
    signUp: {
      margin: theme.spacing(1, 0, 1),
    }
  }));

  const classes = useStyles();
  const routeChange = (e) => {
    props.history.push("/signup");
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar alt="Refresh Icon" src="./assets/images/logo100x100.png" className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            {(error.email !== "") ? (<Alert severity="error">
              {error.email}
            </Alert>) : (<div></div>)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            {(error.password !== "") ? (<Alert severity="error">
              {error.password}
            </Alert>) : (<div></div>)}
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              onClick={"YourFunctionHere"} */}
            {/* </Button> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogInRequest}
            >
              Sign In
            </Button>
            <Grid container justify={'center'}>
              <Grid item  className={classes.signUp}>
                <Link variant="body2" onClick={routeChange} >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>

            {/* <Facebook/>
            <Google/> */}

        </div>
      </Grid>
    </Grid>
  );
}