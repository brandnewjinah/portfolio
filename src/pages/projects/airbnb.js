import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";

const Airbnb = () => {
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
            <div className="header">Airbnb Site Clone</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">Airbnb.co.kr clone project.</div>

            <div className="btncontainer">
              <a
                target="_blank"
                href="https://github.com/wecode-bootcamp-korea/Codebnb-frontend"
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
                was to create a seamless search and reservation flow.
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
                src="https://www.youtube.com/embed/IhYx9S43GYw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">List / Map View</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I was created search results page in both list view and the map
                view. I implemented Axios and Redux to fetch data and store user
                selection. I also created custom image slider, responsive layout
                and pagination.
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
          <div className="three">
            <div className="sub">Search Filter</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I created filter method that takes checked items as query
                strings to rerender page.
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
          <div className="three">
            <div className="sub">Map Component</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
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
          <div className="three">
            <div className="sub">Reservation Page</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
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

export default Airbnb;
