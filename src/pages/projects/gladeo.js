import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";
import Cover from "../../assets/gladeo/cover.jpg";
import Challenge from "../../assets/gladeo/gladeo_challenge.jpg";
import Model1 from "../../assets/gladeo/gladeo_user_model1.jpg";
import Model2 from "../../assets/gladeo/gladeo_user_model2.jpg";
import Sitemap from "../../assets/gladeo/gladeo_sitemap.jpg";
import Wire1 from "../../assets/gladeo/gladeo_wire_1.jpg";
import Wire2 from "../../assets/gladeo/gladeo_wire_2.jpg";
import UI from "../../assets/gladeo/gladeo_ui.jpg";

const Gladeo = () => {
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
            <div className="header">Gladeo</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              Gladeo is a non profit organization that provides career advice
              for students in underrepresented areas.
            </div>

            <div className="media">
              <img src={Cover} alt="" />
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
                My role was to create UX design for Gladeo.org, a portal for
                students to discover their path and for contributors to inspire
                students.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Challenge</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Gladeo needed one space where students and contributors could
                connect. This meant creating a new platform with knowledge
                sharing capability, as well as merging contents from two
                existing sites.
              </p>
              <div className="media">
                <img src={Challenge} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">User Model</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Based on initial data given by the client, I defined user models
                that helped incorporating both business goals and user goals. It
                was importnat to understand how different user group sought
                after different benefits.
              </p>
              <div className="media">
                <img src={Model1} alt="" />
              </div>
              <div className="media">
                <img src={Model2} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Sitemap</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I created a very thorough sitemaps that captured every aspect of
                the site.
              </p>
              <div className="media">
                <img src={Sitemap} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Wireframe</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                The important thing to consider was providing a place where
                sutents and contributors could actively build relationships.
                Gladeo also needed to frequently feed updated information. The
                solution was to create a portal that was modular and scalable. I
                created high fidelity wireframes and clickable prototypes.
              </p>
              <div className="media">
                <img src={Wire1} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">UI Design</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I stepped in to give an initial UI design guideline. The site
                was heavy in content, so I recommended keeping the site design
                to be clean and minimal, but accentuated enough to have
                encouraging feel throughout.
              </p>
              <div className="media">
                <img src={UI} alt="" />
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
    /* background-color: #fafafa; */
    display: flex;
    justify-content: center;
    padding: 0;
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

export default Gladeo;
