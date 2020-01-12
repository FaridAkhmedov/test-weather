import React, { useState } from "react";
import styled from "styled-components";
import { Slider } from "react-soft-slider";

export default ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <Inner index={index} onIndexChange={setIndex}>
      {children}
    </Inner>
  );
};

const Inner = styled(Slider)`
  width: 320px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 320px;
`;
