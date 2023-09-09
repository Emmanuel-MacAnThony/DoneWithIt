import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, width, ...otherProps }) => {
  const {
    setFieldTouched,

    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
