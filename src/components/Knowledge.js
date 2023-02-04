import React from "react";
import styled from "styled-components";

export default function Knowledge({ register, errors }) {
  return (
    <Wrapper>
      <Label>სასწავლებელი</Label>
      <Input type="text" name="institute" {...register("institute")} />

      <Label>ხარისხი</Label>
      <Select name="degree"></Select>

      <Label>დამთავრების რიცხვი</Label>
      <Input type="date" name="due_date1" {...register("due_date1")} />

      <Label>აღწერა</Label>
      <Textarea name="description1" {...register("description1")}></Textarea>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;

const Label = styled.label``;
const Select = styled.select``;
const Textarea = styled.textarea``;
