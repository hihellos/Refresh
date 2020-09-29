import React, { useState } from 'react';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import { Card, Button, CardBody, CardHeader, Form, FormGroup, Label, CustomInput} from "reactstrap";
import "./Home.css";

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

    const [roomSelected, setRoomSelected] = useState([]);

    const onCheckboxClicked = (selected) => {
        const index = roomSelected.indexOf(selected);
        if (index < 0) {
            roomSelected.push(selected);
        } else {
            roomSelected.splice(index, 1);
        }
        setRoomSelected([...roomSelected]);
        console.log(roomSelected);
    }

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
                                <CustomInput type="checkbox" id="kitchen" label="Kitchen" onClick={() => onCheckboxClicked("Kitchen")} active={roomSelected.includes("Kitchen")} inline/>
                                <CustomInput type="checkbox" id="bathroom" label="Bathroom" onClick={() => onCheckboxClicked("Bathroom")} active={roomSelected.includes("Bathroom")} inline/>
                                <CustomInput type="checkbox" id="bedroom" label="Bedroom" onClick={() => onCheckboxClicked("Bedroom")} active={roomSelected.includes("Bedroom")} inline/>
                                <CustomInput type="checkbox" id="laundry" label="Laundry Room" onClick={() => onCheckboxClicked("Laundry Room")} active={roomSelected.includes("Laundry Room")} inline/>
                                <CustomInput type="checkbox" id="living" label="Living Room" onClick={() => onCheckboxClicked("Living Room")} active={roomSelected.includes("Living Room")} inline/>
                                <CustomInput type="checkbox" id="basement" label="Basement" onClick={() => onCheckboxClicked("Basement")} active={roomSelected.includes("Basement")} inline/>
                            </div>
                            <br></br>
                        <Label>Exterior</Label>
                            <div>
                                <CustomInput type="checkbox" id="garage" label="Garage" onClick={() => onCheckboxClicked("Garage")} active={roomSelected.includes("Garage")} inline/>
                                <CustomInput type="checkbox" id="exterior" label="Exterior" onClick={() => onCheckboxClicked("Exterior")} active={roomSelected.includes("Exterior")} inline/>
                                <CustomInput type="checkbox" id="backyard" label="Backyard" onClick={() => onCheckboxClicked("Backyard")} active={roomSelected.includes("Backyard")} inline/>
                                <CustomInput type="checkbox" id="pool" label="Pool" onClick={() => onCheckboxClicked("Pool")} active={roomSelected.includes("Pool")} inline/>
                            </div>
                    </FormGroup>
                    <Button className="" size="lg" block>Take me Home!</Button>
                </Form>
            </CardBody>
        </Card>
        </>
    );
}

export default Survey;