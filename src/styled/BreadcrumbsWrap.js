import React from "react";
import styled from "styled-components";

const Elem = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
`;

const BreacrumbsWrap = props => {
  return <Elem {...props} />;
};

export default BreacrumbsWrap;
