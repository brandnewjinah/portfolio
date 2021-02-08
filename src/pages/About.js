import React from "react";

//import syles and assets
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1 className="header">Front-end Developer</h1>
      <h1 className="header">& UX/UI Designer</h1>
      <p className="about">
        My name is Jinah Lee and I'm a front-end developer with UX/UI design
        background. I enjoy solving user problems and I want to deliver
        delightful user experiences with the help of right technologies.
      </p>
    </Container>
  );
};

const Container = styled.div`
  .header {
    margin-bottom: 0.125em;

    &:first-of-type {
      color: #f49292;
    }

    &:nth-of-type(2) {
      color: #f7a7a7;
    }
  }

  .about {
    max-width: 840px;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.75em;
    letter-spacing: 0.05rem;
    color: #6b6565;
    margin: 1.5em 0;
  }

  @media (max-width: 950px) {
    .header {
      font-size: 2.5rem;
      line-height: 2.75rem;
    }
  }
`;

export default About;
