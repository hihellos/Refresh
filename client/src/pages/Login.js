import React, { useState } from 'react';
import { Avatar, Button, Link, Grid, CssBaseline, TextField, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Facebook from '../../src/components/Facebook/Facebook';
import API from '../utils/API';
import StickyFooter from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  link: {
    margin: theme.spacing(1, 0, 1)
  }
}));

export default function Login(props) {
  const [user, setUser] = useState(
    {
      email: "",
      password: ""
    }
  )

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('user input', name, value);
    setUser({...user, [name]: value});
    console.log('user is', user);
  }
  
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('user submitted');
    if (user.email && user.password) {
      API.getUser({
        email: user.email,
        password: user.password
      })
      .then(res => {
        if (res.status === 200) {
          props.history.push("/home");
        }
        console.log(res)
      })
      .catch(err => console.log(err));
    }
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
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
            color="secondary"
            className={classes.submit}
            onClick={handleFormSubmit}>
          <Facebook/>
        </Button>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleFormSubmit}>
          Login with GitHub
        </Button>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleFormSubmit}>
          Login with Google
        </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleFormSubmit}
          >
            Sign In
          </Button>
          <Grid container justify="center">
            <Grid item>
              <div className={classes.link}>
              <Link href="#" variant="body2" color="initial">
                {"Don't have an account? Sign Up"}
              </Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
      <StickyFooter/>
    </Container>
  );
}