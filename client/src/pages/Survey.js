import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import { Card, Button, CardBody, CardHeader, Form, FormGroup, Label, CustomInput} from "reactstrap";
import "./Home.css";
import { useUserContext } from "../utils/UserContext";

function Survey(props) {
    const { userId } = useUserContext();
    const [preset, setPreset] = useState([]);
    const [roomSelected, setRoomSelected] = useState([]);

    useEffect(() => {
        renderRooms();
    }, []);

    const renderRooms = () => {
        API.getSeededRooms()
        .then(res => {
            // console.log(res);
            setPreset(res.data);
        })
        .catch(err => console.log(err));
    }

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

    function handleChange({ target }) {
        const value = target.name;
        const presetChoice = preset.filter(e => e.roomName === value); // check preset
        const valueFilter = roomSelected.filter(e => e.roomName === value)

        if (valueFilter.length === 0) {
            setRoomSelected([...roomSelected,
                {
                    // _id: presetChoice[0]._id,
                    roomName: presetChoice[0].roomName,
                    image: presetChoice[0].image,
                    tasks: presetChoice[0].tasks
                }
            ])
        } else {
            const without = roomSelected.filter(e => e.roomName !== value)
            setRoomSelected(without);
        }
    }

    const handleSubmitRequest = (e) => {
        e.preventDefault();
        console.log('hanldeSubmitRequest', roomSelected);
        API.saveUserRooms(userId, roomSelected)
        .then(res => {
            console.log('handleSubmitRequest API return', res)
        })
        .catch(err => console.log(err));
    }

    return(
        <>
        <Navbar logout={() => handleLogOutRequest()} />
        <Card style={{ width: '50rem'}} >
            <CardHeader><h2>Select the rooms in your home floor plan:</h2></CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label>Options</Label>
                            <div>
                                {preset.map((preset) => (
                                    <CustomInput 
                                    type="checkbox" 
                                    id={preset.roomName} 
                                    key={preset._id}
                                    label={preset.roomName}
                                    name={preset.roomName}
                                    onClick={handleChange}
                                    />
                                ))}
                            </div>
                    </FormGroup>
                    <Button 
                    className="" 
                    size="lg" 
                    block
                    onClick={handleSubmitRequest}
                    >Take me Home!
                    </Button>
                </Form>
            </CardBody>
        </Card>
        </>
    );
}

export default Survey;