import React, { useEffect, useState } from "react";
// import NavBar from '../components/Nav/Backup'
//import Footer from '../components/Footer/index';
import API from "../utils/API";
import Navbar from "../components/Nav/index";
// import {Container} from '../components/Grid';
import { Card, Button, CardImg, CardImgOverlay, CardTitle, CardText} from "reactstrap";
import "./Home.css";
import Wrapper from "../components/Wrapper";

export default function Home(props) {
  //setting initial state
  const [cards, setCards] = useState([
    {
      id: 0,
      image: "./assets/images/bathroom1.jpg",
      title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/kitchen1.jpg",
      title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/garage2.jpg",
      title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/bedroom1.jpg",
      title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/hvac.jpg",
      title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/pool1.jpg",
      title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/yard1.jpg",
      title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/laundryroom1.jpg",
      title: "TEST ROOM",
    },
  ]);
  // const [cookies, setCookies] = useState();
  // const [cookie, setCookie] = useState();

  //Load all books and store them with setCards
  useEffect(() => {
    onLoad();
    loadCards();
  }, []);

  function onLoad() {
    API.getJwt()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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

  function loadCards() {
    API.getCard()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar logout={() => handleLogOutRequest()} />
      {cards.length ? (
        <Wrapper>
          {cards.map((card) => (
            // <Card inverse key={card.id}>
            //   <CardImg width="300px" src={card.image} alt="Room image" />
            //     <CardImgOverlay CardImgOverlay>
            //           <Button href={"google.com"}>{card.title}</Button>
            //     </CardImgOverlay>
            // </Card>
              <Card body inverse style={{ 
                backgroundImage: `url(${card.image})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
              <CardTitle><br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br></CardTitle>
              <Button className="roomBtn" >Button</Button>
            </Card>
          ))}
        </Wrapper>
      ) : (
        <>
          <h3>What a gorgeous empty lot!</h3>
          <Button href="/survey">Click me to add rooms!</Button>
        </>
      )}
    </>
  );
}
