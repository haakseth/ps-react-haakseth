import React from 'react';
import TextInputStyledComponents from 'react-components/TextInputStyledComponents';

/** Text input with error essage */
export default function ExampleTextInputStyledComponentsError() {
  return (
    <TextInputStyledComponents
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={e => {
        console.log(e.target.value);
      }}
      error="First name is required"
    />
  );
}
