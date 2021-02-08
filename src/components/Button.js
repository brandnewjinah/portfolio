import React from "react";

//import styles and assets
import styled from "styled-components";
import { Close, Google, Facebook } from "../assets/Icons";
import colors from "./Colors";

export const Button = ({
  label,
  type,
  color,
  fontcolor,
  logo,
  value,
  name,
  imp,
  handleClick,
}) => {
  return (
    <Wrapper
      style={{
        ...(type === "fill" && { backgroundColor: color }),
        ...(type === "outline" && {
          border: `1px solid ${color}`,
          color: color,
          backgroundColor: `transparent`,
        }),
      }}
      onClick={handleClick}
    >
      <Align>
        {logo === "google" && (
          <Google width="18" height="18" stroke="2" fill={colors.darkgray} />
        )}
        {logo === "facebook" && (
          <Facebook width="18" height="18" stroke="2" fill={colors.darkgray} />
        )}
        <p style={{ color: fontcolor }}>{label}</p>
      </Align>
    </Wrapper>
  );
};

export const BtnText = ({ label, color, handleClick }) => {
  return (
    <Text onClick={handleClick}>
      <div style={{ color: color, borderBottom: `1px solid ${color}` }}>
        {label}
      </div>
    </Text>
  );
};

export const BtnClose = ({ label, handleClick }) => {
  return (
    <CircleSmall
      onClick={handleClick}
      style={{
        backgroundColor: colors.lightgray,
      }}
    >
      <Close width="14" height="14" color={colors.darkergray} stroke="2" />
    </CircleSmall>
  );
};

export const BtnSm = ({ label, type, color, fontcolor, handleClick }) => {
  return (
    <WrapperSm
      style={{
        ...(type === "fill" && { backgroundColor: color }),
        ...(type === "outline" && {
          border: `1px solid ${color}`,
          color: color,
          backgroundColor: `transparent`,
        }),
      }}
      onClick={handleClick}
    >
      <p style={{ color: fontcolor }}>{label}</p>
    </WrapperSm>
  );
};

const Flex = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.6;
  }
`;

const Align = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5em;
  }
`;

const Wrapper = styled.button`
  width: 100%;
  outline: transparent;
  border: transparent;
  border-radius: 2em;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.875em 2.5em;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`;

const WrapperSm = styled.button`
  width: 100%;
  outline: transparent;
  border: transparent;
  border-radius: 0.25em;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75em 0.25em;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`;

const Text = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: yellow;

  &:hover {
    opacity: 0.5;
  }
`;

const CircleSmall = styled(Flex)`
  padding: 3px;
  border-radius: 50%;
  border: none;
  outline: transparent;
  cursor: pointer;
`;
