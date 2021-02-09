import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";

const UIComp = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper>
      <Link to="/">
        <Logo>J</Logo>
      </Link>
      <Main>
        <Section>
          <div className="three">
            <div className="header">Mobile UI Components</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              React Native UI components built in functional components, that
              are highly customizable.
            </div>

            <div className="btncontainer">
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/react-native-ui"
              >
                <div className="btn">
                  <div>GITHUB</div>
                  <ArrowUpRight
                    width="14"
                    height="14"
                    color="#000"
                    stroke="2"
                  />
                </div>
              </a>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Stacks</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                React Native, Typescript, Styled-Components, Expo.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Why</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                With my background in UX/UI design, I wanted to build
                customizable UI components that applied the best UX practices
                and elegant designs. One problem I had with some of the existing
                UI components was a lot of them looked a bit generic and seemed
                hard to fit into certain brands. I'm constantly building so once
                I have enough components to share, I'll figure out a way to
                distrubute them properly.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Buttons</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                A component that allows user to press to take actions. You can
                choose shpaes, add left or right arrows, resize, disable or
                insert icons.
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
          <div className="three">
            <div className="sub">Lists</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                A component to render continuous lists. You can customize to
                have only texts or add avatar. Avatar can include an image, user
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
          <div className="three">
            <div className="sub">Input</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                A component to allow user to input text. You can choose from
                different shapes, insert prefix, customize color, disable or
                pass error message.
              </p>
              <div className="media">
                <img
                  src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Input.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Cards</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
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
          <div className="three">
            <div className="sub">Scroll Menu</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Scroll Menu acts as a naviation component for a set of tabs that
                cannot fit on a screen. You can pass data in an array for menu
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
          <div className="three">
            <div className="sub">Bottom Sheeet</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Bottom Sheet is a botoom-anchored container that holds contents
                or actions. It slides up on top of a fade-in-modal.
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
      </Main>
    </Wrapper>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;

  a {
    display: flex;
  }
`;

const Logo = styled(Flex)`
  align-items: center;
  position: fixed;
  width: 2.5em;
  height: 2.5em;
  top: 1em;
  left: 1em;
  background-color: #000;
  color: #fff;
`;

const Main = styled.div`
  padding-top: 4em;
`;

const Section = styled(Flex)`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 2em 10em;

  .three {
    flex: 0 1 30%;
    padding-right: 4em;
    text-align: right;
  }

  .seven {
    flex: 0 1 70%;
  }

  .overline {
    font-size: 1.125rem;
    font-weight: 300;
  }

  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 700;
  }

  .sub {
    text-align: right;
    font-size: 0.8rem;
    letter-spacing: 0.125rem;
    font-weight: 400;
    text-transform: uppercase;

    &:before {
      display: inline-block;
      content: "";
      width: 0.875rem;
      height: 1px;
      transform: translate(-0.5em, -0.25em);
      background-color: #ff7382;
    }
  }

  .body {
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }

  .description {
    font-size: 1.45rem;
    font-weight: 400;
    line-height: 2.25rem;
  }

  .btncontainer {
    display: flex;
    margin-top: 1em;
  }

  .btn {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    letter-spacing: 0.2rem;
    border-bottom: 1px solid #ff7382;
    margin-right: 2em;
  }

  .media {
    width: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    padding: 2em 8em;
    margin: 1em 0;

    img {
      width: 100%;
      height: 100%;
      margin: 1em 0;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 5em 2em 2em;

    .three {
      padding-right: 0;
      text-align: left;
    }

    .description {
      margin: 1em 0 1.5em;
    }

    .sub {
      text-align: left;
    }

    .media {
      width: 100%;
      background-color: #fff;
      margin: 1em 0;
      padding: 0;

      img {
        width: 100%;
        height: 100%;
        /* object-fit: contain; */
      }
    }
  }
`;

export default UIComp;
