import styled from "styled-components";

export const Menu = styled.nav `
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li > a {
    color: chartreuse;

    &:hover {
      color: #313548;
    }
  }
  
  li + li {
    margin-left: 20px;
  }
`