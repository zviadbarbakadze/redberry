import { createContext, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Interface from "./components/Interface";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    image: "",
    about: "",
    email: "",
    phone: "",
    position: "",
    employer: "",
    startDate: "",
    dueDate: "",
    description: "",
    institute: "",
    degru: "",
    dueDate1: "",
    description1: "",
  });
  return (
    <Container>
      <UserContext.Provider value={{ user, setUser }}>
        <Form />
        <Interface />
      </UserContext.Provider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
