import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../App";

import {
  CommonInput,
  Container,
  ExperienceButton,
  Input,
  InputContainer,
  Label,
  Option,
  RedSpan,
  Select,
  Span,
  Textarea,
  Wrapper,
} from "./Styles";

export default function Knowledge({ register, errors }) {
  const [degree, setDegree] = useState();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => {
        setDegree(res.data);
      });
  }, []);
  return (
    <Wrapper>
      <InputContainer>
        <Label>სასწავლებელი</Label>
        <CommonInput
          type="text"
          name="institute"
          {...register("institute")}
          onChange={(e) => setUser({ institute: e.target.value })}
        />
        {errors.institute ? (
          <RedSpan>მინიმუმ 2 სიმბოლო</RedSpan>
        ) : (
          <Span>მინიმუმ 2 სიმბოლო</Span>
        )}
      </InputContainer>

      <Container>
        <InputContainer>
          <Label>ხარისხი</Label>
          <Select
            name="degree"
            {...register("degree")}
            onChange={(e) => setUser({ degru: e.target.value })}
          >
            <Option disabled>აირჩიეთ ხარისხი</Option>
            {degree &&
              degree.map((item) => <option key={item.id}>{item.title}</option>)}
          </Select>
        </InputContainer>
        <InputContainer>
          <Label>დამთავრების რიცხვი</Label>
          <Input
            type="date"
            name="due_date1"
            {...register("due_date1")}
            onChange={(e) => setUser({ dueDate1: e.target.value })}
          />
        </InputContainer>
      </Container>

      <InputContainer>
        <Label>აღწერა</Label>
        <Textarea
          name="description1"
          {...register("description1")}
          onChange={(e) => setUser({ description1: e.target.value })}
        ></Textarea>
      </InputContainer>
      <ButtonWrapper>
        <ExperienceButton>სხვა სასწავლებლის დამატება</ExperienceButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
const ButtonWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;
