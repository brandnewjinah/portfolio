import React from "react";

//import syles and assets
import styled from "styled-components";
import * as Icons from "../assets/Icons";

const UXTools = () => {
  return (
    <Container>
      <p>
        I have been working as UX/UI designer for over 10 years in industries
        like e-commerce, SaaS, marketing, technology, and non-profit
        organizations.
      </p>
      <div style={{ marginTop: `1.5em` }}>
        <p>I'm comfortable using Figma, XD and Sketch.</p>
      </div>
      <div className="tools">
        {/* <Tool>
          <div>
            <Icons.Ps width="26" height="26" color="#98a2a6" color2="#f3f2e7" />
          </div>
          <div>
            <Icons.Ai width="26" height="26" color="#98a2a6" color2="#f3f2e7" />
          </div>
          <div>
            <Icons.Xd width="26" height="26" color="#98a2a6" color2="#f3f2e7" />
          </div>
          <div>
            <Icons.Figma width="26" height="26" color="#98a2a6" />
          </div>
        </Tool> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-size: 1rem;
  padding: 1em 0;

  p {
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
`;

const Tool = styled.div`
  display: flex;
  margin: 2.5em 0;

  div {
    margin: 0 0.25em;
  }
`;
export default UXTools;
