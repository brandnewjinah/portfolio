import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

//import syles and assets
import styled from "styled-components";
import { Plus } from "../assets/Icons";

const Skills = ({ title, children }) => {
  const [active, setActive] = useState(false);

  const currRef = useRef(null);

  const ex1 = useSpring({
    height: active ? currRef.current.scrollHeight : 0,
  });

  return (
    <Container>
      <div>
        <div className="flex" onClick={() => setActive(!active)}>
          <h1 className="header">{title}</h1>
          <Icon
            style={
              active
                ? { transform: `rotate(45deg)` }
                : { transform: `rotate(0deg)` }
            }
          >
            <Plus width="30" height="30" color="#334a52" stroke="1" />
          </Icon>
        </div>
        <Content style={ex1} ref={currRef}>
          {children}
        </Content>
      </div>
    </Container>
  );
};

const Container = styled.section`
  border-bottom: 1px solid #f49292;
  padding-bottom: 2.5em;
  margin-bottom: 2.5em;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    .header {
      font-size: 2.5rem;
      line-height: 2.75rem;
    }
  }
`;

const Icon = styled.div`
  height: 30px;
  transform-origin: center;
  transition: all 0.4s ease;
`;

const Content = styled(animated.div)`
  overflow: auto;
`;

export default Skills;
