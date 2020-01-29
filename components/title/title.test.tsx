import { mount } from "enzyme";
import * as React from "react";
import Title from "./title";

describe("Title", () => {
  it("Title renders without crashing", () => {
    const component = mount(<Title>Test</Title>);
    expect(component).toHaveLength(1);
  });

  it("Title renders a text", () => {
    const component = mount(<Title>Test</Title>);
    expect(component.find("h1").text()).toEqual("Test");
  });
});
