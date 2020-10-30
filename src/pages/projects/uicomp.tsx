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

const UIComp: FC<Props> = () => {
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
          <h1>React Native UI Components</h1>
          <p className="header">
            With my background in UX/UI design, I started building customizable
            UI components that applied best UX practices and also designed
            elegantly. One problem I had with some of the existing UI components
            was a lot of them looked a bit generic and seemed hard to fit into
            certain brands. I'm constantly building so once I have enough
            components to share, I'll figure out a way to distrubute them
            properly.
          </p>
          <div className="btn">
            <div>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/react-native-ui"
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
            <h6>Buttons</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              A component that allows user to press to take actions. You can
              choose shpaes, add left or right arrows, resize, disable or insert
              icons.
            </p>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Buttons.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Lists</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              A component to render continuous lists. You can customize to have
              only texts or add avatar. Avatar can include an image, user
              initial or a default icon. You can have unread property for
              messaging.
            </p>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/ListAvatar%402x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Input</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              A component to allow user to input text. You can choose from
              different shapes, insert prefix, customize color, disable or pass
              error message.
            </p>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Input.png"
                alt=""
                style={{ maxWidth: 600 }}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Cards</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Card is a rectangular container that groups related contents and
              actions about a single subject.
            </p>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/CardLayout2%402x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Scroll Menu</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Scroll Menu acts as a naviation component for a set of tabs that
              cannot fit on screen. You can pass data in an array for menu
              items.
            </p>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/ScrollMenu.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>Bottom Sheeet</h6>
          </div>
        </div>
        <div className="col2">
          <div>
            <p>
              Bottom Sheet is a botoom-anchored container that holds contents or
              actions. It slides up on top of fade in modal.
            </p>
            <div className="media">
              <img
                src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/BottomSheet.gif"
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
      max-width: 300px;
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

export default UIComp;
