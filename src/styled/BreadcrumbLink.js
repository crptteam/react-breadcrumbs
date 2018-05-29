import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';

import { defaultTheme } from '../theme/';

const Elem = styled.a`
    color: ${props => props.color};
    text-decoration: ${props => props.textDecoration};
    font-family: ${props => props.fontFamily};
    line-height: ${props => props.lineHeight};
    font-size: ${props => props.fontSize};
    height: ${props => props.height};
    display: inline-block;
    margin-right: ${props => props.marginRight};
    font-weight: ${props => props.fontWeight};
  `;

const BreadcrumbLink = props => {

  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(theme, getThemeAsPlainTextByKeys(
    props.theme && props.theme.link || defaultTheme.link,
    props.disabled ? 'disabled' : 'main'
  ));


  return <Elem {...theme} {...props}  />;
};

export default BreadcrumbLink;
