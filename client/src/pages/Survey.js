import React from 'react';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import {Row} from '../components/Grid';
import { Card, Button, CardTitle} from "reactstrap";
import "./Home.css";
import Wrapper from "../components/Wrapper";

function Survey(props) {

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
        <Row>
            <Col-md>
            Select the rooms in your home floor plan:
            
            </Col-md>
        </Row>
        </>
    );
}

export default Survey;