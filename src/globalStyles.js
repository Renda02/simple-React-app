import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Source Sans Pro',sans-serif
  }
  
`;

export  const PostWrapper = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

export default GlobalStyle;