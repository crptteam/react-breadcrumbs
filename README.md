# Breadcrumbs

Компонент хлебных крошек.
Отображает хлебные крошки в виде ссылок, разделенных иконкой стрелки.

## Usage

```javascript

import { Breadcrumbs } from  "@crpt/crpt-react-library";


  breadcrumbs: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  withCustomLinks: PropTypes.bool

<Breadcrumbs breadcrumbs={[{
      href: "index",
      title: "Главная",
      id: 1
    },
      {
      href: "catalog",
      title: "Претензии",
      id: 2
    },{
      href: "catalog-item",
      title: "Претензия #445612",
      id: 3
    }]}
/>

```
| PropName | Описание | Пример |
|---|---|---|
| breadcrumbs: Array (Required)  | Список значений для выбора, имеют формат {href: "index",title: "Главная", id: 1}. |  `<Breadcrumbs breadcrumbs={[{id:1, href: "index", title: "Main page"}]} />` |
| onClick: Function  | Срабатывает при нажатии на любую из ссылок. |  `<Breadcrumbs onClick={val => console.log(val)} />` |
| withCustomLinks: Boolean  | Если равно true, то перехода по ссылке не происходит. Default=true.  |  `<Breadcrumbs withCustomLinks />` |
