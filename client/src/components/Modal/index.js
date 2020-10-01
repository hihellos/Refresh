import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Table } from 'reactstrap';

const RoomModal = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
//   const toggleAll = () => {
//     setNestedModal(!nestedModal);
//     setCloseAll(true);
//   }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{props.value.room}</Button>
      <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>{props.value.room} Checklist</ModalHeader>
            <ModalBody>
                        <Table>
                        <thead>
                            <tr>
                            <th>Complete</th>
                            <th>Task</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {props.value[0].map((task) => (
                                <tr>
                                  <td>{task.isFixed}</td>
                                  <td>{task.taskName}</td>
                                </tr>
                            ))}
                        </tbody>  */}
                        </Table>
                <br />
            <Button color="success" onClick={toggleNested}>Add Task</Button>
                    <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>New Task:</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="text" id="newTask" />
                                </FormGroup>
                            </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleNested}>Save</Button>{' '}
                            <Button color="secondary" onClick={toggleNested}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </ModalBody>
          <ModalFooter>
                <Button color="primary" onClick={toggle}>Save</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
      </Modal>
    </div>
  );
}

export default RoomModal;