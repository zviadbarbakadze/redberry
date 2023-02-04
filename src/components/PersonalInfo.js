import React from "react";
import styled from "styled-components";

export default function PersonalInfo({ register, errors }) {
  return (
    <Wrapper>
      <Label>სახელი</Label>
      <Input type="text" name="name" {...register("name")} />

      <Label>გვარი</Label>
      <Input type="text" name="surname" {...register("surname")} />
      <Label>პირადი ფოტოს ატვირთვა</Label>
      <Input type="file" name="image" {...register("image")} />
      <Label>ჩემ შესახებ(არასავალდებულო)</Label>
      <Textarea name="about_me" {...register("about_me")}></Textarea>
      <Label>ელ ფოსტა</Label>
      <Input type="text" name="email" {...register("email")} />
      <Label>მობილურის ნომერი</Label>
      <Input type="text" name="phone_number" {...register("phone_number")} />
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
