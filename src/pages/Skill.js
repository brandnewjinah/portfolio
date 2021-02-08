import React from "react";

//import components
import Accordion from "../components/accordion";
import FEtools from "../components/fetools";
import UXtools from "../components/uxtools";

//import syles and assets
import styled from "styled-components";

const Skill = () => {
  return (
    <Container>
      <Accordion title="Front-End Development">
        <FEtools />
      </Accordion>
      <Accordion title="UX/UI Design">
        <UXtools />
      </Accordion>
    </Container>
  );
};

const Container = styled.div`
  color: #334a52;
`;

export default Skill;
