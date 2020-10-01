import React, { useEffect, useState } from "react";
// import Footer from '../components/Footer/index';
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
  }, []); 

  function loadCards() {
    API.getAllRooms(userId)
      .then((res) => {
        if (res !== null) {
          console.log(res);
          setCards(res);        
        }
      })
      .catch((err) => console.log(err));
  }
  
  const handleLogOutRequest = (e) => {
    console.log("User trying to log out");
    API.outUser()
      .then((res) => {
        console.log(props);
        console.log(res);
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
                backgroundPosition: 'center'
            }}>
              <CardTitle><br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br></CardTitle>
              {/* <Button className="roomBtn"> */}
                <RoomModal value={card}>
                {/* {card.roomName} */}
                </RoomModal>
              {/* </Button> */}
            </Card>
          ))}
        </Wrapper>
      ) : (
        <>
        <div className="row">
        <div className="col-md-12 pageBreak">
          <h3>What a gorgeous empty lot!</h3>
            <Button class="roomBtn">
              <Link to="/survey">Click me to add rooms!</Link>
            </Button>
         </div>
         </div>
        </>
      )} 
      <div className="row">
        <div className="col-md-12 pageBreak">
           <h3 >Extras</h3>
        </div >
      </div>
      <Wrapper>
       <Card body inverse className="lastCard"
              style={{ 
                backgroundImage: `url(./assets/images/newHome.png)`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
              <CardTitle><br></br><br></br><br></br><br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br></CardTitle>
              
                <Link to="/survey">
                  <Button className="roomBtn">New floorplan? Retake the survey here</Button>
                </Link>
              
        </Card> 
        <Card body inverse className="lastCard"
              style={{ 
                backgroundImage: `url(./assets/images/homeValue.jpg)`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
              <CardTitle><br></br><br></br><br></br><br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br></CardTitle>
              
                <Link to="/value">
                  <Button className="roomBtn">Visit your home calculator</Button>
                </Link>
          </Card>   
        </Wrapper> 
        
    </>
  );
}