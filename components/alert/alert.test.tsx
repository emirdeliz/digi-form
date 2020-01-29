import { mount } from "enzyme";
import * as React from "react";
import Alert from "./alert";

describe("Alert", () => {
  it("Alert renders without crashing", () => {
    const component = mount(<Alert>Test</Alert>);
    expect(component).toHaveLength(1);
  });

  it("Alert renders a text", () => {
    const component = mount(<Alert>Test</Alert>);
    expect(component.find("div").at(0).text()).toEqual("Test");
  });
});
