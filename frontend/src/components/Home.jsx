import React from 'react';
// import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import './Home.css';
//   , Row, , Col, Image ,
// } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Jumbotron>
        <h2>Welcome to vrconnection</h2>
        <p>
          We rely on volunteer who can spend time connecting closely with refugees to help them with
          dignity.
        </p>
      </Jumbotron>

      <Container>
        <h3>WHAT’S IT LIKE VOLUNTEERING FOR REFUGEE SUPPORT?</h3>
        <p>
          Volunteering is about doing what is best for the members of the Centre, but you will find
          it extremely rewarding. To find out more about what it’s like, read our volunteer stories.
          It is an unforgettable experience, you will be doing good from the moment you arrive and
          all you need is two things: a ready smile and a willingness to work as part of a team.
          Please apply – you will not regret
        </p>
      </Container>
    </Container>
  );
}

export default Home;
