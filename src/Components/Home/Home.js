import React from "react";
import { Container, Row } from "react-bootstrap";
import HomeImg from "./HomeItems/HomeImg";
import HomeTexts from "./HomeItems/HomeTexts";

const Home = () => {
  return (
    <Container className="py-5 ">
      <Row className="align-items-center">
        <HomeTexts />
        <HomeImg />
      </Row>
    </Container>
  );
};

export default Home;
