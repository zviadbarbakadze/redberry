import React, { useState } from "react";
import styled from "styled-components";

export default function PersonalInfo({ register, errors }) {
  return (
    <Wrapper>
      <Container>
        <InputContainer>
          <Label>სახელი</Label>
          <Input type="text" name="name" {...register("name")} />
          {errors.name ? (
            <RedSpan>მინიმუმ 2 ასო, ქართული ასოები</RedSpan>
          ) : (
            <Span>მინიმუმ 2 ასო, ქართული ასოები</Span>
          )}
        </InputContainer>

        <InputContainer>
          <Label>გვარი</Label>
          <Input type="text" name="surname" {...register("surname")} />
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
        />

        <PhotoButton>ატვირთვა</PhotoButton>
      </PhotoContainer>

      <InputContainer>
        <Label>ჩემ შესახებ(არასავალდებულო)</Label>
        <Textarea name="about_me" {...register("about_me")}></Textarea>
      </InputContainer>
      <InputContainer>
        <Label>ელ ფოსტა</Label>
        <CommonInput type="text" name="email" {...register("email")} />

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Input = styled.input`
  margin: 5px 0;
  height: 50px;
  outline: none;
  width: 300px;
  outline: none;
  padding: 10px;
  border: 1px solid #bcbcbc;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin: 5px;
`;

const Textarea = styled.textarea`
  height: 100px;
  outline: none;
  padding: 10px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
`;
const PhotoContainer = styled.div`
  position: relative;
  padding: 20px 10px;
`;
const PhotoButton = styled.button`
  position: absolute;
  left: 40%;
  background-color: #0e80bf;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 4px;
`;
const FileInput = styled.input`
  position: absolute;
  left: 20%;
  z-index: 1;
`;
const CommonInput = styled.input`
  height: 50px;
  outline: none;
  padding: 10px;
  border: 1px solid #bcbcbc;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
`;
const Span = styled.span`
  color: rgba(46, 46, 46, 1);
  margin-top: 5px;
`;
const RedSpan = styled.span`
  color: red;
  margin-top: 5px;
`;
