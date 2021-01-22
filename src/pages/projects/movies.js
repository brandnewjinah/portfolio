import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//import components

//import syles and assets
import styled from "styled-components";
import { Back } from "../../assets/Icons";

import PLP from "../../assets/rimowa/rimowa_plp.gif";
import Purchase from "../../assets/rimowa/rimowa_purchase.gif";

const Rimowa = () => {
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
          <h1>MOVIE RATINGS</h1>
          <p className="header">
            I created a site where you can rate movies you've watched and get
            personalized profile and recommendations based on your answer. I
            used TMDB api to make requests and redux to store answers.
          </p>
          <div className="btn">
            <div>
              <a target="_blank" href="https://mymovieprofile.netlify.app/">
                Live
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/mymovies"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Profile</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              First time users can start rating movies they've watched and get a
              personalized profile page.
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
            <h6>Keywords</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              On the details page, you can save keywords that describe why you
              liked the movie for better recommendatiions.
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
            <h6>Recommendations</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              This page shows recommended movies base on your liked movie,
              genres from your liked movies and saved keywords.
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
            <h6>Rate more</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              You can always rate more movies for better recommendation results.
              You can sort by different criteria and exclude certain genres from
              showing up.
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
    display: flex;

    a {
      font-size: 1rem;
      text-decoration: underline;
      margin: 0 1em 1.5em 0;
    }
  }

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
      display: block;

      img {
        width: 100%;
        object-fit: cover;
        margin: 1em 0;
      }

      iframe {
        width: 100%;
      }
    }
  }
`;

export default Rimowa;
