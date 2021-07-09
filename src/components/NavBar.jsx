import styled from 'styled-components';
import React from 'react'

export const NavBar = () => {
    return (
        <React.Fragment>
        {" "}
        <Nav>
          <Content>
            <NavTitle>Simple blog</NavTitle>
          </Content>
        </Nav>
      </React.Fragment>)
}

export default NavBar;


const Nav = styled.nav`
  width: 100%;
  background: #252525;
  color: #ffff;
  font-size: 18px;
  margin: 0 auto;
  padding: 1em 0;
  margin-bottom:1em;
`;

const Content = styled.div`
  display: flex;
  margin-left: 1.4em;  justify-content: center;
  align-items: center;
`;

const NavTitle = styled.h2`
text-align:center;
  }
`;