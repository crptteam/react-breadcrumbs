import React from "react";
import { Breadcrumbs } from "../src/";

describe("Breadcrumbs", () => {

  it("Should renders without problems", () => {

    const wrapper = shallow(
      <Breadcrumbs breadcrumbs={[
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
      ]}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

