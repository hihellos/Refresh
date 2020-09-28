import React, { useEffect, useState } from 'react';
import NavBar from '../components/Nav'
import RoomBox from '..//components/RoomBox';
import Footer from '../components/Footer/index';
import API from '../utils/API';
import Cookies from 'js-cookie';

export default function Home(props) {
  const [cookies, setCookies] = useState();
  const [cookie, setCookie] = useState();

  useEffect(() => {
    onLoad();
  },[])

  function onLoad() {
    API.getJwt()
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const handleLogOutRequest = e => {
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
    <NavBar data={cookies} data2={cookie} logout={() => handleLogOutRequest()}/>
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