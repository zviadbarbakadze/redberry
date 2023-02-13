import React, { useContext } from "react";
import { UserContext } from "../App";

import line from "../assets/Line 19.png";
import {
  CommonInput,
  Container,
  ExperienceButton,
  ImageContainer,
  Input,
  InputContainer,
  Label,
  Line,
  RedSpan,
  Span,
  Textarea,
  Wrapper,
} from "./Styles";

export default function Experience({ register, errors }) {
  const { setUser } = useContext(UserContext);
  return (
    <Wrapper>
      <InputContainer>
        <Label>თანამდებობა</Label>
        <CommonInput
          type="text"
          name="position"
          {...register("position")}
          onChange={(e) => setUser({ position: e.target.value })}
        />
        {errors.position ? (
          <RedSpan>მინიმუმ 2 სიმბოლო</RedSpan>
        ) : (
          <Span>მინიმუმ 2 სიმბოლო</Span>
        )}
      </InputContainer>

      <InputContainer>
        <Label>დამსაქმებელი</Label>
        <CommonInput
          type="text"
          name="employer"
          {...register("employer")}
          onChange={(e) => setUser({ employer: e.target.value })}
        />
        {errors.employer ? (
          <RedSpan>მინიმუმ 2 სიმბოლო</RedSpan>
        ) : (
          <Span>მინიმუმ 2 სიმბოლო</Span>
        )}
      </InputContainer>
      <Container>
        <InputContainer>
          <Label>დაწყების რიცხვი</Label>
          <Input
            type="date"
            name="start_date"
            {...register("start_date")}
            onChange={(e) => setUser({ startDate: e.target.value })}
          />
        </InputContainer>
        <InputContainer>
          <Label>დამთავრების რიცხვი</Label>
          <Input
            type="date"
            name="due_date"
            {...register("due_date")}
            onChange={(e) => setUser({ dueDate: e.target.value })}
          />
        </InputContainer>
      </Container>

      <InputContainer>
        <Label>აღწერა</Label>
        <Textarea
          name="description"
          {...register("description")}
          onChange={(e) => setUser({ description: e.target.value })}
        ></Textarea>
      </InputContainer>
      <ImageContainer>
        <Line src={line} />
      </ImageContainer>
      <ExperienceButton>მეტი გამოცდილების დამატება</ExperienceButton>
    </Wrapper>
  );
}
