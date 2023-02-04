import React from "react";
import styled from "styled-components";
import logo1 from "../assets/LOGO-1.png";
import image from "../assets/foto.png";
import line from "../assets/Line 12.png";
import logo2 from "../assets/LOGO-2.png";
export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo1} alt="logo" />
        <Line src={line} alt="line" />
      </Wrapper>

      <Button>რეზიუმეს დამატება</Button>
      <SecondLogo src={logo2} alt="logo2" />
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${image});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  padding: 25px 70px;
`;

const Logo = styled.img`
  width: 236px;
  height: 38px;
`;

const Line = styled.img`
  width: 100%;
`;

const Button = styled.button`
  background-color: #1a1a1a;
  width: 464px;
  height: 60px;
  border-radius: 8px;
  padding: 18px 60px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const SecondLogo = styled.img`
  width: 299px;
  height: 299px;
  position: absolute;
  top: 60%;
  left: 70%;
  transform: translate(-50%, -50%);
`;
