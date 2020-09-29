import React from 'react';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import {Row} from '../components/Grid';
import { Card, Button, CardTitle, CardBody, CardHeader, Form, FormGroup, Label, Input, CustomInput} from "reactstrap";
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
        <Card style={{ width: '50rem'}} >
            <CardHeader><h2>Select the rooms in your home floor plan:</h2></CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label>Interior</Label>
                            <div>
                                <CustomInput type="checkbox" id="kitchen" label="Kitchen" inline/>
                                <CustomInput type="checkbox" id="bathroom" label="Bathroom" inline/>
                                <CustomInput type="checkbox" id="bedroom" label="Bedroom" inline/>
                                <CustomInput type="checkbox" id="laundry" label="Laundry Room" inline/>
                                <CustomInput type="checkbox" id="living" label="Living Room" inline/>
                                <CustomInput type="checkbox" id="basement" label="Basement" inline/>
                            </div>
                            <br></br>
                        <Label>Exterior</Label>
                            <div>
                                <CustomInput type="checkbox" id="garage" label="Garage" inline/>
                                <CustomInput type="checkbox" id="exterior" label="Exterior" inline/>
                                <CustomInput type="checkbox" id="backyard" label="Backyard" inline/>
                                <CustomInput type="checkbox" id="pool" label="Pool" inline/>
                            </div>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
        </>
    );
}

export default Survey;