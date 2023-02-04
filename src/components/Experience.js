import React from "react";
import styled from "styled-components";

export default function Experience({ register, errors }) {
  return (
    <Wrapper>
      <Label>თანამდებობა</Label>
      <Input type="text" name="position" {...register("position")} />

      <Label>დამსაქმებელი</Label>
      <Input type="text" name="employer" {...register("employer")} />

      <Label>დაწყების რიცხვი</Label>
      <Input type="date" name="start_date" {...register("start_date")} />

      <Label>დამთავრების რიცხვი</Label>
      <Input type="date" name="due_date" {...register("due_date")} />

      <Label>აღწერა</Label>
      <Textarea name="description" {...register("description")}></Textarea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;

const Label = styled.label``;
const Textarea = styled.textarea``;
