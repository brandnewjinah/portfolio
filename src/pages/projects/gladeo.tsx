import React, { FC } from "react";
import { useHistory, Link } from "react-router-dom";

//import components

//import syles and assets
import styled from "styled-components";
import { Back } from "../../assets/Icons";
import Cover from "../../assets/gladeo/cover.jpg";
import Challenge from "../../assets/gladeo/gladeo_challenge.jpg";
import Model1 from "../../assets/gladeo/gladeo_user_model1.jpg";
import Model2 from "../../assets/gladeo/gladeo_user_model2.jpg";
import Sitemap from "../../assets/gladeo/gladeo_sitemap.jpg";
import Wire1 from "../../assets/gladeo/gladeo_wire_1.jpg";
import Wire2 from "../../assets/gladeo/gladeo_wire_2.jpg";
import UI from "../../assets/gladeo/gladeo_ui.jpg";

interface Props {}

const Gladeo: FC<Props> = () => {
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
          <h1>Gladeo</h1>
          <p className="header">
            Gladeo is a non profit organization that provides career advice for
            students in underrepresented areas. Gladeo.org is a portal for
            students to discover their path and for contributors to inspire
            students
          </p>
          <div>
            <img src={Cover} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Challenge</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Gladeo needed on space where students and contributors could
              connect. This meant creating a new platform whi knowledge sharing
              capability, as well as merging contents from two existing sites.
            </p>
            <img src={Challenge} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>User Model</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Based on initial data given by the client, I defined user models
              that helped incorporating both business goals and user goals. It
              was importnat to understand different user groupt sought after
              different benefits.
            </p>
            <img src={Model1} alt="" />
            <img src={Model2} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Sitemap</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I created a very thorough sitemaps that captured every aspect of
              the site.
            </p>
            <img src={Sitemap} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Wireframe</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              The important thing to consider was providing a place where
              sutents and contributors could actively build relationships.
              Gladeo also needed to frequently feed updated information. The
              solution was to create a portal that was modular and scalable. I
              created high fidelity wireframes and clickable prototypes.
            </p>
            <img src={Wire1} alt="" />
            <img src={Wire2} alt="" />
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
              I stepped in to give an initial UI design guideline. The site was
              heavy in content, so I recommended keeping the site design to be
              clean and minimal, but accentuated enough to have encouraging feel
              throughout.
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

export default Gladeo;
