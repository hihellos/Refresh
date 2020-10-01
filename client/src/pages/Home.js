import React, { useEffect, useState } from "react";
// import Footer from '../components/Footer/index';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
import {Row} from '../components/Grid';
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
    onLoad();
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

  function onLoad() {
    userHasAuthenticated(true);
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
      <Row>
        <Col-md>
           <h3 className="pageBreak">Refresh Your Home</h3>
        </Col-md>
      </Row>
      {cards.length ? (
        <Wrapper>
          {cards.map((card) => (
              <Card body inverse key={card.id}
              style={{ 
                backgroundImage: `url(${card.image})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
              <CardTitle><br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br></CardTitle>
              <Button href={"google.com"} className="roomBtn">{card.room}</Button>
            </Card>
          ))}
        </Wrapper>
      ) : (
        <>
          <h3>What a gorgeous empty lot!</h3>
          <Button href="/survey">Click me to add rooms!</Button>
        </>
      )} 
      <Row>
        <Col-md-12>
        <h3 className="pageBreak">Extras</h3>
        </Col-md-12>
      </Row>
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
                backgroundImage: `url(./assets/images/newHome.png)`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
              <CardTitle><br></br><br></br><br></br><br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br></CardTitle>
              
                <Link to="/value">
                  <Button className="roomBtn"> Room Modal Test</Button>
                </Link>
              
              <RoomModal value="cards"/>
        </Card>   
        </Wrapper> 
        
    </>
  );
}