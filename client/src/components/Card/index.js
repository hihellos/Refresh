import React from 'react';
import { Card, Button, CardImg, CardImgOverlay } from 'reactstrap';

const RoomCard = (props) => {
  return (
    <Card inverse>
        <CardImg width="100%" src={props.image} alt="Room image" />
        <CardImgOverlay>
        </CardImgOverlay>
        <Button>{props.title}</Button>
    </Card>
  );
};

export default RoomCard;