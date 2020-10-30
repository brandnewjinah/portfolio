import React, { FC } from "react";
import { Link } from "react-router-dom";

//import syles and assets
import styled from "styled-components";

interface Props {
  img?: string;
  title?: string;
  overline?: string;
  children?: any;
  color?: string;
}

const List: FC<Props> = ({ img, title, overline, children, color }) => {
  return (
    <Container style={{ borderBottomColor: color }}>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <Description>
        <p className="overline">{overline}</p>
        <h4>{title}</h4>
        {children}
      </Description>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 2em;
  margin-bottom: 2em;
  display: flex;
  /* align-items: center; */

  a {
    cursor: pointer;

    &:hover {
    }
  }

  .image {
    width: 200px;
    height: auto;
    margin-right: 2em;
  }

  img {
    width: 200px;
    object-fit: cover;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;

    .image {
      margin-right: 0;
    }
  }
`;

const Description = styled.div`
  .overline {
    font-size: 0.8rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  h4 {
    font-weight: 600;
    margin-bottom: 0.35em;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.35rem;
    color: #3f6151;
  }

  @media (max-width: 950px) {
    text-align: center;
    h4 {
      line-height: 2rem;
    }
  }
`;

export default List;
