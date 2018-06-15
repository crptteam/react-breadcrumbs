import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys, innerMerge } from '../utils';

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

  const merged = innerMerge(
    {},
    defaultTheme.Breadcrumbs,
    props.theme && props.theme.Breadcrumbs ? props.theme.Breadcrumbs : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  Object.assign(theme, getThemeAsPlainTextByKeys(
    merged.lastBreadcrumb,
    props.disabled ? 'disabled' : 'main'
  ));

  return <Elem {...theme} {...props}  />;
};

export default LastBreadcrumb;
