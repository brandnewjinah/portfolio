import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";

import Cover from "../../assets/mahalo/cover.jpg";
import Home from "../../assets/mahalo/home.jpg";
import Answers from "../../assets/mahalo/answers.jpg";
import Local from "../../assets/mahalo/local.jpg";
import Local2 from "../../assets/mahalo/local2.jpg";

const Mahalo = () => {
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
            <div className="header">Mahalo</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              Web directory and knowledge sharing portal.
            </div>
          </div>
        </Section>

        <Section>
          <div className="three">
            <div className="sub">Role</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">UX/UI designer</p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Design</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Mahalo needed a complete site redesign for their knowledge
                sharing portal that had multi million visitors. Working closely
                with a product manager and developers, I was heavily involved in
                redesigning existing pages as well as designing new feature
                paes. I was responsible for creating flows, wireframes and UI
                designs.
              </p>
              <div className="media">
                <img src={Home} alt="" />
              </div>
              <div className="media">
                <img src={Answers} alt="" />
              </div>
              <div className="media">
                <img src={Local} alt="" />
              </div>
              <div className="media">
                <img src={Local2} alt="" />
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
    padding: 0;
    margin: 1em 0;

    img {
      width: 100%;
      height: 100%;
      /* object-fit: contain; */
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
      background-color: #fff;
      margin: 1em 0;
      padding: 0;
    }
  }
`;

export default Mahalo;
