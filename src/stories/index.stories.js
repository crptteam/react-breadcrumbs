import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import Breadcrumbs from '../components/Breadcrumbs';


const elements = storiesOf('Breadcrumbs', module);

elements.addDecorator(withKnobs);


elements.add('Breadcrumbs', () => {
  return <Breadcrumbs breadcrumbs={[
    {
      href: "index",
      title: "Главная",
      id: 1
    },
    {
      href: "catalog",
      title: "Претензии",
      id: 2
    },
    {
      href: "catalog-item",
      title: "Претензия #445612",
      id: 3
    }
  ]} />
});

elements.add('Breadcrumbs with custom links', () => {
  return <Breadcrumbs withCustomLinks breadcrumbs={[
    {
      href: "index",
      title: "Главная",
      id: 1
    },
    {
      href: "catalog",
      title: "Претензии",
      id: 2
    },
    {
      href: "catalog-item",
      title: "Претензия #445612",
      id: 3
    }
  ]} />
});

elements.add('Breadcrumbs with custom links and callback', () => {
  return <Breadcrumbs withCustomLinks onClick={val => alert(JSON.stringify(val))} breadcrumbs={[
    {
      href: "",
      title: "Главная",
      id: 1
    },
    {
      href: "catalog",
      title: "Претензии",
      id: 2
    },
    {
      href: "catalog-item",
      title: "Претензия #445612",
      id: 3
    }
  ]} />
});

