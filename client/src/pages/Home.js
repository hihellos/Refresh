import React from 'react';
import NavBar from '../components/Nav'
import RoomBox from '..//components/RoomBox';
import Footer from '../components/Footer/index';

export default function Home() {
  return (
    <>
    <h3>NAV BAR WILL RENDER AT TOP<br />
    <NavBar/>
    GRID FOR ROOMS <br />
    FOOTER</h3>
    //navbar - transparent with button in the middle, button to the left that goes to the calculator

    //square grid
    //each square is a room box component
 
    // <RoomBox>Room info</RoomBox>
    <Footer/>
    </>
  )
}