# Breadcrumbs

Breadcrumbs component with onClick callback.

## Usage

```javascript

import { Breadcrumbs } from  "@crpt/react-breadcrumbs";

<Breadcrumbs breadcrumbs={[{
      href: "index",
      title: "Main",
      id: 1
    },
      {
      href: "catalog",
      title: "Complaints",
      id: 2
    },{
      href: "catalog-item",
      title: "Complaint #445612",
      id: 3
    }]}
/>

```
| PropName | Description | Example |
|---|---|---|
| breadcrumbs: Array (Required)  | List of objects with format {href: "", title: "Main", id: 1}. |  `<Breadcrumbs breadcrumbs={[{id:1, href: "index", title: "Main page"}]} />` |
| onClick: Function  | Fired on any link click. |  `<Breadcrumbs onClick={val => console.log(val)} />` |
| withCustomLinks: Boolean  | If true, no link are followed. Default=true.  |  `<Breadcrumbs withCustomLinks />` |
