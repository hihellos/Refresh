//button that returns user to home screen

//dashboard

//long horizontal graph displaying change over time

//square at top for score

//squares along bottom with whatever stats we can pull from data

import React from 'react';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import {Row} from '../components/Grid';
import { Card, Button, CardTitle} from "reactstrap";
import "./Home.css";
import Wrapper from "../components/Wrapper";

function Value(props) {

    const handleLogOutRequest = (e) => {
        console.log("User trying to log out");
        API.outUser()
          .then((res) => {
            console.log(props);
            console.log(res);
            if (res.status === 200) {
              props.history.push("/");
            }
            console.log(`Status:${res.status} Successfully Logged Out`);
          })
          .catch((err) => console.log(err));
      };

    return(
        <>
        <Navbar logout={() => handleLogOutRequest()} />
        </>
    ); 
}

export default Value;
