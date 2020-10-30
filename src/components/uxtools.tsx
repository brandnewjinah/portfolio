import React, { FC } from "react";

//import syles and assets
import styled from "styled-components";
import * as Icons from "../assets/Icons";

interface Props {}

const UXTools: FC<Props> = () => {
  return (
    <Container>
      <div>
        I have been working as UX/UI designer for over 10 years. Industries I've
        worked in includes but not limited to e-commerce, SaaS, technology, and
        non-profit organizations.
      </div>
      <div style={{ marginTop: `1.5em` }}>
        I'm comfortable using XD, Figma and Sketch.
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
`;

const Tool = styled.div`
  display: flex;
  margin: 2.5em 0;

  div {
    margin: 0 0.25em;
  }
`;
export default UXTools;
