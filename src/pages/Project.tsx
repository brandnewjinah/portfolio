import React, { FC } from "react";
import { Link } from "react-router-dom";

//import components
import List from "../components/list";

//import syles and assets
import styled from "styled-components";
import ABBM from "../assets/thumb/abbm_thumb.jpg";
import UIComp from "../assets/thumb/uicomp_thumb.jpg";
import ABBW from "../assets/thumb/abbw_thumb.jpg";
import Rimowa from "../assets/thumb/rimowa_thumb.jpg";
import UX from "../assets/thumb/ux_thumb.jpg";

interface Props {}

const Project: FC<Props> = () => {
  return (
    <Container>
      <Header>
        <h1 className="header">Things I've worked on</h1>
        <p className="italic">
          * Clone projects are NOT tutorial follow along. I chose projects
          carefully to get exposure on some of the best products out there and I
          struggled to solve the problems :)
        </p>
      </Header>
      <Link to="/rimowa">
        <List
          img={Rimowa}
          title="Rimowa Clone"
          overline="Web Development"
          color="#9dbbad"
        >
          <p>
            Rebranding and website creation for conferences technical challenge
            hello is this long enough.
          </p>
        </List>
      </Link>
      <Link to="/abbapp">
        <List
          img={ABBM}
          title="Airbnb App Clone"
          overline="Mobile Development"
          color="#9dbbad"
        >
          <p>
            Rebranding and website creation for conferences technical challenge
            hello is this long enough.
          </p>
        </List>
      </Link>
      <Link to="/uicomp">
        <List
          img={UIComp}
          title="UI Components"
          overline="Mobile Development"
          color="#9dbbad"
        >
          <p>
            Rebranding and website creation for conferences technical challenge
            hello is this long enough.
          </p>
        </List>
      </Link>
      <Link to="/abb">
        <List
          img={ABBW}
          title="Airbnb Web Clone"
          overline="Web Development"
          color="#9dbbad"
        >
          <p>
            Rebranding and website creation for conferences technical challenge
            hello is this long enough.
          </p>
        </List>
      </Link>
      <Link to="/uxprojects">
        <List
          img={UX}
          title="UX / UI Design Projects"
          overline="Design"
          color="#9dbbad"
        >
          <p>
            UX/UI design works done at e-commerce, SaaS, technology and
            non-profit industries.
          </p>
        </List>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  color: #3f6151;
`;

const Header = styled.div`
  margin-bottom: 4em;

  .header {
    margin-bottom: 0.5em;
  }

  .italic {
    font-size: 1rem;
    font-style: italic;
  }

  @media (max-width: 950px) {
    .header {
      font-size: 2.5rem;
      line-height: 2.75rem;
    }
  }
`;

export default Project;
