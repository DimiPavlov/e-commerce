import React from "react";

import {
  GroupInputContainer,
  FormInputContainer,
  FormInputLabelContainer,
} from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupInputContainer className="group">
    <FormInputContainer
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <FormInputLabelContainer
        className={otherProps.value.length ? "shrink" : ""}
      >
        {label}
      </FormInputLabelContainer>
    ) : null}
  </GroupInputContainer>
);

export default FormInput;
