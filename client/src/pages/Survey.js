import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import { Card, Button, CardBody, CardHeader, Form, FormGroup, Label, CustomInput} from "reactstrap";
import "./Home.css";

function Survey(props) {

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

    // function handleChange(event) {
    //     const value = event.target.name;
    //     console.log(roomSelected);
    //     setRoomSelected([...roomSelected, {name: value}]);
    // }

    function handleChange({ target }) {
        const value = target.name;
        const presetChoice = preset.filter(e => e.roomName === value); // check preset
        const valueFilter = roomSelected.filter(e => e.roomName === value)
        if (valueFilter.length === 0) {
            setRoomSelected([...roomSelected,
                {
                    // _id: presetChoice[0]._id,
                    roomName: presetChoice[0].roomName,
                    images: presetChoice[0].image,
                    tasks: presetChoice[0].tasks
                }
            ])
        } else {
            const without = roomSelected.filter(e => e.roomName !== value)
            setRoomSelected(without);
        }
        console.log(roomSelected);
    }

    const onButtonClick = (e) => {
        e.preventDefault();
        console.log('button clicked');
        
    }
    // const onCheckboxClicked = (selected) => {
    //     const index = roomSelected.indexOf(selected);
    //     if (index < 0) {
    //         roomSelected.push(selected);
    //         // API.saveRooms({
                
    //         // })
    //     } else {
    //         roomSelected.splice(index, 1);
    //     }
    //     setRoomSelected([...roomSelected]);
    //     console.log(roomSelected);
    // }

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
                                    // active={handleChange()}
                                    // onClick={() => onCheckboxClicked({preset.roomName})} 
                                    // active={setRoomSelected(preset.roomName)} 
                                    />
                                ))}
                            </div>
                    </FormGroup>
                    <Button 
                    className="" 
                    size="lg" 
                    block
                    onClick={onButtonClick}
                    >Take me Home!
                    </Button>
                </Form>
            </CardBody>
        </Card>
        </>
    );
}

export default Survey;