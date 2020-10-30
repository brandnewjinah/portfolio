import React, { FC, useEffect } from "react";
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

const Airbnb: FC<Props> = () => {
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
          <h1>Airbnb.com Clone</h1>
          <p className="header">
            Airbnb.com is a vacation rental site. I cloned this site along with
            2 front-end devlopers and 2 back-end developers. The goal was to
            create a seamless search and reservation flow.
          </p>
          <div className="btn">
            <div>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/Airbnb_Site_Clone"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="media">
            <iframe
              title="abb"
              width="640"
              height="390"
              src="https://www.youtube.com/embed/IhYx9S43GYw"
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
            <h6>List / Map View</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I was responsible for creating the search results page in both
              list view and the map view. I implemented Axios and Redux to fetch
              data and store user selection. I also created custom image slider,
              responsive layout and pagination.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airbnb_layout-c953eb30260a2631e34568efaab4b349.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Search Filter</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I created filter method that takes checked items as query strings
              to rerender page. I also created a method to clear all checked
              items.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airbnb_filter-e22e333eb5c11948d4b02f29c1b4d083.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Map Component</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I implemented Google Map view with custom marker and custom view
              components.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airbnb_map-e81a6016dc875e0fcd6bda6c91aef47c.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Reservation Page</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I was also responsible for creating a reservation page. I worked
              closely with the backend developer to fetch proper data and
              implement currency conversion.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airbnb_res-8ec05dbe03eb92df2634864a14e4d44f.gif"
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

export default Airbnb;
