import { Input } from "components/atoms/Input/Input";
import { Label } from "components/atoms/Label/Label";
import React from "react";
import { Wraper } from "./FormField.style";

const FormField = ({ onChange, label, name, id, type = "text", ...props }) => {
  return (
    <Wraper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        data-testid={label}
      ></Input>
    </Wraper>
  );
};

export default FormField;
