import React, { useState } from 'react';
import { Avatar, Button, Link, Grid, CssBaseline, TextField, Typography, Paper} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Facebook from '../../src/components/Facebook/Facebook';
import API from '../utils/API';
import { useAppContext } from '../utils/AppContext';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
  const { userHasAuthenticated } = useAppContext();
  const [user, setUser] = useState(
    {
      email: "",
      password: ""
    }
  )

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value});
  }
  
  const handleLogInRequest = e => {
    e.preventDefault();
    console.log('user submitted');
    if (user.email && user.password) {
      API.getUser({
        email: user.email,
        password: user.password
      })
      .then(res => {
        if (res.status === 200) {
          userHasAuthenticated(true)
          props.history.push("/home");
          // <Redirect to="/home" />
        }
        console.log(`${res.data.user} has logged in`)
      })
      .catch(err => console.log(err));
    }
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {/* onClick={"YourFunctionHere"} */}
            <Facebook/>
          </Button>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {/* onClick={"YourFunctionHere"} */}
            Login with GitHub
          </Button>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {/* onClick={"YourFunctionHere"} */}
            Login with Google
          </Button>
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
                <Link href="/signup" variant="body2" >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}