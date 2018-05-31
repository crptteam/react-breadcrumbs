import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';

import { defaultTheme } from '../theme/';

const Elem = styled.span`
  line-height: ${props => props.lineHeight};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  display: inline-block;
  height: ${props => props.height};
  font-weight: ${props => props.fontWeight};
`;

const LastBreadcrumb = props => {

  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(theme, getThemeAsPlainTextByKeys(
    props.theme && props.theme.lastBreadcrumb || defaultTheme.lastBreadcrumb,
    props.disabled ? 'disabled' : 'main'
  ));

  return <Elem {...theme} {...props}  />;
};

export default LastBreadcrumb;
