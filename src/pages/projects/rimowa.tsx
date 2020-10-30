import React, { FC, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//import components

//import syles and assets
import styled from "styled-components";
import { Back } from "../../assets/Icons";

import PLP from "../../assets/rimowa/rimowa_plp.gif";
import Purchase from "../../assets/rimowa/rimowa_purchase.gif";

interface Props {}

const Rimowa: FC<Props> = () => {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <Logo>J</Logo>
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
          <h1>RIMOWA CLONE</h1>
          <p className="header">
            Rimowa.com is an e-commerce site for luxury travel gears. I cloned
            this site along with 2 front-end devlopers and 2 back-end
            developers. The goal was to create a seamless checkout flow.
          </p>
          <div className="btn">
            <div>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/Rimowa_Clone"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="media">
            <iframe
              title="rimowa"
              width="640"
              height="390"
              src="https://www.youtube.com/embed/a3mt9oeqr9Q"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Signup / Login</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I was responsible for creating Sign Up and Login page. On top of
              creating all of the UI components, I also added password show/hide
              feature, form validation methods, and http communications.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/rimowa_register-5f1b3c23bf5ec7d209a91534badcabc9.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Filter and Sort</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Product list page was originally done by another developer, but I
              decided to code this page myself as a practice. I used hooks, and
              I also added functionality to update the page based on sort and
              filter results.
            </p>
            <div className="media">
              <img src={PLP} alt="" />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Shopping Cart</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I was responsible for creating the product detail page and cart
              page. I implemented Redux with Ducks pattern to control all of
              cart items. I also added functionality to update the cart and
              reflect the calculation.
            </p>
            <div className="media">
              <img src={Purchase} alt="" />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Homepage</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I create the full page laout and implemented animation using CSS
              keyframes.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/rimowa_homepage-f8df51febd314b4755d06442965a4796.gif"
                alt=""
              />
            </div>
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
  top: 4em;
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
  }

  .media {
    width: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    padding: 3em 0;
    margin: 1em 0;

    img {
      max-width: 600px;
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

export default Rimowa;
