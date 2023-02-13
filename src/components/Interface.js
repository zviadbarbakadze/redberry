import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../App";
import laptop from "../assets/laptop.jpg";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import logo from "../assets/LOGO-12 1.png";

export default function Interface() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Wrapper1>
        <Wrapper>
          <Input value={user.firstName} readOnly />
          <Input value={user.lastName} readOnly />
          {user.firstName !== "" ? <Image src={laptop} /> : null}
        </Wrapper>
        {user.firstName !== "" ? (
          <Wrapper>
            <Icon src={mail} />
            <InputCommon value={user.email} readOnly />
          </Wrapper>
        ) : null}
        {user.firstName !== "" ? (
          <Wrapper>
            <Icon src={phone} />
            <InputCommon value={user.phone} readOnly />
          </Wrapper>
        ) : null}
      </Wrapper1>
      {user.firstName !== "" ? <Span>ჩემ შესახებ</Span> : <Span></Span>}
      <Textarea value={user.about} readOnly></Textarea>
      {user.firstName !== "" ? <Span>გამოცდილება</Span> : <Span></Span>}
      <InputCommon value={user.position} readOnly />
      <InputCommon value={user.employer} readOnly />
      <InputCommon value={user.startDate} readOnly />
      <InputCommon value={user.dueDate} readOnly />
      <Textarea value={user.description} readOnly />
      {user.firstName !== "" ? <Span>განათლება</Span> : <Span></Span>}
      <InputCommon value={user.institute} readOnly />
      <InputCommon value={user.degru} readOnly />
      <InputCommon value={user.dueDate1} readOnly />
      <Textarea value={user.description1} readOnly />
      {user.firstName !== "" ? <Logo src={logo} /> : null}
    </Container>
  );
}
const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Span = styled.span`
  color: rgba(249, 59, 29, 1);
  font-weight: 700;
  font-size: 20px;
`;
const Input = styled.input`
  color: rgba(249, 59, 29, 1);
  font-weight: 700;

  width: 150px;
  font-size: 20px;
  border: none;
  outline: none;
`;
const Textarea = styled.textarea`
  border: none;
  outline: none;
  font-size: 16px;
`;
const InputCommon = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
  width: 250px;
`;
const Image = styled.img`
  width: 100px;
  border-radius: 50%;
`;
const Icon = styled.img`
  margin-right: 5px;
`;
const Logo = styled.img`
  width: 50px;
`;
