import React, { FC } from "react";
import { useHistory, Link } from "react-router-dom";

//import components

//import syles and assets
import styled from "styled-components";
import { Back } from "../../assets/Icons";
import Cover from "../../assets/revolve/cover.jpg";
import Evaluation from "../../assets/revolve/evaluation.jpg";
import Priority from "../../assets/revolve/priority.jpg";
import Sitemap from "../../assets/revolve/sitemap.jpg";
import Journey from "../../assets/revolve/journey.jpg";
import Wire from "../../assets/revolve/wireframe.jpg";

interface Props {}

const Revolve: FC<Props> = () => {
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
          <h1>REVOLVE</h1>
          <p className="header">
            Revolve is a fashion e-commerce site that's targeted for millennials
            and gen z. I was involved in redesign of the entire website.
          </p>
          <div className="btn">
            <a target="_blank" href="https://www.revolve.com">
              Go to the site
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
            <h6>Discover</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I was heavily involved with stakeholder meetings, strategic
              planning sessions, UX process and QA testing sessions. I analyzed
              business and customer needs throguh interviews and surveys. I set
              up priority and goals for the project, conducted heuristic
              evaluation to inspect current issues and compiled competitive
              reserach to present the industry standard.
            </p>
            <img src={Evaluation} alt="" />
            <img src={Priority} alt="" />
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
              Some of the deliverables I produced during this phase include user
              experience map and site map. The user experience map covered every
              step of customer journey from shopping to checkout to post
              purchase. The sitemap not only covered the structure but also the
              flow so that the relationship between contents were more visible.
            </p>
            <img src={Journey} alt="" />
            <img src={Sitemap} alt="" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Design</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Then I created high fidelity wireframes for almost every singe
              page and set up prototype so that all the department could grasp
              good understanding of the design.
            </p>
            <img src={Wire} alt="" />
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

export default Revolve;
