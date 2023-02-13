import styled from "styled-components";
export const Myform = styled.form`
  width: 50%;
  background-color: rgb(250, 250, 250);
  height: 100vh;
`;
export const Header = styled.div``;
export const Body = styled.div``;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-left: 10px;
`;
export const Button = styled.button`
  background-color: #6b40e3;
  color: white;
  width: 151px;
  border-radius: 4px;
  cursor: pointer;
  height: 48px;
  border: none;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Input = styled.input`
  margin: 5px 0;
  height: 30px;
  outline: none;
  width: 300px;
  outline: none;
  padding: 10px;
  border: 1px solid #bcbcbc;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin: 5px;
`;

export const Textarea = styled.textarea`
  height: 60px;
  outline: none;
  padding: 10px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
`;
export const PhotoContainer = styled.div`
  position: relative;
  padding: 20px 10px;
`;
export const PhotoButton = styled.button`
  position: absolute;
  left: 40%;
  background-color: #0e80bf;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 4px;
`;
export const FileInput = styled.input`
  position: absolute;
  left: 20%;
  z-index: 1;
`;
export const CommonInput = styled.input`
  height: 30px;
  outline: none;
  padding: 10px;
  border: 1px solid #bcbcbc;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
`;
export const Span = styled.span`
  color: rgba(46, 46, 46, 1);
  margin-top: 5px;
`;
export const RedSpan = styled.span`
  color: red;
  margin-top: 5px;
`;
export const ImageContainer = styled.div`
  padding: 30px 0 30px 10px;
`;

export const ExperienceButton = styled.div`
  background-color: rgba(98, 161, 235, 1);
  color: white;
  border-radius: 4px;
  width: 289px;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;
`;
export const Line = styled.img`
  width: 100%;
`;

export const Select = styled.select`
  margin: 5px 0;
  height: 30px;
  outline: none;
  width: 300px;
  outline: none;

  border: 1px solid #bcbcbc;
  color: rgba(0, 0, 0, 0.6);
`;
export const Option = styled.option``;
