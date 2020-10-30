import React from "react";

//import styles and assets
import styled from "styled-components";

interface Props {
  img?: any;
  img2?: any;
  alt?: string;
  title?: string;
  desc?: any;
  right?: boolean;
  overline?: string;
  children?: any;
  mobile?: boolean;
}

const OneCol = ({
  img,
  img2,
  alt,
  title,
  desc,
  right,
  overline,
  children,
  mobile,
}: Props) => {
  return (
    <div>
      <Container>
        <Description>{children}</Description>
        <Image>
          <img src={img} alt="" />
          {img2 && <img src={img2} alt="" />}
        </Image>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
  }

  @media (max-width: 850px) {
    grid-row: 1;
  }
`;
const Description = styled.div`
  padding: 1em 0 3em;
  text-align: center;
  max-width: 1000px;

  @media (max-width: 850px) {
    padding-top: 2em;
  }
`;

export default OneCol;
