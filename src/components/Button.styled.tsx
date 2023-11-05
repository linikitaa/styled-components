import styled from "styled-components";
import {MyAnimation} from "../styles/animation";

export const StyledBtn = styled.button `
  border: none;
  background-color: #ae5dff;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fffbe0;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #ff5d8e;
  }

  &:last-child {
    background-color: #22ff00;
  }
  
  @media screen and (max-width: 800px) {
    background-color: coral;
  }
`

export const SuperButton = styled(StyledBtn) `
  background-color: #ffcf00;
  color: #313548;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`