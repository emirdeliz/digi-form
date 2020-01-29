import { Form as AntdForm, Input} from "antd";
import React from "react";
import { Field } from "react-final-form";

interface IField {
  data: any;
  placeholder: string;
  disabled: boolean;
}

const FieldFormAntd = (props: IField) => {
  const { data, placeholder, disabled } = props;
  return (
    <Field
      {...data}
      render={() => (
        <AntdForm.Item>
          <Input {...data.input} placeholder={placeholder} disabled={disabled} />
        </AntdForm.Item>
      )}
    />
  );
};

export default FieldFormAntd;
