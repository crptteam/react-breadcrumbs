import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-breadcrumbs Demo</h1>
      <Example
        wrap={false}
        breadcrumbs={[{
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
            title: "ON_SCHFDOPPR_2BM-7731369928-773101001-201710160158236546138_2BM-7718239655-2013010911292072118020000000000_20181107_570d5a12-4ce4-465b-ba80-00b9c921ccadON_SCHFDOPPR_2BM-7731369928-773101001-201710160158236546138_2BM-7718239655-2013010911292072118020000000000_20181107_570d5a12-4ce4-465b-ba80-00b9c921ccad",
            id: 3
          }]}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
