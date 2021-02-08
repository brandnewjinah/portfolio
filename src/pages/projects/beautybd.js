import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";
import Cover from "../../assets/beautybd/cover.jpg";
import Journey from "../../assets/beautybd/journey.jpg";
import Wire1 from "../../assets/beautybd/bbyd_wire_1.jpg";
import Wire2 from "../../assets/beautybd/bbyd_wire_2.jpg";
import Wire3 from "../../assets/beautybd/bbyd_wire_3.jpg";
import Wire4 from "../../assets/beautybd/bbyd_wire_4.jpg";
import UI from "../../assets/beautybd/bbyd_UI_1.jpg";

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
            <div className="header">Beauty By Design</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              An online skincare concierge that connects customers with
              professional estheticians.
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
                My role was to create UX/UI design for the responsive site that
                provides accurate skin diagnoses and recommends personalized
                skincare products.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Define</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                The goal was to create a mobile centric platform - starting with
                the web then move onto mobile. The challenge was to have
                seamless consultation, evaluation and shopping experience with
                limited web-based technology. I created a user journey map to
                make sure there's no hurdle in the process.
              </p>
              <div className="media">
                <img src={Journey} alt="" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Wireframes</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                Implementing the skin analysis and evaluation step was the most
                challenging yet critical part of the design. Because of limited
                technology resources, customers had to be driven out of the site
                for their native camera usage. It was really important to drive
                them back to the site to complete their experience. I created
                high fidelity wireframes with interaction guidelines.
              </p>
              <div className="media">
                <img src={Wire1} alt="" />
              </div>
              <div className="media">
                <img src={Wire2} alt="" />
              </div>
              <div className="media">
                <img src={Wire3} alt="" />
              </div>
              <div className="media">
                <img src={Wire4} alt="" />
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
                I gave the initial UI design guidelines. I provded layout files
                as well as design guidelines document.
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
