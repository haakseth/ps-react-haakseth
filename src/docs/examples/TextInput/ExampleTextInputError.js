import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Text input with error essage */
export default function ExampleTextInputError() {
  return (
    <TextInput
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
