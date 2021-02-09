import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";
import Flow from "../../assets/movies/movies_flow.jpg";

const Movie = () => {
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
            <div className="header">Movie Ratings</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              Rate movies you've watched, get a personalized movie profile and
              get recommendations.
            </div>

            <div className="btncontainer">
              <a target="_blank" href="https://mymovieprofile.netlify.app/">
                <div className="btn">
                  <div>LIVE</div>
                  <ArrowUpRight
                    width="14"
                    height="14"
                    color="#000"
                    stroke="2"
                  />
                </div>
              </a>
              <a
                target="_blank"
                href="https://github.com/brandnewjinah/mymovies"
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
                React, Redux, Prop Types, Styled-Components
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
                I wanted to understand myself better by analyzing my movie
                preferences. Then, I wanted to use the data to help me make
                decision with what to watch on streaming apps.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Process</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I created a user flow first to organize structure, main events
                and routes.
              </p>
              <div className="media">
                <a href="https://user-images.githubusercontent.com/44072645/107153364-f75f7e80-6921-11eb-9804-4c5746adef68.jpg">
                  <img
                    src="https://user-images.githubusercontent.com/44072645/107153364-f75f7e80-6921-11eb-9804-4c5746adef68.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Rate</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                First time user is asked to rate at least 10 movies to get
                initial profile and recommendations. Movies are fetched from the
                TMDB api, sorted by the most rated movies.
              </p>
              <div className="media">
                <img
                  src="https://user-images.githubusercontent.com/44072645/107152550-638bb380-691d-11eb-94a0-22bd4fc2b110.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Profile</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Then a user can check out personalized profile, analyzed by
                liked and disliked movies, liked genres and directors and
                languages watched in.
              </p>
              <div className="media">
                <img
                  src="https://user-images.githubusercontent.com/44072645/107152871-47891180-691f-11eb-9891-421487b29517.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Keyword</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                On details page, user can save keywords that describe why you
                liked the movie. It will be included in the profile and also be
                used to give better recommendatiions.
              </p>
              <div className="media">
                <img
                  src="https://user-images.githubusercontent.com/44072645/107153183-faa63a80-6920-11eb-8999-e3ed7fce8eec.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Recommendations</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Movies are recommended based on users liked moives, liked genres
                and liked keywords.
              </p>
              <div className="media">
                <img
                  src="https://user-images.githubusercontent.com/44072645/107153305-a3ed3080-6921-11eb-877d-55e84ec09f51.gif"
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
      flex: 0 1 100%;
      padding-right: 0;
      text-align: left;
    }

    .seven {
      flex: 0 1 100%;
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

export default Movie;
