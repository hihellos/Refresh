import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

// const timeElapsed = Date.now();
const today = new Date();

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Home Value Score</Title>
      <Typography component="p" variant="h4">
        74
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <div>
        {today.toDateString()}
        </div>
      </Typography>
      <div>
       
      </div>
    </React.Fragment>
  );
}