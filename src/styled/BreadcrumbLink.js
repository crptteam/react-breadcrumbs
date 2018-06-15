import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys, innerMerge } from '../utils';

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

  const merged = innerMerge(
    {},
    defaultTheme.Breadcrumbs,
    props.theme && props.theme.Breadcrumbs ? props.theme.Breadcrumbs : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  Object.assign(theme, getThemeAsPlainTextByKeys(
    merged.link,
    props.disabled ? 'disabled' : 'main'
  ));


  return <Elem {...theme} {...props}  />;
};

export default BreadcrumbLink;
