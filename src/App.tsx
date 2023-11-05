import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";


function App() {
  return (
    <div className="App">
        <Box>
            <StyledBtn>Hello</StyledBtn>
            <StyledBtn color="green" fontSize='40px'>Hello</StyledBtn>
            <StyledBtn color="orange">Hello</StyledBtn>
        </Box>

    </div>
  );
}

export default App;



const Box = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  button {
    cursor: pointer;
  }
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`