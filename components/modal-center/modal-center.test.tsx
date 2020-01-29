import { mount } from "enzyme";
import * as React from "react";
import ModalCenter from "./modal-center";

describe("ModalCenter", () => {
  it("ModalCenter renders without crashing", () => {
    const component = mount(<ModalCenter>Test</ModalCenter>);
    expect(component).toHaveLength(1);
  });

  it("ModalCenter renders a text", () => {
    const component = mount(<ModalCenter>Test</ModalCenter>);
    expect(component.find("div").text()).toEqual("Test");
  });
});
