import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterAreaWithStyled>
      <FooterContainerWithStyled>
        <FooterInnerWithStyled>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        </FooterInnerWithStyled>
      </FooterContainerWithStyled>
    </FooterAreaWithStyled>
  )
}

const FooterAreaWithStyled = styled.div`
`;

const FooterContainerWithStyled = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
`;

const FooterInnerWithStyled = styled.div``;

export default Footer;