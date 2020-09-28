import React, { useEffect, useState } from "react";
import NavBar from "../components/Nav";
import Navbar2 from "../components/Nav/RSindex";
// import RoomBox from '..//components/RoomBox';
// import Footer from "../components/Footer/index";
import CardGrid from "../components/CardDeck";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";

export default function Home(props) {
//setting initial state
const [cards, setCards] = useState({
  id: 0,
  img: "",
  title: "",
});

//Load all books and store them with setCards
  useEffect(() => {
    loadCards()
  }, [])

  function loadCards() {
    API.getCard()
    .then(res =>
      setCards(res.data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <NavBar />
      <Navbar2 />
      <br></br>
      <Container fluid>
      {cards.length ? (
              <CardGrid>
                {cards.map(card => {
                  return (
                    <RoomCard key={book._id}>
                        <Card inverse>
                          <CardImg width="100%" src={card.image} alt="Room image" />
                          <CardImgOverlay CardImgOverlay>
                          </CardImgOverlay>
                          <Button onClick={() => {}}>{card.title}</Button>
                        </Card>
                    </RoomCard>
                  );
                })}
              </CardGrid>)
              :(<h3>What a gorgeous empty lot!</h3>)}
      </Container>
    </>
  );
}
