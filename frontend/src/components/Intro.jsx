import React from "react";
import styled from "styled-components";
import Still from "../img/Still1Head.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>SHINING OVERSEAS</Title>
        <Desc>
          {" "}
          We are a leading metal supplier based in Mumbai, providing a wide range of ferrous and non-ferrous metals in various shapes and sizes. Our commitment is to deliver high-quality metals at competitive prices, along with exceptional customer service.
We understand the specific needs of our clients and strive to be a one-stop shop for all their metal requirements. Whether you're a large-scale industrial buyer or a small contractor, we have the expertise and resources to meet your demands.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us (+91) 8452074960</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Still} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
