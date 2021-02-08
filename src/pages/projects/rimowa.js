import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";
import PLP from "../../assets/rimowa/rimowa_plp.gif";
import Purchase from "../../assets/rimowa/rimowa_purchase.gif";

const Rimowa = () => {
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
            <div className="header">Rimowa.com Clone</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              An e-commerce site for luxury travel gears.
            </div>

            <div className="btncontainer">
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/Rimowa_Clone"
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
              <p className="body">React, Redux, Styled-Components</p>
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
                As a part of the bootcamp projects, I cloned this site along
                with 2 front-end devlopers and 2 back-end developers. The goal
                was to create a seamless checkout flow.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Demo</div>
          </div>
          <div className="seven">
            <div className="media">
              <iframe
                title="rimowa"
                width="100%"
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
          <div className="three">
            <div className="sub">Signup / Login</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I was responsible for all of the UI elements, form validation
                and server communications.
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
          <div className="three">
            <div className="sub">Filter and Sort</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                This page was originally initiated by another developer. I
                refactored the code using hooks and added filter/sort
                functionality.
              </p>
              <div className="media">
                <img src={PLP} alt="" />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="three">
            <div className="sub">Shopping Cart</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I was responsible for creating product detail page and cart
                page. I used Redux to store cart items.
              </p>
              <div className="media">
                <img src={Purchase} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Homepage</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I worked on the full page laout and implemented animation using
                CSS keyframes.
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
    padding: 1em 0;
    margin: 1em 0;

    img {
      width: 100%;
      object-fit: cover;
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
  }
`;

export default Rimowa;
