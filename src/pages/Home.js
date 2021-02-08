import React from "react";
import { Link } from "react-router-dom";

//import components
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";

//import syles and assets
import styled from "styled-components";
import { Github, Linkedin } from "../assets/Icons";



const Home = () => {
  return (
    <Wrapper>
      <div style={{ backgroundColor: "#f9e9e7" }}>
        <Section>
          <div className="col1">
            <div className="sub">
              <h6>About</h6>
            </div>
          </div>
          <div className="col2">
            <About />
          </div>
        </Section>
      </div>
      <div style={{ backgroundColor: "#f3f2e7" }}>
        <Section>
          <div className="col1">
            <div className="sub">
              <h6>Skills</h6>
            </div>
          </div>
          <div className="col2">
            <Skill />
          </div>
        </Section>
      </div>
      <div style={{ backgroundColor: "#e2f0e9" }}>
        <Section>
          <div className="col1">
            <div className="sub">
              <h6>Projects</h6>
            </div>
          </div>
          <div className="col2">
            <Project />
          </div>
        </Section>
      </div>
      <div style={{ backgroundColor: "#afc157", color: "#f5e284" }}>
        <Section>
          <div className="col1">
            <div className="sub">
              <h6>Contact</h6>
            </div>
          </div>
          <div className="col2">
            <div className="email">brandnewjinah@gmail.com</div>
            <div className="links">
              <div>
                <a href="https://github.com/brandnewjinah" target="_blank">
                  <Github width="20" height="20" color="#f5e284" stroke="2" />{" "}
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/jinah-lee-1105b75/"
                  target="_blank"
                >
                  <Linkedin width="20" height="20" color="#f5e284" stroke="2" />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1360px;
  display: flex;
  margin: 0 auto;
  padding: 12em;

  .col1 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col2 {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 0; //grow, shrink , basis
  }

  .sub {
    display: flex;
    justify-content: flex-end;
    padding: 0.75em 4em 0 0;
  }

  .email {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 3.25rem;
    padding-top: 0.25em;
  }

  .links {
    display: flex;
    font-weight: 500;
    font-size: 1.5rem;
    padding-top: 1.25em;

    div {
      margin-right: 0.5em;
    }
  }

  h6 {
    text-transform: uppercase;
    font-size: 0.75rem;

    &:before {
      display: inline-block;
      content: "";
      width: 1rem;
      height: 1px;
      transform: translate(-0.5em, -0.25em);
      background-color: #ff7382;
    }
  }

  @media (max-width: 1024px) {
    .email {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 2rem;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 2em;

    .col1 {
      max-width: 100%;
    }

    .col2 {
      max-width: 100%;
      display: block;
    }

    .sub {
      justify-content: flex-start;
      margin-bottom: 3em;
    }

    .email {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
    }

    .links {
      padding-top: 0.5em;
    }

    h6 {
      &:before {
        display: none;
      }

      &:after {
        display: inline-block;
        content: "";
        width: 1rem;
        height: 1px;
        transform: translate(0.5em, -0.25em);
        background-color: #ff7382;
      }
    }
  }
`;

export default Home;
