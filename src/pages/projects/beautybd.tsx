import React, { FC } from "react";
import { useHistory, Link } from "react-router-dom";

//import components

//import syles and assets
import styled from "styled-components";
import { Back } from "../../assets/Icons";
import Cover from "../../assets/beautybd/cover.jpg";
import Journey from "../../assets/beautybd/journey.jpg";
import Wire1 from "../../assets/beautybd/bbyd_wire_1.jpg";
import Wire2 from "../../assets/beautybd/bbyd_wire_2.jpg";
import Wire3 from "../../assets/beautybd/bbyd_wire_3.jpg";
import Wire4 from "../../assets/beautybd/bbyd_wire_4.jpg";
import UI from "../../assets/beautybd/bbyd_UI_1.jpg";
interface Props {}

const BeautyBD: FC<Props> = () => {
  let history = useHistory();
  return (
    <Wrapper>
      <Link to="/">
        <Logo>J</Logo>
      </Link>
      <Section>
        <div className="col1">
          <div className="sub">
            <div
              style={{ marginTop: "1.125em", cursor: "pointer" }}
              onClick={() => history.goBack()}
            >
              <Back width="20" height="20" color="#000" stroke="1" />
            </div>
          </div>
        </div>
        <div className="col2">
          <h1>Beauty By Design</h1>
          <p className="header">
            Beauty By Design is an online skincare concierge that connects
            customers with professional estheticians. It provides accurate skin
            diagnoses and recommends personalized skincare products.
          </p>
          <div>
            <img src={Cover} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Define</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              The goal was to create a mobile centric platform - starting with
              the web then move onto an app. The challenge was to have seamless
              consultation, evaluation and shopping experience with limited
              web-based technology. I created a user journey map to make sure
              there's no hurdle in the process.
            </p>
            <img src={Journey} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Wireframes</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Implementing the skin analysis and evaluation step was the most
              challenging yet critical part of the design. Because of limited
              technology, customers had to be driven out of the site for their
              native camera usage. It was really important to drive them back to
              the site to complete their experience. I created high fidelity
              wireframes with interaction guidelines.
            </p>
            <img src={Wire1} alt="" />
            <img src={Wire2} alt="" />
            <img src={Wire3} alt="" />
            <img src={Wire4} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>UI Design</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I gave the initial UI design guidelines. I provded layout files as
              well as design guidelines document.
            </p>
            <img src={UI} alt="" />
          </div>
        </div>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 40px;
  height: 40px;
  top: 6em;
  background-color: #000;
  color: #fff;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1360px;
  display: flex;
  margin: 0 auto;
  padding: 4em 4em 4em 8em;

  h1 {
    font-family: "Open Sans Condensed", sans-serif;
    margin-bottom: 0.5em;
  }

  .header {
    margin: 1.5em 0;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
  }

  .btn {
    margin-bottom: 1.5em;

    a {
      font-size: 1rem;
      text-decoration: underline;
    }
  }

  .col1 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col2 {
    max-width: 100%;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    flex: 1 0 0; //grow, shrink , basis

    p {
      /* margin: 2em 0; */
    }

    img {
      width: 100%;
      object-fit: cover;
      margin: 1em 0;
    }
  }

  .sub {
    display: flex;
    justify-content: flex-end;
    padding: 0 4em 0 0;
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

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 4em;

    .col1 {
      max-width: 100%;
    }

    .sub {
      justify-content: flex-start;
      margin-bottom: 3em;
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

export default BeautyBD;
