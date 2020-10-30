import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";

//import components
import List from "../components/list";

//import syles and assets
import styled from "styled-components";
import Ezthumb from "../assets/thumb/ezthumb.jpg";
import Gladeo from "../assets/thumb/gladeo_thumb.jpg";
import BBD from "../assets/thumb/bbd_thumb.jpg";
import Revolve from "../assets/thumb/re_thumb.jpg";
import Mahalo from "../assets/thumb/ma_thumb.jpg";

interface Props {}

const UXProjects: FC<Props> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        <Logo>J</Logo>
      </Link>
      <Section>
        <div className="col1">
          <div className="sub">
            <h6>UX/UI</h6>
          </div>
        </div>
        <div className="col2">
          <Item>
            <Link to="/eztext">
              <List
                img={Ezthumb}
                title="EZ Texting"
                overline="SaaS"
                color="#9dbbad"
              >
                <p>
                  UX/UI design for a SaaS company that provides SMS marketing
                  solutions.
                </p>
              </List>
            </Link>
            <Link to="/gladeo">
              <List
                img={Gladeo}
                title="Gladeo"
                overline="Non-profit"
                color="#9dbbad"
              >
                <p>
                  UX/UI design for a-non profit organization that provides
                  career advice for students in underrepresented areas.
                </p>
              </List>
            </Link>
            <Link to="/beautybd">
              <List
                img={BBD}
                title="Beauty By Design"
                overline="Design"
                color="#9dbbad"
              >
                <p>
                  UX/UI design for a mobile skincare concierge that connects
                  customers with professional estheticians.
                </p>
              </List>
            </Link>
            <Link to="/revolve">
              <List
                img={Revolve}
                title="Revolve"
                overline="e-commerce"
                color="#9dbbad"
              >
                <p>
                  UX design for a fashion e-commerce site that's targeted for
                  millennials and gen z.
                </p>
              </List>
            </Link>
            <Link to="/mahalo">
              <List
                img={Mahalo}
                title="Mahalo"
                overline="Design"
                color="#9dbbad"
              >
                <p>
                  UX/UI design for a knowledge sharing portal with multi million
                  visitors.
                </p>
              </List>
            </Link>
          </Item>
        </div>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  background-color: #e2f0e9;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 40px;
  height: 40px;
  top: 6em;
  background-color: #8db09f;
  color: #e2f0e9;

  @media (max-width: 950px) {
    top: 0;
  }
`;

const Section = styled.section`
  color: #3f6151;
  width: 100%;
  max-width: 1360px;
  display: flex;
  margin: 0 auto;
  padding: 4em 12em;

  a {
    width: 100%;
  }

  .col1 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col2 {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 0; //grow, shrink , basis
  }

  .sub {
    display: flex;
    justify-content: flex-end;
    padding: 0 4em 0 0;
  }

  h6 {
    text-transform: uppercase;
    font-size: 0.75rem;

    &:before {
      display: inline-block;
      content: "";
      width: 1rem;
      height: 1px;
      transform: translate(-0.5em, -0.25em);
      background-color: #ff7382;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 4em;

    .col1 {
      max-width: 100%;
    }

    .sub {
      justify-content: flex-start;
      margin-bottom: 3em;
    }

    h6 {
      &:before {
        display: none;
      }

      &:after {
        display: inline-block;
        content: "";
        width: 1rem;
        height: 1px;
        transform: translate(0.5em, -0.25em);
        background-color: #ff7382;
      }
    }
  }
`;
const Item = styled.div``;

export default UXProjects;
