import React, { useEffect, useState } from 'react';
// import NavBar from '../components/Nav/Backup'
//import Footer from '../components/Footer/index';
import API from '../utils/API';
import Navbar2 from '../components/Nav/index';
import {Container} from '../components/Grid';
import { Card, Button, CardImg, CardDeck } from 'reactstrap';


export default function Home(props) {
  //setting initial state
  const [cards, setCards] = useState([{
    id: 0,
    image: "./assets/images/bathroom1.jpg",
    title: "TEST ROOM",
    },
    {
      id: 0,
      image: "./assets/images/bathroom1.jpg",
      title: "TEST ROOM",
      },
      {
        id: 0,
        image: "./assets/images/bathroom1.jpg",
        title: "TEST ROOM",
        },
    {
      id: 0,
      image: "TEST IMAGE",
      title: "TEST ROOM",
      },
      {
        id: 0,
        image: "TEST IMAGE",
        title: "TEST ROOM",
        },
        {
          id: 0,
          image: "TEST IMAGE",
          title: "TEST ROOM",
          },
          {
            id: 0,
            image: "TEST IMAGE",
            title: "TEST ROOM",
            },
            {
              id: 0,
              image: "TEST IMAGE",
              title: "TEST ROOM",
              }
  ]);
  const [cookies, setCookies] = useState();
  const [cookie, setCookie] = useState();

  //Load all books and store them with setCards
  useEffect(() => {
    onLoad();
    loadCards();
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

  function loadCards() {
    API.getCard()
    .then(res =>
      setCards(res.data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <Navbar2 logout={() => handleLogOutRequest()}/>
      <br></br>
      <Container fluid>
      {cards.length ? (
              <CardDeck>
                {cards.map(card => (
                    // <RoomCard key={card.id}>
                        <Card inverse>
                          <CardImg width="300px" src={card.image} alt="Room image" />
                          {/* <CardImgOverlay CardImgOverlay>
                          </CardImgOverlay> */}
                          <Button href={"google.com"}>{card.title}</Button>
                        </Card>
                    // </RoomCard>
                ))}
              </CardDeck>)
              :(<h3>What a gorgeous empty lot!</h3>)}
      </Container>
    </>
  );
}
