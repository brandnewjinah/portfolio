import React, { FC } from "react";
import { useHistory, Link } from "react-router-dom";

//import components

//import syles and assets
import styled from "styled-components";
import { Back } from "../../assets/Icons";
import Cover from "../../assets/ezt/cover.jpg";
import Approach from "../../assets/ezt/approach.png";
import Report from "../../assets/ezt/screen1.jpg";
import Report2 from "../../assets/ezt/screen2.jpg";
import Mobile from "../../assets/ezt/mobile.jpg";

interface Props {}

const EZText: FC<Props> = () => {
  let history = useHistory();
  return (
    <Wrapper>
      <Link to="/">
        <Logo>J</Logo>
      </Link>
      <Section>
        <div className="col1 hero">
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
          <h1>EZ TEXTING</h1>
          <p className="header">
            EZ Texting is a SaaS company that provides SMS marketing solutions
            to businesses of all sizes. My role was to create UX/UI design for
            the reporting system and the brand new mobile app.
          </p>
          <div className="btn">
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/ez-texting-messaging-app/id1465358979"
            >
              Check out in the App Store
            </a>
          </div>
          <div>
            <img src={Cover} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Approach</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              The goal was to create an easy to use platform where customers
              could actively engage in marketing their own businesses.
            </p>
            <img src={Approach} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Reporting</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              The reporting section had enterprise level data that could be
              intimidating to small business owners. The goal was to create
              friendly interface so that customers take actions easily. Business
              goal was to introduce more solutions.
            </p>
            <img src={Report} alt="" />
            <img src={Report2} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Mobile</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              To increase the engagement level with the product, it was
              necessary to create a mobile app so that business owners could
              easily send and receive messages and respond to customer questions
              on the go. I was involved in the entire design process from
              defining the problem to UI design.
            </p>
            <img src={Mobile} alt="" />
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

  @media (max-width: 950px) {
    top: 0;
  }
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
    padding: 2.5em;

    .col1 {
      max-width: 100%;
    }

    .col2 {
      display: block;
    }

    .hero {
      padding-top: 0.875em;
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
    .media {
      img {
        width: 100%;
        object-fit: cover;
        margin: 1em 0;
      }
    }
  }
`;

export default EZText;
