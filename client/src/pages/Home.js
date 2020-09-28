import React, { useEffect, useState } from 'react';
import NavBar from '../components/Nav'
import RoomBox from '..//components/RoomBox';
import Footer from '../components/Footer/index';
import API from '../utils/API';
import Cookies from 'js-cookie';

export default function Home(props) {
  //setting initial state
  const [cards, setCards] = useState({
    id: 0,
    img: "",
    title: "",
  });
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
      <NavBar logout={() => handleLogOutRequest()}/>
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
