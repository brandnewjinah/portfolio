import React, { FC } from "react";

//import styled components
import styled from "styled-components";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .heading {
  }

  .stacks {
    font-size: 1rem;
    font-weight: 300;
    color: #4b4b4b;
    margin: 1em 0;
    position: relative;

    /* &:after {
      content: "";
      border-bottom: 0.5em solid rgba(255, 0, 0, 0.125);
      position: absolute;
      left: 0;
      right: 0;
      top: 35%;
    } */
  }

  .notes {
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    margin: 1em 0;
  }
`;
const Container = styled.div`
  width: 100%;
  /* max-width: 1360px; */
  padding: 8em 0;
  margin: 0 auto;
`;

export default Layout;
