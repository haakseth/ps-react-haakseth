import React from 'react';
import TextInputStyledComponents from 'react-components/TextInputStyledComponents';

/** Text input */
export default function ExampleTextInputStyledComponents() {
  return (
    <TextInputStyledComponents
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={e => {
        console.log(e.target.value);
      }}
    />
  );
}
