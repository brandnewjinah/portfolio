import React from "react";

//import styles and assets
import styled from "styled-components";

interface Props {
  img?: any;
  alt?: string;
  title?: string;
  desc?: any;
  right?: boolean;
  overline?: string;
  children?: any;
  mobile?: boolean;
}

const Details = ({
  img,
  alt,
  title,
  desc,
  right,
  overline,
  children,
  mobile,
}: Props) => {
  return (
    <>
      {right ? (
        <Container>
          <DescriptionL>{children}</DescriptionL>
          {mobile ? (
            <ImageR>
              <img src={img} alt={alt} style={{ maxHeight: "300px" }} />
            </ImageR>
          ) : (
            <ImageR>
              <img src={img} alt={alt} />
            </ImageR>
          )}
        </Container>
      ) : (
        <Container>
          {mobile ? (
            <Image className="rightImg">
              <img src={img} alt={alt} style={{ maxHeight: "300px" }} />
            </Image>
          ) : (
            <Image className="rightImg">
              <img src={img} alt={alt} />
            </Image>
          )}

          <Description className="rightDesc">{children}</Description>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* background-color: #566c56; */

  @media (max-width: 850px) {
    padding: 20px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Image = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }

  @media (max-width: 850px) {
    grid-row: 1;
  }
`;

const ImageR = styled.div`
  grid-column-start: 3;
  grid-column-end: 6;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }

  @media (max-width: 850px) {
    grid-row: 1;
  }
`;

const Description = styled.div`
  grid-column-start: 4;
  grid-column-end: 6;
  padding: 1em 1em 1em 3em;
  /* background-color: #05a07f; */

  @media (max-width: 850px) {
    padding-top: 2em;
  }
`;

const DescriptionL = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  padding: 1em 3em 1em 1em;
  /* background-color: #05a07f; */

  @media (max-width: 850px) {
    padding-top: 2em;
  }
`;

export default Details;
