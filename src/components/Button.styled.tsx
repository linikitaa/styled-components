import styled from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
}
export const StyledBtn = styled.button<StyledBtnPropsType> `
  border: none;
  background-color: ${props => props.color || '#fb3f78'};
  padding: 10px 20px;
  border-radius: 5px;
  color: #fffbe0;
  font-size: ${props => props.fontSize};
  font-weight: bold;

  &:hover {
    background-color: #ff5d8e;
  }
`
