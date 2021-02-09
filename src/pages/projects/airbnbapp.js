import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";

const AirbnbApp = () => {
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
            <div className="header">Airbnb App Clone</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">React Native clone project.</div>

            <div className="btncontainer">
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/react-native-airbnb-clone"
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
                After completing the Airbnb.com site clone project, I wanted to
                recreate the experience on moble using React Native.
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
                src="https://www.youtube.com/embed/RHxPceOgMB0"
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
                I created reusable input, buttom and form components. I also
                used popular libraries such as Yup and Joi for client side error
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
          <div className="three">
            <div className="sub">Homepage</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
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
          <div className="three">
            <div className="sub">List and Details</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I created reusable card component to display the search result.
                I implemented Google Maps to show the results on the map.
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
          <div className="three">
            <div className="sub">Host</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I created the Host section where you can add your own place to
                rent out. I enabled native ImagePicker and geolocation feature.
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
          <div className="three">
            <div className="sub">Messaging</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I implemented socket.io to create socket connection. This
                enabled live sending and receiving of messages.
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
      /* width: 100%; */
      max-width: 600px;
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

export default AirbnbApp;
