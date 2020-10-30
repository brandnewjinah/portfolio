import React, { FC } from "react";

//import syles and assets
import styled from "styled-components";
import * as Icons from "../assets/Icons";

interface Props {}

const Tools: FC<Props> = () => {
  return (
    <Container>
      {/* <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        vestibulum libero id quam iaculis, vitae dignissim risus bibendum.
        Integer rhoncus magna a arcu consectetur, in posuere turpis finibus.
      </div> */}
      <div className="tools">
        <Tool>
          <div className="icon">
            <Icons.Html width="40" height="40" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>HTML5</h5>
            <p>I can create a semantic and a clean layout with HTML5</p>
          </div>
        </Tool>
        <Tool>
          <div className="icon">
            <Icons.Css width="40" height="40" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>CSS, Sass, CSS-in-JS</h5>
            <p>I can create responsive layouts with proper use of selectors</p>
          </div>
        </Tool>
        <Tool>
          <div className="icon">
            <Icons.Javascript
              width="36"
              height="36"
              color="#f3f2e7"
              color2="#9d9d9d"
            />
          </div>
          <div className="desc">
            <h5>JavaScript</h5>
            <p>
              I know modern javascript and DOM. I'm actively studying to
              strengthen the knowledge
            </p>
          </div>
        </Tool>
        <Tool>
          <div className="icon">
            <Icons.Typescript width="36" height="36" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>TypeScript</h5>
            <p>
              I started building open-source UI components for React Native in
              Typescript
            </p>
          </div>
        </Tool>
        <Tool>
          <div className="icon">
            <Icons.Rea width="40" height="40" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>React, React Native</h5>
            <p>
              I can write functional components. I understand the lifecycle and
              virtual DOM
            </p>
          </div>
        </Tool>
        <Tool>
          <div className="icon">
            <Icons.Redux width="40" height="40" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>Redux</h5>
            <p>
              I understand the Redux flow and I like implementing with Ducks
              pattern
            </p>
          </div>
        </Tool>
        {/* <Tool>
          <div className="icon">
            <Icons.Sass width="40" height="40" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>Sass</h5>
            <p>I can create a semantic and a clean layout with HTML5</p>
          </div>
        </Tool> */}
        <Tool>
          <div className="icon">
            <Icons.Git width="40" height="40" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>Git</h5>
            <p>
              I'm familiar with Git and Github. I'm actively studying to master
              Git
            </p>
          </div>
        </Tool>
        <Tool>
          <div className="icon">
            <Icons.Node width="40" height="40" color="#9d9d9d" />
          </div>
          <div className="desc">
            <h5>Node</h5>
            <p>
              I'm currently stuying Node to better understand how everything
              ties together in the web
            </p>
          </div>
        </Tool>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-size: 1rem;
  padding: 1em 0;

  .tools {
    /* margin: 1em 0; */
  }
`;

const Tool = styled.div`
  display: flex;
  margin: 2.5em 0;

  .icon {
    display: flex;
    width: 5%;
    justify-content: center;
    align-items: center;
  }

  .desc {
    flex: 1 0 0;
    line-height: 1.45rem;
    padding-left: 1em;

    h5 {
      font-size: 1rem;
      font-weight: 600;
    }

    p {
      font-weight: 300;
    }
  }
`;

export default Tools;
