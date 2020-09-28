import React from 'react';
import {CardDeck} from 'reactstrap';
import { Card, Button, CardImg, CardImgOverlay } from 'reactstrap';

export function CardGrid({ children }) {
    return (
      <CardDeck>
        <RoomCard/>        
      </CardDeck>
    );
  };
  

export function RoomCard({children}) {
  return (
    <Card>
       {children}
    </Card>
  );
};