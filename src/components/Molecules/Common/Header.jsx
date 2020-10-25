import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

import { Logo } from '../../Atoms';

const Header = () => {
  return (
    <HeaderAreaWithStyled>
      <HeaderContainerWithStyled>
        <Link to='/'><Logo /></Link>
        <ButtonAreaWithStyled>This is Button area</ButtonAreaWithStyled>
      </HeaderContainerWithStyled>
    </HeaderAreaWithStyled>
  );
}

const HeaderAreaWithStyled = styled.div`
  display: flex;
  height: 3rem;
  width: 100%;
`;

const ButtonAreaWithStyled = styled.div`
`;

const HeaderContainerWithStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;