import React from 'react';
import NavBar from '../components/Nav'
import RoomBox from '..//components/RoomBox';
import Footer from '../components/Footer/index';
import API from '../utils/API';

export default function Home(props) {
  const handleLogOutRequest = e => {
    e.preventDefault();
    console.log('User trying to log out');
      API.outUser()
      .then(res => {
        console.log(props)
        console.log(res)
        if (res.status === 200) {
          props.history.push("/");
        }
        console.log(`Status:${res.status} Successfully Logged Out`)
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <h3>NAV BAR WILL RENDER AT TOP<br />
    <NavBar logout={handleLogOutRequest}/>
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