import React, { useState } from "react";
import styled from "styled-components";
import Knowledge from "./Knowledge";
import { ExperienceButton, Wrapper } from "./Styles";

export default function MainKnowledge({ register, errors }) {
  const [knowledge, setKnowlege] = useState([]);
  const onAddBtnClick = (event) => {
    setKnowlege(
      knowledge.concat(<Knowledge register={register} errors={errors} />)
    );
  };
  return (
    <Wrapper>
      <Knowledge register={register} errors={errors} />
      {knowledge}
      <ButtonWrapper>
        <ExperienceButton onClick={onAddBtnClick}>
          სხვა სასწავლებლის დამატება
        </ExperienceButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
const ButtonWrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
`;
