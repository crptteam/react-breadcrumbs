import React from 'react';
import styled from 'styled-components';

const Elem = styled.div`
  margin-right: 13px;
  display: inline-flex;
  align-items: center;
`;

const BreadcrumbDivider = props => {

  return <Elem {...props} />;
};

export default BreadcrumbDivider;
