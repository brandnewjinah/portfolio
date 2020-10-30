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

const Rimowa: FC<Props> = () => {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <h1>Airbnb App Clone</h1>
          <p className="header">
            After completing the Airbnb.com site clone project, I wanted to
            recreate the experience on moble using React Native. This was a solo
            project completed in about three weeks.
          </p>
          <div className="btn">
            <div>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/react-native-airbnb-clone"
              >
                Source Code
              </a>
            </div>
          </div>
          <div className="media">
            <iframe
              title="abbapp"
              width="640"
              height="390"
              src="https://www.youtube.com/embed/RHxPceOgMB0"
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
              I created reusable input, buttom and form components. I also used
              popular libraries such as Yup and Joi for client side error
              handling.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airapp_login-4de70ac021667d9d214211454730b74a.gif"
                alt=""
              />
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
              I created search filter funtionality in which it filters results
              as you type. I also implemented Wix calendar picker libaray and
              customized it to fit the Airbnb brand. I also created reusable
              counter component and implemented Redux to store user choice.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airapp_home-73b4e7e9f69003749879c920000d1f71.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>List and Details</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I created reusable card component to display the search result. I
              implemented Google Maps to show the results on the map.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airapp_list-1cd69ea8644a3422719f5fcb7fd4ea20.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Host</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I also created the Host section where you can add your own place
              to rent out. I enabled native ImagePicker as well as geolocation
              feature.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airapp_host-5173592478a19b2620273682837ab5a2.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Messaging</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              I implemented socket.io to create socket connection. This enabled
              live sending and receiving of messages.
            </p>
            <div className="media">
              <img
                src="https://brandnewjinah.github.io/static/airapp_message-78ad756f725387b0c8a395e31dcde655.gif"
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
