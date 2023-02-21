import { Input } from "components/atoms/Input/Input.js";
import { Label } from "components/atoms/Label/Label.js";
import React from "react";
import { Wraper } from "./FormField.style.js";

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
