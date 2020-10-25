import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import { Header, Footer } from '../components/Molecules/Common';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <GlobalWrapperWithStyled data-is-root-path={isRootPath}>
      <Header />
      <GlobalContainerWithStyled>
        { children }
      </GlobalContainerWithStyled>
      <Footer />
    </GlobalWrapperWithStyled>
  )
}

const GlobalWrapperWithStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
`;

const GlobalContainerWithStyled = styled.div`
  width: 80%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default Layout
