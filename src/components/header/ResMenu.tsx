import React, { FC } from "react";

//import syles and assets
import styled from "styled-components";

interface Props {}

const ResMenu: FC<Props> = () => {
  return (
    <>
      {/* <List>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </List> */}
      <Wrapper>
        <p>MENU</p>
      </Wrapper>
    </>
  );
};

const List = styled.ul`
  position: fixed;
  list-style: none;
  background-color: green;
  left: 20px;
  bottom: 80px;
  /* height: 0;
  overflow: hidden; */
`;

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2em;
  background-color: black;
  position: fixed;
  bottom: 15px;
  left: 20px;
  z-index: 1;
  cursor: pointer;
  display: none;

  p {
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ResMenu;
