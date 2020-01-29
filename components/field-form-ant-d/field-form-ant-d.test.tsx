import { mount } from "enzyme";
import * as React from "react";
import { Form } from "react-final-form";
import { useField, useForm } from "react-final-form-hooks";
import FieldFormAntd from "./field-form-ant-d";

const Main = () => {
  const { form, handleSubmit } = useForm({
    onSubmit: async (values: any) => {
      // tslint:disable-next-line
      console.log(values);
    },
  });
  const fieldTest = useField("fieldTest", form);
  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <FieldFormAntd placeholder="test" data={fieldTest} disabled={false} />
      )}
    />
  );
};

describe("FieldFormAntd", () => {
  it("FieldFormAntd renders without crashing", () => {
    const component = mount(<Main />);
    expect(component).toHaveLength(1);
  });

  it("FieldFormAntd renders a placeholder", () => {
    const component = mount(<Main />);
    expect(component.find("input").props().placeholder).toEqual("test");
  });
});
