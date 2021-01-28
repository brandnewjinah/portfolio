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
import Movies from "../assets/thumb/movies_thumb.jpg";
import Shop from "../assets/thumb/shop_thumb.jpg";

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
      <Link to="/shop">
        <List
          img={Shop}
          title="Ecommerce"
          overline="Web Development"
          color="#9dbbad"
        >
          <p>
            Ecommerce site for snacks focused on customer shopping experience
            and admin product management.
          </p>
        </List>
      </Link>
      <Link to="/movies">
        <List
          img={Movies}
          title="Movie Ratings"
          overline="Web Development"
          color="#9dbbad"
        >
          <p>
            Movie ratings app where you can rate movies you've watched and get
            personalized recommendations.
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
            Custom UI components for React Native. I'm continuously building the
            components and hope to share it as open-source.
          </p>
        </List>
      </Link>
      <Link to="/rimowa">
        <List
          img={Rimowa}
          title="Rimowa Clone"
          overline="Web Development"
          color="#9dbbad"
        >
          <p>
            Rimowa.com is an e-commerce site for luxury travel gears. I cloned
            this site with the emphasis on seamless checkout flow.
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
            Airbnb App clone project using React Native. This was a solo project
            with emphasis on UI components and live chat feature.
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
            Airbnb.co.kr site clone using React with emphasis on list/map view
            and filtering.
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

  a {
    width: 100%;
  }
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
