import React, { useLayoutEffect } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import components

//import syles and assets
import Colors from "../../components/Colors";
import { ArrowUpRight } from "../../assets/Icons";
import Cover from "../../assets/revolve/cover.jpg";
import Evaluation from "../../assets/revolve/evaluation.jpg";
import Priority from "../../assets/revolve/priority.jpg";
import Sitemap from "../../assets/revolve/sitemap.jpg";
import Journey from "../../assets/revolve/journey.jpg";
import Wire from "../../assets/revolve/wireframe.jpg";

const Revolve = () => {
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
            <div className="header">Revolve</div>
            {/* <div className="overline">/ Web Development</div> */}
          </div>
          <div className="seven">
            <div className="description">
              Revolve is a fashion e-commerce site that's targeted for
              millennials and gen z. I was involved in redesign of the entire
              website.
            </div>
            <div className="btncontainer">
              <a target="_blank" href="https://www.revolve.com">
                <div className="btn">
                  <div>LIVE SITE</div>
                  <ArrowUpRight
                    width="14"
                    height="14"
                    color="#000"
                    stroke="2"
                  />
                </div>
              </a>
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
                As a senior UX designer, I was heavily involved with stakeholder
                meetings, strategic planning sessions, UX process and QA testing
                sessions.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="three">
            <div className="sub">Discover</div>
          </div>
          <div className="seven">
            <div>
              <p className="body">
                I analyzed business and customer needs throguh interviews and
                surveys. I set up priority and goals for the project, conducted
                heuristic evaluation to inspect current issues and compiled
                competitive reserach to present the industry standard.
              </p>
              <div className="media">
                <img src={Evaluation} alt="" />
              </div>
              <div className="media">
                <img src={Priority} alt="" />
              </div>
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
                Some of the deliverables I produced during this phase include
                user experience map and site map. The user experience map
                covered every step of customer journey from shopping to checkout
                to post purchase. The sitemap not only covered the structure but
                also the flow so that the relationship between contents were
                more visible.
              </p>
              <div className="media">
                <img src={Journey} alt="" />
              </div>
              <div className="media">
                <img src={Sitemap} alt="" />
              </div>
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
                Then I created high fidelity wireframes for almost every singe
                page and set up prototype so that all the department could grasp
                good understanding of the design.
              </p>
              <div className="media">
                <img src={Wire} alt="" />
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

export default Revolve;
