import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";
import Cover from "../../assets/ezt/cover.jpg";
import Approach from "../../assets/ezt/approach.png";
import Report from "../../assets/ezt/screen1.jpg";
import Report2 from "../../assets/ezt/screen2.jpg";
import Mobile from "../../assets/ezt/mobile.jpg";

const EZText = () => {
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
            <div className="header">EZ Texting</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              EZ Texting is a SaaS company that provides SMS marketing solutions
              to businesses of all sizes.
            </div>

            <div className="btncontainer">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/ez-texting-messaging-app/id1465358979"
              >
                <div className="btn">
                  <div>APP STORE</div>
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
            <div className="sub">Role</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                My role was to create UX/UI design for the reporting system and
                the brand new mobile app.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Approach</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                The goal was to create an easy to use platform where customers
                could actively engage in marketing their own businesses.
              </p>
              <div className="media">
                <img src={Approach} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Reporting</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                The reporting section had enterprise level data that could be
                intimidating to small business owners. The goal was to create
                friendly interface so that customers take actions easily.
                Business goal was to introduce more solutions.
              </p>
              <div className="media">
                <img src={Report} alt="" />
              </div>
              <div className="media">
                <img src={Report2} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Mobile</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                To increase the engagement level with the product, it was
                necessary to create a mobile app so that business owners could
                easily send and receive messages and respond to customer
                questions on the go. I was involved in the entire design process
                from defining the problem to UI design.
              </p>
              <div className="media">
                <img src={Mobile} alt="" />
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
    padding: 3em;
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

export default EZText;
