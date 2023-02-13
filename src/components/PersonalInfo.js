import React, { useContext, useState } from "react";
import { UserContext } from "../App";

import {
  CommonInput,
  Container,
  FileInput,
  Input,
  InputContainer,
  Label,
  PhotoButton,
  PhotoContainer,
  RedSpan,
  Span,
  Textarea,
  Wrapper,
} from "./Styles";

export default function PersonalInfo({ register, errors }) {
  const { setUser } = useContext(UserContext);
  return (
    <Wrapper>
      <Container>
        <InputContainer>
          <Label>სახელი</Label>
          <Input
            type="text"
            name="name"
            {...register("name")}
            onChange={(e) => setUser({ firstName: e.target.value })}
          />
          {errors.name ? (
            <RedSpan>მინიმუმ 2 ასო, ქართული ასოები</RedSpan>
          ) : (
            <Span>მინიმუმ 2 ასო, ქართული ასოები</Span>
          )}
        </InputContainer>

        <InputContainer>
          <Label>გვარი</Label>
          <Input
            type="text"
            name="surname"
            {...register("surname")}
            onChange={(e) => setUser({ lastName: e.target.value })}
          />
          {errors.surname ? (
            <RedSpan>მინიმუმ 2 ასო, ქართული ასოები</RedSpan>
          ) : (
            <Span>მინიმუმ 2 ასო, ქართული ასოები</Span>
          )}
        </InputContainer>
      </Container>

      <PhotoContainer>
        <Label>პირადი ფოტოს ატვირთვა</Label>
        <FileInput
          type="file"
          name="image"
          {...register("image")}
          accept="image/*"
          onChange={(e) => setUser({ image: e.target.value })}
        />

        <PhotoButton>ატვირთვა</PhotoButton>
      </PhotoContainer>

      <InputContainer>
        <Label>ჩემ შესახებ(არასავალდებულო)</Label>
        <Textarea
          name="about_me"
          {...register("about_me")}
          onChange={(e) => setUser({ about: e.target.value })}
        ></Textarea>
      </InputContainer>
      <InputContainer>
        <Label>ელ ფოსტა</Label>
        <CommonInput
          type="text"
          name="email"
          {...register("email")}
          onChange={(e) => setUser({ email: e.target.value })}
        />

        {errors.email ? (
          <RedSpan>უნდა მთავრდებოდეს @redberry,ge-ით</RedSpan>
        ) : (
          <Span>უნდა მთავრდებოდეს @redberry,ge-ით</Span>
        )}
      </InputContainer>
      <InputContainer>
        <Label>მობილურის ნომერი</Label>

        <CommonInput
          type="text"
          name="phone_number"
          {...register("phone_number")}
          onChange={(e) => setUser({ phone: e.target.value })}
        />

        {errors.phone_number ? (
          <RedSpan>
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </RedSpan>
        ) : (
          <Span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</Span>
        )}
      </InputContainer>
    </Wrapper>
  );
}
