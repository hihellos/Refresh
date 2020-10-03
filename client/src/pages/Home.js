import React, { useEffect, useState } from "react";
import Footer from '../components/Footer/index';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import { Card, Button, CardTitle} from "reactstrap";
import "./Home.css";
import Wrapper from "../components/Wrapper";
import { useAppContext } from '../utils/AppContext';
import { useUserContext } from "../utils/UserContext";
import RoomModal from '../components/Modal';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const { userId } = useUserContext();
  const { userHasAuthenticated } = useAppContext();
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    loadCards();
  }); 

  function loadCards() {
    API.getAllRooms(userId)
      .then((res) => {
        if (res.data !== null) {
          setCards(res.data);        
        }
      })
      .catch((err) => console.log(err));
  }
  
  const handleLogOutRequest = (e) => {
    console.log("User trying to log out");
    API.outUser()
      .then((res) => {
        // console.log(props);
        // console.log(res);
        if (res.status === 200) {
          userHasAuthenticated(false);
          props.history.push("/");
        }
        console.log(`Status:${res.status} Successfully Logged Out`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar logout={handleLogOutRequest} />
      <div className="row">
        <div className="col-md-12 pageBreak">
         <span className="header">Refresh</span>
        </div >
      </div>
      {cards.length ? (
        <Wrapper>
          {cards.map((card) => (
              <Card body inverse key={card._id}
              style={{ 
                backgroundImage: `url(${card.image})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '201px',
                maxWidth: '300px'
            }}>
              <CardTitle></CardTitle>
                <RoomModal value={card}>
                </RoomModal>
            </Card>
          ))}
        </Wrapper>
      ) : (
        <>
        <div className="row">
        <div className="col-md-12 pageBreak">
          <h3>What a gorgeous empty lot!</h3>
            <Link to="/survey">
              <Button className="roomBtn">Click me to add rooms!</Button>
            </Link>
         </div>
         </div>
        </>
      )} 
      <div className="row">
        <div className="col-md-12 pageBreak">
          {/* <img src="https://imgp.whaleshares.io/pimgp/a/adsactly/p/adsactly-game-review-unravel/0x0/https://steemitimages.com/DQmbcdMJV1UbtTxgv6ocTG4vrZ6inX89rJSBywwNQPikmzR/Line%20Break.png" alt="Line Break.png" style={{opacity:'5%'}}/> */}
        </div >
      </div>
      <Wrapper>
       <Card body inverse className="lastCard"
              style={{ 
                backgroundImage: `url(./assets/images/newHome1.jpg)`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '260px',
                maxWidth: '385px'
            }}>
                <Link to="/survey">
                  <Button style={{backgroundColor:"#FF6F5B", borderColor: "#FF6F5B"}}>New floorplan? Retake the survey</Button>
                </Link>
              
        </Card> 
        <Card body inverse className="lastCard"
              style={{ 
                backgroundImage: `url(./assets/images/homeValue.jpg)`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '260px',
                maxWidth: '385px'
          
            }}>              
                <Link to="/value">
                  <Button style={{backgroundColor:"#FF6F5B",borderColor:"#FF6F5B"}} className="roomBtn">Visit your home calculator</Button>
                </Link>
          </Card>   
        </Wrapper> 
        <Footer/>
    </>
  );
}